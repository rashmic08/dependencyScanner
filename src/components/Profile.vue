<template>
  <div id="profile">
    <b-container>   
      <div class="columns">
        <div class="column">
            <theme-picker class="column"/>
        </div>
        <div class="column is-three-quarters">
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
    import 'bulma/css/bulma.css';
    import ThemePicker from './ThemePicker';
    export default {
    name: 'profile',
    components: {
        ThemePicker,
    },
    }
</script>

<style>
    .columns{
        padding: 50px 50px;
    }
    #profile{
        margin-top: 100px;
    }
    
</style>