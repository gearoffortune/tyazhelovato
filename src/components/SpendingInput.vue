<template>
  <div class="spendings">
    <input class="spendings__input" v-model.number="input" v-on:keyup.enter="newSpending"
    type="text" inputmode="decimal" placeholder="0">
  </div>
</template>

<script>
import { UPDATED_INPUT } from '../store/types';

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
};
</script>

<style>
.spendings__input {
  padding: 0;
  border: none;
  height: 50px;
  width: 100%;
  font-size: 48px;
  background: var(--backgound-black);
  color: var(--textcolor-grey);
}

</style>
