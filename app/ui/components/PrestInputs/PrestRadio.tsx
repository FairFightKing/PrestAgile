import { FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { StringOrNumber } from '@chakra-ui/utils'

export default function PrestRadio({ props, ctx }): JSX.Element {
  const { label, information, required } = props
  const [value, setValue] = useState<StringOrNumber>('0')
  return (
    <>
      <FormLabel>
        {label}
        {required && '*'}
      </FormLabel>
      <RadioGroup
        onChange={e => {
          setValue(e)
          ctx(props['keys_form'].data.id, e)
        }}
        value={value}
      >
        <Stack direction="column">
          <Radio value="1">Oui</Radio>
          <Radio value="0">Non</Radio>
        </Stack>
      </RadioGroup>
    </>
  )
}
