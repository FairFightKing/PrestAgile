import { Input } from '@chakra-ui/input'
import { FormLabel } from '@chakra-ui/react'
import { Dispatch, useEffect, useState } from 'react'
import { StringOrNumber } from '@chakra-ui/utils'

export default function PrestDate({ props }): JSX.Element {
  const [date, setDate] = useState<object>({})
  const { label } = props
  useEffect(() => console.log(date), [date])

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        onChange={e =>
          setDate({
            [label.replace('é', 'e')]: e.target.value,
          })
        }
        type="date"
        data-key={label}
      />
    </>
  )
}
