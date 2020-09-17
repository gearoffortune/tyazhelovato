<template>
  <div class="statuspane">
    <div class="statuspane__status">{{moneyLeft}} на {{this.daysLeft}}</div>
    <button class="settingsButton" @click="openSettings">settings</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    moneyLeft() {
      return this.$store.state.moneyLeft;
    },
    ...mapState(['daysLeft']),
  },
  methods: {
    openSettings() {
      this.$emit('open-settings');
    },
  },
};
</script>

<style>

</style>
