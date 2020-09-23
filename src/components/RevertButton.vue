<template>
  <button v-if="history" @click="revert">revert</button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    revert() {
      this.$store.commit('REVERT_LAST_SPENDING');
    },
  },
  computed: mapState({ history: 'beforeLastSpending' }),
};
</script>

<style>

</style>
