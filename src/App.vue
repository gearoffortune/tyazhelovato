<template>
  <div id="app">
    <button @click="save">save</button>
    <button @click="load">load</button>
    <SettingsScreen v-if="showSettings" @close-settings="closeSettings"/>
    <MoneyLeftModal v-else-if="showModal()"/>
    <div v-else>
      <StatusSection @open-settings="openSettings"/>
      <CanSpendToday/>
      <SpendingInput/>
      <RevertButton/>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import StatusSection from './components/StatusSection.vue';
import CanSpendToday from './components/CanSpendToday.vue';
import SpendingInput from './components/SpendingInput.vue';
import SettingsScreen from './components/SettingsScreen.vue';
import MoneyLeftModal from './components/MoneyLeftModal.vue';
import RevertButton from './components/RevertButton.vue';

export default {
  name: 'App',
  data() {
    return { showSettings: false, ...mapState(['showModal']) };
  },
  components: {
    StatusSection,
    CanSpendToday,
    SpendingInput,
    SettingsScreen,
    MoneyLeftModal,
    RevertButton,
  },
  methods: {
    openSettings() {
      this.showSettings = true;
    },
    closeSettings() {
      this.showSettings = false;
    },
    save() {
      localStorage.setItem('state', JSON.stringify(this.$store.state));
    },
    load() {
      const loadedState = localStorage.getItem('state');
      if (loadedState) {
        const parsedState = JSON.parse(loadedState);
        this.$store.replaceState(parsedState);
      }
    },
  },
  mounted() {
    this.$store.dispatch('INITIALISE');
  },
};
</script>

<style>

</style>
