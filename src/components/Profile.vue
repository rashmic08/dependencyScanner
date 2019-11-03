<template>
  <div id="profile">
    <b-container>    
      <div class="row justify-content-center">
          <div class="col-sm-12 col-md-6 col-lg-4 column"><theme-picker class="column"/></div>
          <div class="col-sm-12 col-md-6 col-lg-8">
            <themed-title>Nicole Pearson</themed-title>
            <themed-label>About</themed-label><p>Web designer/UI</p>
            <themed-label>Hobbies</themed-label>
            <p>Read, out with friends, listen to music, draw and learn new things.</p>
            <themed-label>Skills</themed-label>
            <themed-btn>Angularjs</themed-btn>
            <themed-btn>Reactjs</themed-btn>
            <themed-btn>vuejs</themed-btn>
            <themed-btn>nodejs</themed-btn>    
          </div>
      </div>
    </b-container>
    <themed-footer>copyright@Debricked</themed-footer>
  </div>
</template>

<script>   
    import ThemePicker from './ThemePicker';
    export default {
    name: 'profile',
    components: {
        ThemePicker
    }
    }
</script>

<style>
    .column {
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 0.75rem;
    }
    #profile{
        margin-top: 100px;
    }
    .row{
        padding: 50px 50px;
    }
   
</style>