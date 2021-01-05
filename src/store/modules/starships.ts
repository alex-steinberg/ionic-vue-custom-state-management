import { Starships } from '../../models/swapi.model';

const state = (): Starships => ({
    items: []
});

const getters = {
    getStarships(state: Starships) {
        return state.items;
    }
}

const actions = {
    setStarships({ commit }, items) {
        commit('setStarships', items);
    }
}

const mutations = {
    setStarships(state, items) {
        state.items = items;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
