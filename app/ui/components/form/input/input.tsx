import { Flex, Button, Input } from '@chakra-ui/react'
import { ButtonProps } from './types/ButtonApp'
import { TextAppProps } from './types/TextApp'

export function ButtonApp({
  right = false,
  left = false,
  icon,
  content,
  variantButton,
  colorButton,
  isDisable = false,
  sized,
}: ButtonProps) {
  return (
    <Flex justifyContent={'center'}>
      <Button
        rightIcon={right && icon}
        leftIcon={left && icon}
        variant={variantButton}
        colorScheme={colorButton}
        isDisabled={isDisable}
        size={sized}
      >
        {content}
      </Button>
    </Flex>
  )
}

export function TextApp({
  placeholder,
  size,
  variant = 'outline',
}: TextAppProps) {
  return <Input placeholder={placeholder} size={size} variant={variant} />
}
