export interface RpType {
   user_id: number
   name: string
   phone_no: number
   profile_pic: string
}
export interface ReportedObservationType {
   observation_id: number
   title: string
   reported_on: string
   severity: string
   status: string
   due_date: string
   show_due_date: boolean
   description: string
   category: string
   subcategory: string
   assigned_to: any
   assigned_status: boolean
   attachments: any
   remaining_rps: Array<RpType>
}
export interface EachUserObservationType {
   observation_id: number
   title: string
   reported_on: string
   assigned_status: boolean
   assigned_to: any
   severity: string
   status: string
   due_date: string
   messages_count: number
   show_due_date: boolean
}

export interface UserObservationFillingType {
   title: string
   category_id: number
   sub_category_id: number
   severity: string
   description: string
   attachments?: any
}

export interface UserObservationsResponseType {
   observation_details: Array<EachUserObservationType>
   total_observations_count: number
}
