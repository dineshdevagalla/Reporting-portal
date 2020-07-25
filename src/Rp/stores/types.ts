export interface EachRpObservationType {
   observation_id: number
   title: string
   reported_on: string
   reported_by: UserType
   severity: string
   status: string
   due_date: string
   message_count: number
}

export interface UserType {
   user_id: number
   name: string
   phone_no: number
   profile_pic: string
}

export interface RpObservationsResponseType {
   observation_details: Array<EachRpObservationType>
   total_observations_count: number
}
