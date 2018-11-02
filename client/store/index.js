import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        // 서버 환경에서 코드를 실행하려면
        // if (!process.client) {
        //   console.log(context.req.session)
        // }
        const { commit } = vuexContext
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('setPosts', [
              {
                id: '1',
                title: '빅 데이터',
                thumbnail: '//goo.gl/mJ5Vsy',
                content:
                  '빅 데이터란? 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터 집합을 포함한 데이터로부터 가치를 추출하고 결과를 분석하는 기술이다.'
              },
              {
                id: '2',
                title: '머신 러닝',
                thumbnail: '//goo.gl/HoiVkE',
                content:
                  '머신 러닝은 인공 지능의 한 분야로, 컴퓨터가 학습할 수 있도록 하는 알고리즘과 기술을 개발하는 분야를 말한다.'
              }
            ])
            resolve()
          }, 1000)
          // reject(new Error())
        })
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
