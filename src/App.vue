<template>
  <div id="app">
    <SettingsScreen v-show="showSettings" @close-settings="closeSettings"/>
    <StatusSection @open-settings="openSettings"/>
    <CanSpendToday/>
    <SpendingInput/>

  </div>
</template>

<script>
import StatusSection from './components/StatusSection.vue';
import CanSpendToday from './components/CanSpendToday.vue';
import SpendingInput from './components/SpendingInput.vue';
import SettingsScreen from './components/SettingsScreen.vue';

export default {
  name: 'App',
  data() {
    return { showSettings: false };
  },
  components: {
    StatusSection,
    CanSpendToday,
    SpendingInput,
    SettingsScreen,
  },
  methods: {
    openSettings() {
      this.showSettings = true;
    },
    closeSettings() {
      this.showSettings = false;
    },
  },
};
</script>

<style>

</style>
