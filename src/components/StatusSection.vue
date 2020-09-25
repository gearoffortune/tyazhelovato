<template>
  <div class="statuspane">
    <div class="statuspane__status">{{moneyLeft}} на {{daysLeft}}</div>
    <button class="settingsButton" @click="openSettings">settings</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['daysLeft', 'moneyLeft']),
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
