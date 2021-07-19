import { call, put } from 'redux-saga/effects'
import StaticDataActions from '../Redux/StaticDataRedux'

export function * getStaticData (api, action) {
  const { data } = action
  const response = yield call(api.getStaticData, data)

  if (response.ok) {
    yield put(StaticDataActions.getStaticDataSuccess(response.data))
  } else {
    yield put(StaticDataActions.getStaticDataFailure(response))
  }
}
