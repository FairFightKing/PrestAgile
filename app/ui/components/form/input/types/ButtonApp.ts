import { ComponentPropsWithRef } from 'react'
import { MdBuild } from 'react-icons/md'
import { IconBaseProps } from 'react-icons'

export declare interface ButtonProps {
  right?: Boolean
  left?: Boolean
  icon?: IconBaseProps
  content: string
  variantButton?: string
  colorButton?: string
  isDisable?: boolean
  sized?: string
}
