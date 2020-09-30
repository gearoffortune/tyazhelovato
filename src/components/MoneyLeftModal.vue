<template>
<div class="modal--money-left">
  <div>{{this.todayLeft + this.dailyBudget*(this.getTodayDate-this.todayDate)}}</div>
  <button @click="spendTodayHandler">Spend Today</button>
  <button @click="spreadOverHandler">Spread evenly</button>
</div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
import { SPREAD_ON_ALL, SPEND_TODAY, REMOVE_MODAL_MONEYLEFT } from '../store/types';

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
  computed: {
    ...mapGetters(['getTodayDate']),
    ...mapState(['todayDate', 'todayLeft', 'dailyBudget']),
  },
};
</script>

<style>

</style>
