import ActualDateCard from '@/components/ActualDateCard.vue'
import { shallowMount } from '@vue/test-utils'

describe('ActualDateCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ActualDateCard)
    expect(wrapper.text()).toMatch(msg)
  })
})
