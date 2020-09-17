import Vue from 'vue';
import Vuex from 'vuex';
import {
  NEW_SPENDING, NEW_MONTHLY_LIMIT, NEW_PAYCHECK_DAY, UPDATED_INPUT,
  SHOW_MODAL_MONEYLEFT, REMOVE_MODAL_MONEYLEFT,
  SPREAD_ON_ALL, SPEND_TODAY, SET_TODAY, SET_DAYS_LEFT,
} from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paycheckDay: 1,
    paycheckSum: 8200,
    moneyLeft: 8200,
    spentInput: '',
    showModal: false,
    todayLeft: 0,
    todayDate: undefined,
    daysLeft: 30,
  },
  mutations: {
    [NEW_SPENDING](state, sum) {
      if (sum <= state.todayLeft) {
        state.moneyLeft -= sum;
        state.todayLeft -= sum;
      } else {
        state.todayLeft = 0;
        state.moneyLeft -= sum;
      }
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
    [SHOW_MODAL_MONEYLEFT](state) {
      state.showModal = true;
    },
    [REMOVE_MODAL_MONEYLEFT](state) {
      state.showModal = false;
    },
    [SPEND_TODAY](state) {
      state.todayLeft = Math.floor(
        (state.moneyLeft - state.todayLeft) / state.daysLeft + state.todayLeft,
      );
    },
    [SPREAD_ON_ALL](state) {
      state.todayLeft = Math.floor(state.moneyLeft / state.daysLeft);
    },
    [SET_TODAY](state) {
      state.todayDate = (new Date()).getDate();
    },
    [SET_DAYS_LEFT](state, days) {
      state.daysLeft = days;
    },
  },
  actions: {
    INITIALISE(context) {
      const today = new Date();
      const nextPaycheck = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        context.state.paycheckDay,
      );
      const daysLeft = Math.floor((nextPaycheck - today) / (1000 * 60 * 60 * 24));
      context.commit(SET_DAYS_LEFT, daysLeft);

      if (context.state.todayDate && (new Date()).getDate() !== context.state.todayDate) {
        context.commit(SHOW_MODAL_MONEYLEFT);
      } else {
        context.commit(SPREAD_ON_ALL);
      }
      context.commit(SET_TODAY);
    },
  },
  modules: {
  },
  getters: {
    getSpentInput(state) {
      return Number(state.spentInput);
    },
  },
});
