import ActualLocationCard from '@/components/ActualLocationCard.vue'
import { flushPromises, shallowMount } from '@vue/test-utils'

const position = { latitude: 45.6141484, longitude: 8.777796 }

jest.mock('@/store', () => ({
  ...jest.fn(),
  useStore: () => ({ dispatch: (functionName: string) => position })
}))

describe('ActualLocationCard.vue ', () => {
  it('matches snapshot',async () => {
    const wrapper = shallowMount(ActualLocationCard)
    await flushPromises()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders actual location title', () => {
    const wrapper = shallowMount(ActualLocationCard)
    expect(wrapper.get('strong').text()).toMatch('Actual Location')
  })

  it('renders proper position', async () => {
    const wrapper = shallowMount(ActualLocationCard)
    await flushPromises()
    expect(wrapper.get('#position').text()).toBe(
      `${position.latitude} - ${position.longitude}`
    )
  })
})
