export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload
  },
  setBlogPosts(state, payload) {
    state.blogPosts = payload
  },
  setUser(state, payload) {
    state.user = payload
  },
  increaseLoginCount(state) {
    state.logInCount += 1
  }
}