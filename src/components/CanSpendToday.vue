<template>
  <div class="canspendtoday">
    <div class="canspendtoday__moneyblock">{{toSpendWithInput}}</div>
    <div class="canspendtoday__textblock">На сегодня</div>
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
.canspendtoday{
  --border-color: #2E2F31;
  margin: 0px 5px;
  border-bottom: solid 2px var(--border-color);
  border-top: solid 2px var(--border-color);
  border-radius: 2px;
}
.canspendtoday__moneyblock {
  font-size: 48px;
  color: var(--textcolor-grey);
  text-align: left;
  font-weight: 600;
}
.canspendtoday__textblock {
  font-size: 18px;
  color: var(--textcolor-grey);
  text-align: left;
}
</style>
