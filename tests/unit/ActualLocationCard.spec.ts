import ActualLocationCard from '@/components/ActualLocationCard.vue';
import { flushPromises, shallowMount } from '@vue/test-utils';

const position = { latitude: 45.6141484, longitude:  8.777796 }

jest.mock('@/store', () => ({
  ...jest.fn(),
  useStore: () => ({dispatch: (functionName: string) => position}),
  })
)

describe('ActualLocationCard.vue ', () => {
  it('renders actual date title', () => {
    const wrapper = shallowMount(ActualLocationCard)
    expect(wrapper.get('strong').text()).toMatch('Actual Location')
  })

  it('renders proper position', async () => {
    const wrapper = shallowMount(ActualLocationCard)
    await flushPromises()
    expect(wrapper.text()).toContain(`${position.latitude} - ${position.longitude}`)
  })
})
