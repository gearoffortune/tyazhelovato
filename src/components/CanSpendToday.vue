<template>
  <div>
    <div class="moneyblock">{{toSpendWithInput}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import dateMixin from '../mixins/dateMixin';

export default {
  mixins: [dateMixin],
  computed: {
    toSpendWithInput() {
      if (this.moneyLeft / this.daysLeft - this.getSpentInput > 0) {
        return this.moneyLeft / this.daysLeft - this.getSpentInput;
      }
      return 0;
    },
    ...mapState(['moneyLeft']),
    ...mapGetters(['getSpentInput']),
  },
};
</script>

<style>

</style>
