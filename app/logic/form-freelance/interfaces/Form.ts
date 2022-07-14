import { Step } from './Step'

export declare interface Form {
  id: number
  attributes: AttributesForm
  steps: Array<Step>
}

export declare interface AttributesForm {
  title: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
