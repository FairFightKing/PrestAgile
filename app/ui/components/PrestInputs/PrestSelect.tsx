import { Box, FormLabel, Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function PrestSelect({ props, ctx }): JSX.Element {
  const { subfield, information, label, required } = props

  return (
    <Box>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Select
        placeholder={information}
        onChange={e => {
          ctx(props['keys_form'].data.id, e.target.value)
        }}
      >
        {subfield.data.attributes['subfield_values'].data.map((el, key) => {
          return (
            <option key={key} value={el.attributes.value}>
              {el.attributes.value}
            </option>
          )
        })}
      </Select>
    </Box>
  )
}
