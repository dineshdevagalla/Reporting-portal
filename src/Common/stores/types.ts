export interface EachCategoryType {
   id: number
   name: string
   subcategories: Array<SubCategoryType>
}

export interface SubCategoryType {
   id: number
   name: string
}

export interface CategoriesResponseType {
   categories: Array<EachCategoryType>
}

export interface RequestObjectOfFilterAndSorting