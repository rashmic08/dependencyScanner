<template>
  <div id="scan">
    <b-container>
      <!--UPLOAD-->
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <themed-label class="text-center">Upload dependency file(s) to scan</themed-label>
        <div class="dropbox">
          <input
            type="file"
            multiple
            :name="uploadFieldName"
            :disabled="isSaving"
            @change="uploadFiles($event.target.name, $event.target.files); fileCount = $event.target.files.length"            
            class="input-file"
          />
          <p v-if="isInitial">
            Drag your dependency file(s) here to begin
            <br />or click to browse
          </p>
          <p v-if="isSaving">Uploading {{ fileCount }} file(s)...</p>
        </div>
      </form>
      <!--SUCCESS-->
      <div v-if="isSuccess">
        <themed-label class="text-center">Uploaded {{ uploadedFiles.length }} file(s) successfully.</themed-label>
        <div v-if="stillInProgress"><themed-text class="text-center">Please wait, file(s) are getting scanned....</themed-text></div>
        <div v-if="!stillInProgress"><themed-text class="text-center">Scan completed</themed-text></div>
        <div v-for="(item, index) in finalArray" v-bind:key="index"  style="margin-top: 20px">
          <themed-label>Progress(%)</themed-label>
          <b-progress
            :value="item.progress"
            :max="100"
            show-progress
            :animated="item.progress==100 ? false : true"
          ></b-progress>
          <div v-if="item.progress==100" style="margin-top: 20px">
            <themed-text>vulnerabilities Found: {{item.vulnerabilitiesFound}}</themed-text>
            <themed-text>unaffectedVulnerabilities Found: {{item.unaffectedVulnerabilitiesFound}}</themed-text>
          </div>
        </div>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <themed-label class="text-center">File(s) upload failed</themed-label>
        <pre class="pre">
            <div><themed-label>Status: </themed-label><p>{{ uploadError.status }}</p></div>
            <div><themed-label>StatusText: </themed-label><p>{{ uploadError.statusText }}</p></div>
            <div><themed-label>Error message: </themed-label><p>{{ uploadError.data.message }}</p></div>
        </pre>
        <div style="text-align: right !important;margin-top:20px;margin-top:20px">
          <themed-btn>
            <div @click="reset()">Try again</div>
          </themed-btn>
        </div>
      </div>
    </b-container>
    <themed-footer>copyright@Debricked</themed-footer>
  </div>
</template>

<script>
import { NetworkService } from "../file-upload-service"; // file upload and scan service
import { wait } from "../utils";
const STATUS_INITIAL = 0,  STATUS_SAVING = 1,  STATUS_SUCCESS = 2,  STATUS_FAILED = 3;

export default {
  name: "app",
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "fileData",
      finalArray: [],
      uploadPercentage: [],
      stillInProgress: true,
      uploadedFilesName: []
    };
  },
  computed: {
    
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {      
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {      
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {      
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
      this.uploadedFilesName = [];
    },
    uploadFiles(fieldName, fileList) {      
      if (!fileList.length) return;
      var array = [];
      let promises = [];
      // append the files to FormData

      for( var i = 0; i < fileList.length; i++ ){
        const formData = new FormData();
        formData.append("repositoryName", "test");
        formData.append("commitName", "test");        
        formData.append(fieldName, fileList[i], fileList[i].name);
        promises.push(NetworkService.upload(formData));
        this.currentStatus = STATUS_SAVING;
      }

      Promise.all(promises).then(ids => { //returns all the ciuploadIds   
      console.log("ids---",ids);   
          this.uploadedFiles = [].concat(ids);
          this.currentStatus = STATUS_SUCCESS; //files uploaded sucessfully
          var idsPromises = [];
          for (var id in ids) {
            var formData = new FormData();
            formData.append("ciUploadId", ids[id].ciUploadId);
            idsPromises.push(NetworkService.uploadId(formData));
          }
          Promise.all(idsPromises).then(values => { //returns status of each ciuploadId
            var that = this;
            var loop = function() { //poll the api until progress is 100%
              var promises = [];
              for (var val in values) {
                if (values[val] === 204) {
                  promises.push(
                    NetworkService.uploadIdStatus(ids[val].ciUploadId)
                  );
                }
              }
              Promise.all(promises).then(results => {//check progress on each ciuploadId
                  that.finalArray = [].concat(results.map(x => x.data));
                  //set the progress to 0 if it is -1
                  that.finalArray.forEach((element, index) => {
                    if (element.progress === -1) {
                      that.finalArray[index].progress = 0;
                    }                                    
                  });

                  var progressCompleted = that.finalArray.map((element, index) => { 
                    console.log(index, "---element.progress---" ,element.progress);                   
                    if (element.progress === 100) {
                      return true;
                    }            
                    else{
                      return false;
                    }
                  });

                  if(progressCompleted){
                    var incomplete = progressCompleted.some(x => x===false)                            
                    if(incomplete){
                      wait(1000);
                      loop();
                    }else{                      
                      that.stillInProgress = false;
                      return;
                    }
                  }
                })
                .catch(err => {
                  console.log("error -->", err);
                  this.uploadError = err.response;
                  this.currentStatus = STATUS_FAILED;
                });
            };
            loop();
          })
          .catch(err => {
            console.log("error -->", err);
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
        })
        .catch(err => {
          console.log("Error in uploading....", err);
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    }
  },
  mounted() {
    this.reset();
  }
};
</script>

<style>
.dropbox {
  outline: 2px dashed grey;
  /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0;
  /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue;
  /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 50px;
}

#scan {
  margin-top: 100px;
}

.pre {
  font-size: 0.875em;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  white-space: pre;
  word-wrap: normal;
  background-color: black;
  color: white;
}
</style>