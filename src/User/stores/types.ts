export interface ReportedObservationType {
   observation_id: number
   titile: string
   reported_on: string
   severity: string
   status: string
   due_date: string
   show_due_date: boolean
   description: string
   category: string
   subcategory: string
   assigned_to: RpType
   attachments_to?: any
   remaining_rps: Array<RpType>
}

export interface RpType {
   user_id: number
   name: string
   phone_no: number
   profile_pic: string
}
export interface EachUserObservationType {
   observation_id: number
   title: string
   reported_on: string
   assigned_to: RpType
   severity: string
   status: string
   due_date: string
   message_count: number
   show_due_date: boolean
}

export interface UserObservationsResponseType {
   observation_details: Array<EachUserObservationType>
   total_observations_count: number
}
