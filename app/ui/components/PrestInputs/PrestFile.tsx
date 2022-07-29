import { FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'

export default function PrestFile({ props, ctx }) {
  const { label, information, required } = props
  return (
    <>
      <FormLabel>
        {label}
        {required && '*'}
      </FormLabel>
      <Input
        padding={1}
        placeholder={information}
        type="file"
        onChange={e => {
          ctx(props['keys_form'].data.id, e.target.value)
        }}
      />
    </>
  )
}
