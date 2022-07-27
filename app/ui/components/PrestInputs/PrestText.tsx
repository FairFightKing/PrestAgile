import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react'

export default function PrestText({ props }) {
  const { label, information, placeholder } = props
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type="text" placeholder={placeholder} />
      {information !== undefined && (
        <FormHelperText>{information}</FormHelperText>
      )}
    </FormControl>
  )
}
