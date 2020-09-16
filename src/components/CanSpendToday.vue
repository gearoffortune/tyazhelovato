<template>
  <div>
    <div class="moneyblock">{{toSpendWithInput}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    toSpendWithInput() {
      if (this.moneyLeft / this.getDaysLeft - this.getSpentInput > 0) {
        return this.moneyLeft / this.getDaysLeft - this.getSpentInput;
      }
      return 0;
    },
    ...mapState(['moneyLeft']),
    ...mapGetters(['getSpentInput', 'getDaysLeft']),
  },
};
</script>

<style>

</style>
