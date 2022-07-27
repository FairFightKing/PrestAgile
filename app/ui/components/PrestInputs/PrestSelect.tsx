import { Box, FormLabel, Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function PrestSelect({ props }): JSX.Element {
  const { subfield, information, label, required } = props
  const [state, setState] = useState<object>({})

  return (
    <Box>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Select
        placeholder={information}
        onChange={e =>
          setState({
            [label.replace('é', 'e').toLowerCase()]: e.target.value,
          })
        }
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
