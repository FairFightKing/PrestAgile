import { ButtonHomePage } from './buttonHomePage'
import { Box } from '@chakra-ui/react'
import { LinkComponent } from '../navigation/LinkComponent'

export default function TotalButtonHeader() {
  return (
    <Box my={5} mx={10} py={3}>
      <LinkComponent
        target="/test"
        child={<button color="primary">Test</button>}
      />
      <LinkComponent
        child={
          <ButtonHomePage
            buttonContent="Acceuil"
            buttonMarginX="5"
            buttonPaddingX="6"
            buttonPaddingy="4"
            buttonFontSize="15px"
            buttonFontWeight="600"
            buttonSize="lg"
            buttonRadius="100px"
            buttonVariant="ghost"
          />
        }
        target="/"
      />
      <LinkComponent
        child={
          <ButtonHomePage
            buttonContent="Connexion"
            buttonMarginX="5"
            buttonPaddingX="6"
            buttonPaddingy="4"
            buttonFontSize="15px"
            buttonFontWeight="600"
            buttonSize="lg"
            buttonRadius="100px"
            buttonBackground="#FFEEEE"
          />
        }
        target="/"
      />
      <LinkComponent
        child={
          <ButtonHomePage
            buttonContent="Inscription"
            buttonMarginX="5"
            buttonPaddingX="6"
            buttonPaddingy="4"
            buttonFontSize="15px"
            buttonFontWeight="600"
            buttonSize="lg"
            buttonRadius="100px"
            buttonBackground="#2945FF"
            buttonTextColor="white"
          />
        }
        target="/"
      />
    </Box>
  )
}
