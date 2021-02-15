import Vue from 'vue'
import Vuex from 'vuex'
import { data } from '@/data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: data,
  },
  mutations: {
    SETDATA(state) {
      state.data = data
    },
    FILTERROOMS(state, roomsCount = []) {
      if (roomsCount.length) {
        state.data = state.data.filter(function(obj) {
          return (
            obj.rooms === Number(roomsCount[0]) ||
            obj.rooms === Number(roomsCount[1]) ||
            obj.rooms === Number(roomsCount[2])
          )
        })
      }
    },

    FILTERFLOORS(state, [min, max]) {
      state.data = state.data.filter(function(obj) {
        return obj.floor >= min && obj.floor <= max
      })
    },

    FILTERSQUARE(state, [min, max]) {
      state.data = state.data.filter(function(obj) {
        return obj.square >= min && obj.square <= max
      })
    },

    FILTERPRICE(state, [min, max]) {
      state.data = state.data.filter(function(obj) {
        return obj.price >= min && obj.price <= max
      })
    },

    CLEARFILTER(state) {
      state.data = data
    },
  },
  actions: {
    setData({ commit }, data) {
      commit('SETDATA', data)
    },
  },
  modules: {},
})
