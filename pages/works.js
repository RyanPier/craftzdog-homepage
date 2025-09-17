import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// Note: This build will fail if you haven't uploaded the thumbnail image yet.
// If it fails again, temporarily delete the line below.
// import thumbTextConverter from '../public/images/works/textconverter_eyecatch.png' 

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
         {/*  <WorkGridItem id="textconverter" title="Text Converter Website" thumbnail={thumbTextConverter}>
            A simple website for converting text.
          </WorkGridItem> */}
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
