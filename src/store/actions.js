import router from "../router"


export const actions = {
  loginUser({ commit }, payload) {
    const obj = {name: payload}

    commit('setUser', obj)
    
    commit('setLoggedIn', true)
    commit('increaseLoginCount')
    router.push('/')
  },
  logOut({ commit }) {
    commit('setUser', null)
    commit('setLoggedIn', false)
    router.push('/Login')
  },

  async getPosts({ commit }, payload) {
    console.log(payload)
    try {
      const response = await fetch("https://6422cdb577e7062b3e2314fe.mockapi.io/api/blogs")
      const data = await response.json();

      commit('setBlogPosts', data)
    } catch (error) {
      alert('Something went wrong')
    }
    
    
  },
}