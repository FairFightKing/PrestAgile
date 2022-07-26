import { Input } from '@chakra-ui/input'
import { FormLabel } from '@chakra-ui/react'

export default function PrestText({ label }) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input placeholder="oui" type="text" />
    </>
  )
}
