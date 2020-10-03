<template>
  <div id="app">
    <button @click="save">save</button>
    <button @click="load">load</button>
    <SettingsScreen v-if="showSettings" @close-settings="closeSettings"/>
    <MoneyLeftModal v-else-if="showModal"/>
    <div v-else>
      <StatusSection @open-settings="openSettings"/>
      <CanSpendToday/>
      <SpendingInput/>
      <RevertButton :hasHistory="hasHistory"/>
      <div class="editorbuttons">
        <Numpad/>
        <div class="editorbuttons__secondary">
          <DeleteButton/>
          <SubmitButton/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable max-len */
import { mapState } from 'vuex';
import StatusSection from './components/StatusSection.vue';
import CanSpendToday from './components/CanSpendToday.vue';
import SpendingInput from './components/SpendingInput.vue';
import SettingsScreen from './components/SettingsScreen.vue';
import MoneyLeftModal from './components/MoneyLeftModal.vue';
import RevertButton from './components/RevertButton.vue';
import Numpad from './components/Numpad.vue';
import DeleteButton from './components/DeleteButton.vue';
import SubmitButton from './components/SubmitButton.vue';

export default {
  name: 'App',
  data() {
    return {
      showSettings: false,
    };
  },
  components: {
    StatusSection,
    CanSpendToday,
    SpendingInput,
    SettingsScreen,
    MoneyLeftModal,
    RevertButton,
    Numpad,
    SubmitButton,
    DeleteButton,
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
  computed: {
    ...mapState({ history: 'beforeLastSpending', showModal: 'showModal' }),
    hasHistory() {
      return !!this.history;
    },
  },
  mounted() {
    this.$store.dispatch('INITIALISE');
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
:root {
  --backgound-black: #141517;
  --textcolor-grey: #797979;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
}
#app {
  text-align: center;
  background-color: var(--backgound-black);
  color: white;
}
.editorbuttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #C5C7C6;
  border-right: 1px solid #C5C7C6;
}
.editorbuttons__secondary {
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
}
.editorbuttons__secondary__button {
    border-radius: 0;
    border-width: 0;
    box-shadow: inset 1px 1px 0px #C5C7C6;
}
.numpad {
  flex-grow: 1;
}
</style>
