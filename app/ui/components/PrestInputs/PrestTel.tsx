import { FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { useState } from 'react'

export default function PrestTel({ props }) {
  const { label, information, required } = props
  const [tel, setTel] = useState<object>({})
  return (
    <>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Input
        onChange={e =>
          setTel({
            [label]: e.target.value,
          })
        }
        placeholder={information}
        type="tel"
      />
    </>
  )
}
