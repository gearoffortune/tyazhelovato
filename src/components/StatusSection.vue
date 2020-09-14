<template>
  <div class="statuspane">
    <div class="statuspane__status">{{moneyLeft}} на {{daysLeft}}</div>
    <button class="settingsButton" @click="openSettings">settings</button>
  </div>
</template>

<script>
import daysLeft from '../mixins/dateMixin';

export default {
  computed: {
    moneyLeft() {
      return this.$store.state.moneyLeft;
    },
  },
  methods: {
    openSettings() {
      this.$emit('open-settings');
    },
  },
  mixins: [daysLeft],
};
</script>

<style>

</style>
