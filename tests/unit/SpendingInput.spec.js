import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SpendingInput from '../../src/components/SpendingInput.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SpendingInput.vue', () => {
  let state;
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      UPDATED_INPUT: jest.fn(),
      NEW_SPENDING: jest.fn(),
      UPDATE_DAILY_BUDGET_FROM_TOMORROW: jest.fn(),
    };
  });

  it('commits UPDATED_INPUT when input is entered', () => {
    state = { spentInput: '' };
    store = new Vuex.Store({ state, mutations });

    const wrapper = shallowMount(SpendingInput, { store, localVue });
    const input = wrapper.find('input');
    input.element.value = '1';
    input.trigger('input');
    expect(mutations.UPDATED_INPUT).toHaveBeenCalled();
  });
});
