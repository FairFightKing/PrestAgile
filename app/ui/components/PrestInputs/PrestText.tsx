import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function PrestText({ props, ctx }) {
  const { label, information, placeholder, required } = props

  return (
    <FormControl>
      <FormLabel>
        {label}
        {required && '*'}
      </FormLabel>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={e => {
          ctx(props['keys_form'].data.id, e.target.value)
        }}
      />
      {information !== undefined && (
        <FormHelperText>{information}</FormHelperText>
      )}
    </FormControl>
  )
}
