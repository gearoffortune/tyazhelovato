<template>
  <div class="settings">
    <label>
      <p>Сумма</p>
      <input v-model.number="sum" type="text">
    </label>
    <label>
      <p>Срок</p>
      <input type="date">
    </label>
    <button @click="setSum">Сохранить</button>
    <button @click="cancel">Отменить</button>
  </div>
</template>

<script>
import { NEW_MONTHLY_LIMIT } from '../store/types';

export default {
  methods: {
    cancel() {
      this.$emit('close-settings');
    },
    setSum() {
      this.$store.commit(NEW_MONTHLY_LIMIT, this.sum);
    },
  },
  data() {
    return {
      sum: 0,
    };
  },
  created() {
    this.sum = this.$store.state.paycheckSum;
  },
};
</script>

<style>

</style>
