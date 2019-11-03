<template>
  <div id="scan">
    <b-container>
      <!--UPLOAD-->
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <themed-label class="text-center">Upload dependency file(s) to scan</themed-label>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
          <p v-if="isInitial">
            Drag your dependency file(s) here to begin<br> or click to browse
          </p>
          <p v-if="isSaving">
            Uploading {{ fileCount }} file(s)...
          </p>
        </div>
      </form>
      <!--SUCCESS-->
      <div v-if="isSuccess">
        <themed-label class="text-center">Uploaded {{ uploadedFiles.length }} file(s) successfully.</themed-label>
        <pre class="pre">
            <div><themed-text>Please wait, file(s) are getting scanned....</themed-text>
            <themed-label>Progress: </themed-label><b-progress :value="uploadPercentage" :max="100" show-progress :animated="animate"></b-progress></div>           
        </pre>
        <div v-if="uploadPercentage==100">
          <ul class="list-unstyled">
            <li v-for="item in finalArray">
              <themed-label>vulnerabilities Found: {{item.vulnerabilitiesFound}}</themed-label>
              <themed-label>unaffectedVulnerabilities Found: {{item.unaffectedVulnerabilitiesFound}}</themed-label>
            </li>
          </ul>
          <div style="text-align: right !important;">
            <themed-btn>
              <div @click="reset()">Upload again</div>
            </themed-btn>
          </div>
        </div>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <themed-label class="text-center">File(s) upload failed</themed-label>
        <pre>
            <div><themed-label>Status: </themed-label><p>{{ uploadError.status }}</p></div>
            <div><themed-label>StatusText: </themed-label><p>{{ uploadError.statusText }}</p></div>
            <div><themed-label>Error message: </themed-label>{{ uploadError.data.message }}</p></div>
          </pre>
        <div style="text-align: right !important;">
          <themed-btn >
           <div @click="reset()">Try again</div>
          </themed-btn>
        </div>
      </div>
    </b-container>
    <themed-footer>copyright@Debricked</themed-footer>
  </div>
</template>

<script>
import { NetworkService } from '../file-upload-service'; // file upload service
import { wait } from '../utils';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: 'app',
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'fileData',
      finalArray: [],
      uploadPercentage: 0,
      animate: true
    }
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
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      NetworkService.upload(formData).then(x => {       
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
          
          var formData = new FormData();
          formData.append("ciUploadId", x.ciUploadId)
          NetworkService.uploadId(formData).then(status => {
            var that = this;
            if (status === 204) {
              var loop = function() {
                let promises = [];
                promises.push(NetworkService.uploadIdStatus(x.ciUploadId));
                Promise.all(promises).then(values => {
                  that.finalArray = [].concat(values[0].data);
                  if (values[0].data.progress !== -1) {
                    that.uploadPercentage = values[0].data.progress
                  }
                  if (values[0].status === 200) {
                    that.animate = false
                    return;
                  } else {
                    wait(1000)
                    loop();
                  }

                }).catch(err => {
                  console.log("err--", err);
                });
              }
              loop();
            }
          })
            .catch(err => {
              console.log("error----", err);
            });
        })
        .catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      if (!fileList.length) return;
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append('repositoryName', 'test')
        formData.append('commitName', 'test')
        formData.append('uploadAllFiles', true)
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      // save it
      this.save(formData);
    }
  },
  mounted() {
    this.reset();
  },
}

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

.pre{
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
    background-color: black;
}
</style>