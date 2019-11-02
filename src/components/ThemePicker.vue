<!--Create ColorPicker component which will interact with the store to set the value of the color-->
<template>
  <chrome-color-picker :value ="themeColor" @input="setThemeColor($event.hex)" :disableAlpha="true"/>
</template>

<script>
import { Chrome } from 'vue-color';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    'chrome-color-picker': Chrome,
  },
  computed: {
    ...mapGetters([
      'themeColor'
    ]),
  },
  methods: {
    ...mapMutations([
      'setThemeColor'
    ]),
  },
};
</script>

<style>
</style>