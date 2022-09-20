import ActualDateCard from '@/components/ActualDateCard.vue';
import { shallowMount } from '@vue/test-utils';
import { DateTime } from 'luxon';


describe('ActualDateCard.vue ', () => {
  it('renders actual date title', () => {
    const wrapper = shallowMount(ActualDateCard)
    expect(wrapper.get('strong').text()).toMatch('Actual Date')
  })

  it('renders proper day', () => {
    const expectedDate = DateTime.now().setLocale('it-IT').toLocaleString({weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'})
    const wrapper = shallowMount(ActualDateCard)
    expect(wrapper.text()).toContain(expectedDate)
  })
})
