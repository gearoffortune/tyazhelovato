import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SubmitButton from '../../src/components/SubmitButton.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SubmitButton.vue', () => {
  let state;
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      NEW_SPENDING: jest.fn(),
      UPDATE_DAILY_BUDGET_FROM_TOMORROW: jest.fn(),
    };
  });

  it('commits NEW_SPENDING when input is entered and button is clicked', () => {
    state = { spentInput: '1' };
    store = new Vuex.Store({ state, mutations });

    const wrapper = shallowMount(SubmitButton, { store, localVue });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(mutations.NEW_SPENDING).toHaveBeenCalled();
  });

  it('does not commit NEW_SPENDING when input is empty and button is clicked', () => {
    state = { spentInput: '' };
    store = new Vuex.Store({ state, mutations });

    const wrapper = shallowMount(SubmitButton, { store, localVue });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(mutations.NEW_SPENDING).not.toHaveBeenCalled();
  });
});
