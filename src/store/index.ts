import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export type Location = {
  latitude: number
  longitude: number
}

export interface State {
  location: Location
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  getters: {},
  mutations: {
    UPDATE_LOCATION(state, payload: Location) {
      state.location = payload
    }
  },
  actions: {
    setLocation(context, payload: Location) {
      context.commit('UPDATE_LOCATION', payload)
    }
  },
  modules: {}
})

export function useStore() {
  return baseUseStore(key)
}
