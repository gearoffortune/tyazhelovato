<template>
  <div class="statuspane">
    <div class="statuspane__status">{{moneyLeft}} на {{this.getDaysLeft}}</div>
    <button class="settingsButton" @click="openSettings">settings</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    moneyLeft() {
      return this.$store.state.moneyLeft;
    },
    ...mapGetters(['getDaysLeft']),
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
