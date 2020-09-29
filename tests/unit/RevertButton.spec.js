import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import RevertButton from '../../src/components/RevertButton.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('RevertButton.vue', () => {
  let state;
  let store;
  let mutations;

  it('does not render button unless history exists', () => {
    state = {};
    store = new Vuex.Store(state);
    const wrapper = shallowMount(RevertButton,
      {
        propsData: { hasHistory: false },
        store,
        localVue,
      });
    expect(wrapper.find('button').exists()).toBe(false);
  });
  it('renders button if hasHistory is true', () => {
    state = {};
    store = new Vuex.Store(state);
    const wrapper = shallowMount(RevertButton,
      {
        propsData: { hasHistory: true },
        store,
        localVue,
      });
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('commits REVERT_LAST_SPENDING when button is clicked', () => {
    state = {};
    mutations = {
      REVERT_LAST_SPENDING: jest.fn(),
    };
    store = new Vuex.Store({ state, mutations });
    const wrapper = shallowMount(RevertButton,
      {
        propsData: { hasHistory: true },
        store,
        localVue,
      });
    wrapper.find('button').trigger('click');
    expect(mutations.REVERT_LAST_SPENDING).toHaveBeenCalled();
  });
});
