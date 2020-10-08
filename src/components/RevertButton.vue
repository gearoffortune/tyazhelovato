<template>
  <button class="revert-button" v-if="hasHistory" @click="revert">Вернуть {{moneyToReturn}}</button>
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
    moneyToReturn: Number,
  },
};
</script>

<style>

.revert-button {
  background: transparent;
  color: #F4A541;
  border: none;
  font-size: 24px;
  margin-right: 10px;
}
</style>
