import { Checkbox, CheckboxGroup, FormLabel, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { StringOrNumber } from '@chakra-ui/utils'

export default function PrestCheckbox({ props }): JSX.Element {
  const [checkboxesSelected, setCheckboxesSelected] = useState<
    StringOrNumber[]
  >([])

  function handleChangeOnCheckbox({ target }) {
    const { value } = target
    if (checkboxesSelected.includes(value))
      return setCheckboxesSelected(prevState =>
        prevState.filter(prevItem => prevItem !== value),
      )
    return setCheckboxesSelected(oldCheckboxes => [...oldCheckboxes, value])
  }

  return (
    <>
      <FormLabel>{props.label}</FormLabel>
      <CheckboxGroup>
        <Stack direction="column">
          {props.subfield.data.attributes['subfield_values'].data.map(
            (el, key) => (
              <Checkbox
                key={key}
                onChange={handleChangeOnCheckbox}
                value={el.attributes.value}
                width={'100%'}
              >
                {el.attributes.value}
              </Checkbox>
            ),
          )}
        </Stack>
      </CheckboxGroup>
    </>
  )
}
