<template>
  <div class="spendings-input">
    <input v-model="input" type="text">
    <button @click="newSpending">submit</button>
  </div>
</template>

<script>
import { UPDATED_INPUT, NEW_SPENDING } from '../store/types';

export default {
  computed: {
    input: {
      get() {
        return this.$store.state.spentInput;
      },
      set(value) {
        this.$store.commit(UPDATED_INPUT, value);
      },
    },
  },
  methods: {
    newSpending() {
      if (this.input !== '') {
        this.$store.commit(NEW_SPENDING, Number(this.input));
        this.input = '';
      }
    },
  },
};
</script>

<style>

</style>
