import {
   USER_CREATE_OBSERVATION,
   USER_OBSERVATIONS_LIST,
   USER_OBSERVATION_DETAILS
} from '../../User/constants/NavigationConstants/navigationConstants'

export const goToAddNewObservation = history => {
   history.push(USER_CREATE_OBSERVATION)
}

export const goToBackToObservations = history => {
   history.push(USER_OBSERVATIONS_LIST)
}

export const goToObservationDetails = (history, observationId) => {
   history.push(`/Reporting-portal/USER/observations/${observationId}`)
}
