export const SeverityConstants = ['HIGH', 'Medium', 'WARNING']

export const SelectSeverityConstants = SeverityConstants.map(eachOption => {
   return { value: eachOption.toUpperCase(), label: eachOption }
})
export const FilterList = [
   'All',
   'Closed',
   'Action in progress',
   'Resolved',
   'Reported',
   'Acknowledged by RP'
]

export const SelectFilterConstants = FilterList.map(eachOption => {
   return { value: eachOption, label: eachOption }
})
