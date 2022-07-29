import { Input } from '@chakra-ui/input'
import { FormLabel } from '@chakra-ui/react'
import { Dispatch, useEffect, useState } from 'react'
import { StringOrNumber } from '@chakra-ui/utils'

export default function PrestDate({ props, ctx }): JSX.Element {
  const { label, required } = props

  return (
    <>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Input
        onChange={e => {
          ctx(props['keys_form'].data.id, e.target.value)
        }}
        type="date"
        data-key={label}
      />
    </>
  )
}
