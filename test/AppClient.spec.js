// I have a lot to learn when it comes to testing but here you can see that I have setup
// jest as my testing framework. Here I would write some tests to make sure that my
// components render, and recieve the correct data. As well as some basic tests to
// check the output of my client search component.
// Some things I would avoid testing would be the API, and the response from Axios
// I believe a larger app would also benefit from snapshots, and end to end testing
// with a headless browser. Testing is something I have not yet had the opportunity to
// do myself, tho I have worked with the existing tests of the apps I worked on. I would be
// excited for the opportunity to learn more about writing meaningful tests, and test driven development.
import AppClient from '@/components/AppClient.vue'

describe('AppClient', () => {
  test('AppClient component renders', () => {
    expect(AppClient).toBeTruthy()
  })
})
