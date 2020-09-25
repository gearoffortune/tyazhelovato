import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import StatusSection from '../../src/components/StatusSection.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StatusSection.vue', () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      daysLeft: 10,
      moneyLeft: 2800,
    };
    store = new Vuex.Store({ state });
  });

  it('emits "open-settings" when button is clicked', () => {
    const wrapper = shallowMount(StatusSection, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()['open-settings']).toBeTruthy();
  });

  it('renders money left and days left', () => {
    const wrapper = shallowMount(StatusSection, { store, localVue });
    const status = wrapper.find('.statuspane__status');
    expect(status.text()).toContain(`${state.moneyLeft} на ${state.daysLeft}`);
  });
});
