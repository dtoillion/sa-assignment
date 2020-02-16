export const state = () => ({
  clients: []
})

export const mutations = {
  SET_CLIENTS(state, clients) {
    state.clients = clients
  }
}
