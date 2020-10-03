<template>
  <button class="editorbuttons__secondary__button editorbuttons__secondary__button--submit"
  @click="newSpending" aria-label="submit"></button>
</template>

<script>
import { NEW_SPENDING, UPDATE_DAILY_BUDGET_FROM_TOMORROW } from '../store/types';

export default {
  methods: {
    newSpending() {
      if (this.$store.state.spentInput !== '') {
        this.$store.commit(NEW_SPENDING, Number(this.$store.state.spentInput));
        this.$store.commit(UPDATE_DAILY_BUDGET_FROM_TOMORROW);
        this.input = '';
      }
    },
  },
};
</script>

<style>
.editorbuttons__secondary__button--submit {
  flex-basis: 300px;
  background: url('../assets/submitButton.svg') #F8A700;
  background-repeat: no-repeat;
  background-position: 100% 100%;
}
</style>
