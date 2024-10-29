import { StaticImageData } from 'next/image'

interface HeroSellerType {
  source: string
  overlay: StaticImageData
}

export type { HeroSellerType }

export type ProductCardType = {
  product: {
    brandImage: string
    brandName: string
    name: string
    price: number
    options: number
    productImage: string
  }
  header?: {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  }
  footer?: {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  }
}

export type ButtonType = {
  type?: 'primary' | 'bordered'
}

export type SellerCardType = {
  name: string
  avatar?: string
}

export type BrandCardType = {
  name: string
  image?: string
  isDeliverSameDay?: boolean
}

export type SearchResultsType = {
  searchValue: string
}

export type SearchResultCardType = {
  title: string
  image?: string
}

export type SearchResultsContainerType = {
  title: string
  data: Array<SearchResultCardType>
}

export type CheckboxType = {
  label: string
  isChecked?: boolean
  type: string
}
