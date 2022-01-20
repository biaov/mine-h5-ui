/* eslint-disable no-unused-vars */

// cities item
export interface CityItem {
  code: string
  en: string
  cn: string
}

// props list
export interface ListItem {
  name: string
  cities: CityItem[]
}

// emits
export interface Emits {
  (event: 'on-click', item: CityItem): void
}
