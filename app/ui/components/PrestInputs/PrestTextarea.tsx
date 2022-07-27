import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'

export default function PrestTextarea({ props }) {
  const { label, information, placeholder, required } = props
  return (
    <FormControl>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Textarea type="text" placeholder={placeholder} />
      {information !== undefined && (
        <FormHelperText>{information}</FormHelperText>
      )}
    </FormControl>
  )
}
