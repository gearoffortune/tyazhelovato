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
      if (this.todayLeft - this.getSpentInput > 0) {
        return this.todayLeft - this.getSpentInput;
      }
      return 0;
    },
    ...mapState(['todayLeft']),
    ...mapGetters(['getSpentInput']),
  },
};
</script>

<style>

</style>
