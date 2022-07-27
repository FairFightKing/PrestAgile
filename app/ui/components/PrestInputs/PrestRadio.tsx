import { FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { StringOrNumber } from '@chakra-ui/utils'

export default function PrestRadio({ props }): JSX.Element {
  const { label, information } = props
  const [value, setValue] = useState<StringOrNumber>('0')

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column">
          <Radio value="1">Oui</Radio>
          <Radio value="0">Non</Radio>
        </Stack>
      </RadioGroup>
    </>
  )
}
