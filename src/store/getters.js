export const getters = {
  isLoggedIn(state) {
    return state.loggedIn
  },
  getBlogPosts(state) {
    return state.blogPosts
  },
  getUser(state) {
    return state.user
  },
  getLoginCount(state) {
    return state.logInCount
  }
}