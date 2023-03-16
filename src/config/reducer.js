import { combineReducers } from 'redux'
import alerts from '../modules/alert/alertsRedux'

export const rootReducer = combineReducers({
  alerts,
})

export default rootReducer
