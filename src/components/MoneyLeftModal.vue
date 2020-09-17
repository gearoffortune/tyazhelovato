<template>
<div class="modal--money-left">
  <CanSpendToday/>
  <button @click="spendTodayHandler">Spend Today</button>
  <button @click="spreadOverHandler">Spread evenly</button>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import { SPREAD_ON_ALL, SPEND_TODAY, REMOVE_MODAL_MONEYLEFT } from '../store/types';
import CanSpendToday from './CanSpendToday.vue';

export default {
  methods: {
    ...mapMutations({
      spendToday: SPEND_TODAY,
      spreadOver: SPREAD_ON_ALL,
      removeModal: REMOVE_MODAL_MONEYLEFT,
    }),
    spendTodayHandler() {
      this.spendToday();
      this.removeModal();
    },
    spreadOverHandler() {
      this.spreadOver();
      this.removeModal();
    },
  },
  components: {
    CanSpendToday,
  },
};
</script>

<style>

</style>
