<template>
  <div>
    <div class="moneyblock">{{toSpendWithInput}}</div>
    <div v-if="moreThanTodayLeft">
      Трата приведет к пересчету суточного лимита до {{getDailyWithInput}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    toSpendWithInput() {
      if (this.todayLeft - this.getSpentInput > 0) {
        return this.todayLeft - this.getSpentInput;
      }
      return 0;
    },
    ...mapState(['todayLeft']),
    ...mapGetters(['getSpentInput', 'getDailyWithInput']),
    moreThanTodayLeft() {
      return this.todayLeft < this.getSpentInput;
    },
  },
};
</script>

<style>

</style>
