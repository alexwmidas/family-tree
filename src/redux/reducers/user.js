import moment from 'moment'
import { UPDATE_PROFILE } from '../types'

const initialState = {
  fullName: 'John Doe',
  gender: 'male',
  birthday: moment(),
  address: 'Foster City, San Mateo, California',
  bio: 'Lorem ipsum dolor sit amet, vivendo fierent appareat ut nec. Alterum gubergren eu mea, ut sea congue ponderum conceptam. Te per graece graecis, quo honestatis deterruisset an.',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      debugger
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default user
