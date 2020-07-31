export interface SubCategoryType {
   id: number
   name: string
}

export interface EachCategoryType {
   id: number
   name: string
   subcategories: Array<SubCategoryType>
}

export interface CategoriesResponseType {
   categories: Array<EachCategoryType>
}

export interface RequestObjectOfFilterAndSortingType {
   sort_type: string
   filter_type: string
   sort_field: string
}
