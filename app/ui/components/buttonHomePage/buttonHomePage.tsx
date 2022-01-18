import { ButtonHomePageProps } from './types/ButtonHomePageApp';
import { Button } from '@chakra-ui/react';

export const ButtonHomePage = ({
  buttonBackground,
  buttonContent,
  buttonMargin,
  buttonRadius,
  buttonSize,
  buttonTextColor,
}: ButtonHomePageProps) => (
  <Button
    mt={buttonMargin}
    color={buttonTextColor}
    borderRadius={buttonRadius}
    size={buttonSize}
    bg={buttonBackground}
  >
    {buttonContent}
  </Button>
);
