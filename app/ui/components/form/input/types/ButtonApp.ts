import { ComponentPropsWithRef } from 'react'
import { MdBuild } from 'react-icons/md'

export declare interface ButtonProps {
  right?: Boolean
  left?: Boolean
  icon?: ComponentPropsWithRef<typeof MdBuild>
  content: string
  variantButton?: string
  colorButton?: string
  isDisable?: boolean
  sized?: string
}
