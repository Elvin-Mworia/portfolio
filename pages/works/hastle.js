import {
  Container,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="HASTLE">
    <Container>
      <Title>HASTLE</Title>
      <P>
      Hastle is a fullstack web application geared towards helping Handymen find tasks within their proximity. It features a user-friendly interface built with Next.js and Chakra UI, ensuring a seamless experience across devices. The backend is powered by NestJS and MongoDB, providing a robust and scalable solution.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web2</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS,NestJS,MongoDB,Chakra UI</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="_blank">
            Hastle <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
             <ListItem>
            <Meta>Frontend Code</Meta>
            <Link href="https://github.com/Elvin-Mworia/Hastle-frontend">
              Github Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Backend Code</Meta>
            <Link href="https://github.com/Elvin-Mworia/hastle-backend-nest-js">
              Github Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
      </List>

      

      <WorkImage src="/images/works/hastle.png" alt="Hastle homepage" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
