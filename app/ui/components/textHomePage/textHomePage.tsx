import { Text } from '@chakra-ui/react';
import { TextHomePageProps } from './types/TextHomePageApp';
export const TextHomePage = ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textContent,
}: TextHomePageProps) => (
  <Text
    fontSize={fontSize}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
  >
    {textContent}
  </Text>
);
