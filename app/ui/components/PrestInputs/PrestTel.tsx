import { FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'

export default function PrestTel({ props }) {
  const { label, information } = props
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={information} type="tel" />
    </>
  )
}
