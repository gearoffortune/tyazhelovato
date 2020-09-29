<template>
  <button v-if="hasHistory" @click="revert">revert</button>
</template>

<script>
import { REVERT_LAST_SPENDING } from '../store/types';

export default {
  methods: {
    revert() {
      this.$store.commit(REVERT_LAST_SPENDING);
    },
  },
  props: {
    hasHistory: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

<style>

</style>
