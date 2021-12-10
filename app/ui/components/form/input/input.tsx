import { Flex, Button, ButtonGroup } from '@chakra-ui/react'
import { ButtonProps } from './types/ButtonApp'

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

export function ButtonGroupApp({ children }) {
  return <ButtonGroup>{children}</ButtonGroup>
}
