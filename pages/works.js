import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbhulu from '../public/images/works/huluthumb.png'
import thumbwhatsapp from '../public/images/works/whatsapp.png'
import thumbhastle from '../public/images/works/hastle.png'
import thumbveridoc from '../public/images/works/veridoc.png'
const Works = () => (
  <Layout title="Works">
    <Container>
        <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
          <WorkGridItem id="hulu" thumbnail={thumbhulu} title="Hulu Clone">
            Frontend replica of Hulu a popular movie streaming website
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="whatsapp"
            thumbnail={thumbwhatsapp}
            title="Whatsapp Clone"
          >
            Whatsapp Desktop Clone with a minimalistic user interface
          </WorkGridItem>
        </Section>
        <Section delay={0.9}>
          <WorkGridItem
            id="hastle"
            thumbnail={thumbhastle}
            title="Hastle web app"
          >
            A web app that makes searching of local manual jobs easier
          </WorkGridItem>
        </Section>
        <Section delay={1.0}>
          <WorkGridItem
            id="veridoc"
            thumbnail={thumbveridoc}
            title="Veridoc"
          >
            Blockchain based e-filling system 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
