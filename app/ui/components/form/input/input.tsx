import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { ButtonProps } from './types/ButtonApp'
import { TextAppProps } from './types/TextApp'
import { useEffect, useState } from 'react'
import { CheckboxAppProps } from './types/CheckboxApp'
import { NumberInputApp } from './types/NumberInputApp'

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
  onChange,
}: TextAppProps) => (
  <Input
    placeholder={placeholder}
    size={size}
    variant={variant}
    onChange={onChange}
  />
)

export const ButtonGroupApp = ({ children }) => (
  <ButtonGroup>{children}</ButtonGroup>
)

export const Autocomplete = ({ data }) => {
  const [typedInput, setTypedInput] = useState('')
  const [dataToCompleteOn, setDataToCompleteOn] = useState([])
  const [currentData, setCurrentData] = useState([])

  interface dataElement {
    title: string
  }

  useEffect(() => {
    setDataToCompleteOn(data)
    setCurrentData(data)
  }, [data])

  useEffect(
    () =>
      setDataToCompleteOn(
        currentData.filter((el: dataElement) => el.title.includes(typedInput)),
      ),
    [typedInput],
  )

  return (
    <>
      <Box mb="0.3rem">
        <TextApp
          placeholder="Autocompleter here"
          onChange={({ target }) => setTypedInput(target.value)}
        />
      </Box>
      {dataToCompleteOn.length >= 1 &&
        typedInput !== '' &&
        typedInput !== ' ' &&
        dataToCompleteOn.map(({ title }, key) => (
          <Box key={key} borderWidth="1px" p="0.5rem" mb="0.3rem" size={'md'}>
            {title}
          </Box>
        ))}
    </>
  )
}

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
export const NumberInputApp = ({
  steps,
  valueDefault,
  maximum,
  minimum,
  sized,
}: NumberInputApp) => (
  <NumberInput
    step={steps}
    size={sized}
    defaultValue={valueDefault}
    max={maximum}
    min={minimum}
  >
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)
