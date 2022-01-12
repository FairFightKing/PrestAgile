import styled from 'styled-components';
import { Badge } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface IValidationSpan {
  context?: string;
  regex: RegExp | boolean;
  value: string;
}

export const ValidationSpan = ({ context, regex, value }: IValidationSpan) => {
  const [validatedValue, setValidatedValue] = useState(false);
  const [valueToDisplay, setValueToDisplay] = useState('');

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
    };
    // @ts-ignore
    if (typeof regex !== 'boolean') {
      setValidatedValue(regex.test(value));
      return setValueToDisplay(
        ValueValidationDispatcher[context][
          validatedValue ? 'validatedValue' : 'falseValue'
        ],
      );
    }
    setValidatedValue(regex);
    return setValueToDisplay(value);
  }, [context, regex, validatedValue, value]);

  return (
    <Badge colorScheme={validatedValue ? 'green' : 'red'}>
      {valueToDisplay}
    </Badge>
  );
};
