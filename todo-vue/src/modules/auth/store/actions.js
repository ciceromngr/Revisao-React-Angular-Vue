import * as types from './mutation-types'
// import service from '@http'

export const ActionDoLogin = (context, payload) => {
  console.log(payload)
}
export const ActionSetUser = ({ commit }, payload) => (
  commit(types.SET_USER, payload)
)
export const ActionSetToken = ({ commit }, payload) => (
  commit(types.SET_TOKEN, payload)
)
