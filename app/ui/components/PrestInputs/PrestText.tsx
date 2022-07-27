import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react'

export default function PrestText({ props }) {
  const { label, information, placeholder, required } = props
  return (
    <FormControl>
      <FormLabel>
        {label}
        {required && '*'}
      </FormLabel>
      <Input type="text" placeholder={placeholder} />
      {information !== undefined && (
        <FormHelperText>{information}</FormHelperText>
      )}
    </FormControl>
  )
}
