import { GridCategory } from './gridCategoryHomepage'
import { Wrap } from '@chakra-ui/react'

export default function TotalGridCategory() {
  return (
    <Wrap
      spacing={{ base: '10', md: '2.5rem', lg: '5rem' }}
      h="21rem"
      width="85%"
      justify="center"
      height="100%"
      m="auto"
    >
      <GridCategory
        imageAlt="Homme faisant un signe de main"
        imageSrc="Gridlistimage.png"
        textContentOverride="Scrum Master"
      />
      <GridCategory
        imageAlt="Homme faisant un signe de main"
        imageSrc="Gridlistimage.png"
        textContentOverride="Scrum Master"
      />
      <GridCategory
        imageAlt="Homme faisant un signe de main"
        imageSrc="Gridlistimage.png"
        textContentOverride="Scrum Master"
      />
      <GridCategory
        imageAlt="Homme faisant un signe de main"
        imageSrc="Gridlistimage.png"
        textContentOverride="Scrum Master"
      />
      <GridCategory
        imageAlt="Homme faisant un signe de main"
        imageSrc="Gridlistimage.png"
        textContentOverride="Scrum Master"
      />
    </Wrap>
  )
}
