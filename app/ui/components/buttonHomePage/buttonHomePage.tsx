import { ButtonHomePageProps } from './types/ButtonHomePageApp'
import { Button } from '@chakra-ui/react'
import { FC } from 'react'

export const ButtonHomePage: ({
  buttonBackground,
  buttonContent,
  buttonMarginT,
  buttonRadius,
  buttonSize,
  buttonTextColor,
  buttonVariant,
  buttonFontSize,
  buttonFontWeight,
  buttonMarginX,
  buttonPaddingX,
  buttonPaddingy,
}: ButtonHomePageProps) => JSX.Element = ({
  buttonBackground,
  buttonContent,
  buttonMarginT,
  buttonRadius,
  buttonSize,
  buttonTextColor,
  buttonVariant,
  buttonFontSize,
  buttonFontWeight,
  buttonMarginX,
  buttonPaddingX,
  buttonPaddingy,
}: ButtonHomePageProps) => (
  <Button
    mt={buttonMarginT}
    color={buttonTextColor}
    borderRadius={buttonRadius}
    size={buttonSize}
    bg={buttonBackground}
    variant={buttonVariant}
    mx={buttonMarginX}
    fontSize={buttonFontSize}
    fontWeight={buttonFontWeight}
    py={buttonPaddingy}
    px={buttonPaddingX}
  >
    {buttonContent}
  </Button>
)
