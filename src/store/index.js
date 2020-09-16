import Vue from 'vue';
import Vuex from 'vuex';
import {
  NEW_SPENDING, NEW_MONTHLY_LIMIT, NEW_PAYCHECK_DAY, UPDATED_INPUT,
} from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paycheckDay: 1,
    paycheckSum: 8200,
    moneyLeft: 8200,
    spentInput: '',
  },
  mutations: {
    [NEW_SPENDING](state, sum) {
      state.moneyLeft -= sum;
    },
    [NEW_MONTHLY_LIMIT](state, limit) {
      state.paycheckSum = limit;
      state.moneyLeft = limit;
    },
    [NEW_PAYCHECK_DAY](state, newPaycheckDay) {
      state.paycheckDay = newPaycheckDay;
    },
    [UPDATED_INPUT](state, inputValue) {
      state.spentInput = inputValue;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getSpentInput(state) {
      return Number(state.spentInput);
    },
    getDaysLeft(state) {
      const today = new Date();
      const nextPaycheck = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        state.paycheckDay,
      );
      return Math.floor((nextPaycheck - today) / (1000 * 60 * 60 * 24));
    },
  },
});
