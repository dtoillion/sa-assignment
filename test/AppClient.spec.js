import { mount } from '@vue/test-utils'
import AppClient from '@/components/AppClient.vue'

describe('AppClient', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppClient)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
