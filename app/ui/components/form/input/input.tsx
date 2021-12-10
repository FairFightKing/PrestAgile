import { Flex, Button, Input, ButtonGroup, Checkbox } from '@chakra-ui/react'
import { ButtonProps } from './types/ButtonApp'
import { TextAppProps } from './types/TextApp'
import { CheckboxAppProps } from './types/CheckboxApp'

export const ButtonApp = ({
  right = false,
  left = false,
  icon,
  content,
  variantButton,
  colorButton,
  isDisable = false,
  sized,
}: ButtonProps) => (
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

export const TextApp = ({
  placeholder,
  size,
  variant = 'outline',
}: TextAppProps) => (
  <Input placeholder={placeholder} size={size} variant={variant} />
)

export const ButtonGroupApp = ({ children }) => (
  <ButtonGroup>{children}</ButtonGroup>
)

export const CheckboxApp = ({
  isDisable = false,
  content,
  colorCheckbox,
  sized,
  checkboxName,
  checkboxValue,
}: CheckboxAppProps) => (
  <Checkbox
    isDisabled={isDisable}
    size={sized}
    colorScheme={colorCheckbox}
    name={checkboxName}
    value={checkboxValue}
  >
    {content}
  </Checkbox>
)
