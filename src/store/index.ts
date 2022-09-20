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
      latitude: -1,
      longitude: -1
    }
  },
  getters: {
    getLocation(state) {
      return state.location
    }
  },
  mutations: {
    UPDATE_LOCATION(state, payload: Location) {
      state.location = payload
    }
  },
  actions: {
    fetchLocation({ commit }) {
      return new Promise((resolve: (value: Location) => void) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            commit('UPDATE_LOCATION', { latitude, longitude })
            resolve({ latitude, longitude })
          })
        } else {
          console.error('Geolocation is not supported by this browser.')
        }
      })
    },
    async fetchDaylight({ state }, date) {
      const { latitude, longitude } = state.location
      console.log(state.location)

      const data = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date.toISODate()}`
      ).then(response => response.json())

      return data.results['day_length']
    }
  },
  modules: {}
})

export function useStore() {
  return baseUseStore(key)
}
