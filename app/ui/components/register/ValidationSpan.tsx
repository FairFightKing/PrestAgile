import { Badge } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface IValidationSpan {
  context?: string
  regex: RegExp | boolean
  value: string
}

export const ValidationSpan = ({ context, regex, value }: IValidationSpan) => {
  const [validatedValue, setValidatedValue] = useState(false)
  const [valueToDisplay, setValueToDisplay] = useState('')

  useEffect(() => {
    const ValueValidationDispatcher = {
      passwordCaps: {
        validatedValue: 'Le mot de passe possède une majuscule',
        falseValue: 'Le mot de passe doit posséder une majuscule',
      },
      passwordSpecialChar: {
        validatedValue: 'Le mot de passe contient un caractère spécial',
        falseValue: 'Le mot de passe doit contenir un caractère spécial',
      },
    }
    if (typeof regex !== 'boolean') {
      setValidatedValue(regex.test(value))
      return setValueToDisplay(
        // @ts-ignore
        ValueValidationDispatcher[context][
          validatedValue ? 'validatedValue' : 'falseValue'
        ],
      )
    }
    setValidatedValue(regex)
    return setValueToDisplay(value)
  }, [context, regex, validatedValue, value])

  return (
    <Badge colorScheme={validatedValue ? 'green' : 'red'} m="0 0.2rem">
      {valueToDisplay}
    </Badge>
  )
}
