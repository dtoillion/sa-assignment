// In a more complicated app vuex modules would be more appropriate here
export const state = () => ({
  clients: []
})

export const mutations = {
  SET_CLIENTS(state, clients) {
    state.clients = clients
  }
}
