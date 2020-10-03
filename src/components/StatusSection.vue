<template>
  <div class="statuspane">
    <div class="statuspane__status">{{moneyLeft}} на {{daysLeft}}</div>
    <button class="statuspane__settings" @click="openSettings"></button>
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
.statuspane__settings {
  display: inline-block;
  height: 24px;
  width: 24px;
  background: url('../assets/settingsButton.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-width: 0;
}
.statuspane__status {
  display: inline;
  font-size: 24px;
}
.statuspane {
  color: #C1C1BF;
  text-align: right;
}
</style>
