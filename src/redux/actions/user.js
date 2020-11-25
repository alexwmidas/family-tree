import { UPDATE_PROFILE } from "../types"

export const updateProfile = payload => {
  return { type: UPDATE_PROFILE, payload }
}
