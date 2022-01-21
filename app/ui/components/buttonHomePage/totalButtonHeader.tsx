import { ButtonHomePage } from './buttonHomePage'
import { Box, Button } from '@chakra-ui/react'
import { LinkComponent } from '../navigation/LinkComponent'

export default function TotalButtonHeader() {
  return (
    <Box my={5} mx={10} py={3}>
      <LinkComponent
        target="/test"
        child={
          <Button mx={5} px={6} py={4} variant="ghost" color="primary">
            Test
          </Button>
        }
      />
      <LinkComponent
        child={
          <ButtonHomePage
            buttonContent="Accueil"
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
        target="/test"
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
        target="/connexion"
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
