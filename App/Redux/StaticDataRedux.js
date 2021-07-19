import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getStaticDataRequest: ['data'],
  getStaticDataSuccess: ['data'],
  getStaticDataFailure: ['error'],
})

export const StaticDataTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  root: { data: null, fetching: false, error: null }
})

// export const StaticDataSelectors = {
//   getData: state => state.staticdata.staticdataModule
// }

export const getStaticDataRequest = (state, { data }) =>
  state.merge({ ...state, root: { ...state.root, fetching: true, error: null } })
export const getStaticDataSuccess = (state, { data }) =>
  state.merge({ ...state, root: { ...state.root, data, fetching: false, error: null } })
export const getStaticDataFailure = (state, { error }) =>
  state.merge({ ...state, root: { ...state.root, fetching: false, error } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_STATIC_DATA_REQUEST]: getStaticDataRequest,
  [Types.GET_STATIC_DATA_SUCCESS]: getStaticDataSuccess,
  [Types.GET_STATIC_DATA_FAILURE]: getStaticDataFailure,
})
