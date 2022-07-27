import { Box, Input } from '@chakra-ui/react'
import { TextAppProps } from './types/TextApp'
import { useEffect, useState } from 'react'

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
