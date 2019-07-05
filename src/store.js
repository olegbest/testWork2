import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_POST (state, post) {
      state.post = post
    }
  },
  actions: {
    getAllPosts(context) {
      return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data }) => {
              context.commit('SET_POSTS', data)
              resolve(data)
            })
            .catch(error => reject(error))
      })
    },
    getPost(context, id) {
      return new Promise((resolve, reject) => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(({ data }) => {
              context.commit('SET_POST', data)
              resolve(data)
            })
            .catch(error => reject(error))
      })
    }
  }
})
