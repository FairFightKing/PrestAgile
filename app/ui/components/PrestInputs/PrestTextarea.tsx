import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'

export default function PrestTextarea({ props, ctx }) {
  const { label, information, placeholder, required } = props
  return (
    <FormControl>
      <FormLabel>
        {label} {required && '*'}
      </FormLabel>
      <Textarea
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
