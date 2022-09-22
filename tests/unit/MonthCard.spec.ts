import MonthCard from '@/components/MonthCard.vue'
import { flushPromises, shallowMount } from '@vue/test-utils'
import { DateTime } from 'luxon'

const position = { latitude: 45.6141484, longitude: 8.777796 }

const expectedDaylight = '12:18:32'

const date = DateTime.now()

const expectedDateString = date
.setLocale('it-IT')
.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)


jest.mock('@/store', () => ({
  ...jest.fn(),
  useStore: () => ({
    state: {location: position },
    dispatch: (functionName: string, payload: DateTime) => expectedDaylight,
    watch: (getter: () => void, callback: () => void) => {
      getter(), callback()
    }
  })
}))

describe('MonthCard.vue ', () => {
  it('matches snapshot',async () => {
    const wrapper = shallowMount(MonthCard, {props: {cardDate: date}})
    await flushPromises()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders right day', async () => {
    const wrapper = shallowMount(MonthCard, {props: {cardDate: date}})
    await flushPromises()
    expect(wrapper.get('#date').text()).toMatch(expectedDateString)
  })

  it('renders small title', async () => {
    const wrapper = shallowMount(MonthCard, {props: {cardDate: date}})
    expect(wrapper.get('small').text()).toMatch('Day light:')
  })

  it('renders proper daylight', async () => {
    const wrapper = shallowMount(MonthCard, {props: {cardDate: date}})
    await flushPromises()
    expect(wrapper.get('#daylight').text()).toMatch(expectedDaylight)
  })
})
