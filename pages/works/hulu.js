import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="HULU">
      <Container>
        <Title>
          HULU
        </Title>
        <P>
          STYLY Studio is a creative tool for VR, allowing you to build virtual
          spaces towards extending fashion brand&apos;s expression ability of
          their concept. I built its web UI and backend.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, Javascript,Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://hulu-2fko.vercel.app/">
              Hulu <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/YLdHAggLBCw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
  
        <WorkImage src="/images/works/hulu.png" alt="HULU" />
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'