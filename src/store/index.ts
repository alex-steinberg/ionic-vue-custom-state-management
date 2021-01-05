import { createStore } from 'vuex'
import starships from './modules/starships'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    starships
  },
  strict: debug,
})
