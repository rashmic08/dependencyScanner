//themed components enable the passing of props that make sure we can change the color of components after the page has already been loaded
import Vue from 'vue';
import ThemedButton from './ThemedButton';
import ThemedTitle from './ThemedTitle';
import ThemedFooter from './ThemedFooter';
import ThemedLabel from './ThemedLabel';
import ThemedNav from './ThemedNav';
import ThemedText from './ThemedText';

export const themedButton = Vue.component('themed-btn', {
  components: { ThemedButton },
  template: `<ThemedButton class="button" :color="$store.getters['themeColor']"><slot></slot></ThemedButton>`,
});

export const themedTitle = Vue.component('themed-title', {
  components: { ThemedTitle },
  template: `<ThemedTitle :color="$store.getters['themeColor']"><slot></slot></ThemedTitle>`,
});

export const themedFooter = Vue.component('themed-footer', {
  components: { ThemedFooter },
  template: `<ThemedFooter :color="$store.getters['themeColor']"><slot></slot></ThemedFooter>`,
});

export const themedLabel = Vue.component('themed-label', {
    components: { ThemedLabel },
    template: `<ThemedLabel :color="$store.getters['themeColor']"><slot></slot></ThemedLabel>`,
});

export const themedNav = Vue.component('themed-nav', {
    components: { ThemedNav },
    template: `<ThemedNav :color="$store.getters['themeColor']"><slot></slot></ThemedNav>`,
});

export const themedText = Vue.component('themed-text', {
  components: { ThemedText },
  template: `<ThemedText :color="$store.getters['themeColor']"><slot></slot></ThemedText>`,
});