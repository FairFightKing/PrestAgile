import { FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { useState } from 'react'

export default function PrestTel({ props, ctx }) {
  const { label, information, required } = props
  const [tel, setTel] = useState<object>({})
  return (
    <>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Input
        onChange={e => {
          ctx(props['keys_form'].data.id, e.target.value)
        }}
        placeholder={information}
        type="tel"
      />
    </>
  )
}
