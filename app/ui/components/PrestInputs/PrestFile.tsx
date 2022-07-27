import { FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'

export default function PrestFile({ props }) {
  const { label, information } = props
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input padding={1} placeholder={information} type="file" />
    </>
  )
}
