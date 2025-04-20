import {
    Container,
    Link,
    List,
    ListItem,
    Text
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Veridoc">
      <Container>
        <Title>Veridoc</Title>
        <P>
         Veridoc is a fullstack blockchain based e-filling system that allows users to upload court documents to a storage system that ensures there is no tampering of the documents.The system utilizes the immutabilty,integrity and traceability of Arweave a storage blockchain to ensures documents uploaded remain as is.</P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web3</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
        <Text fontSize={16} fontWeight={'extrabold'}>NextJS,ExpressJS,Arweave,WeaveDB,OthentKMS</Text>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://veridoc-next-js.vercel.app/">
              Veridoc <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Frontend Code</Meta>
            <Link href="https://github.com/Elvin-Mworia/veridoc-nextJs">
              Github Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Backend Code</Meta>
            <Link href="https://github.com/Elvin-Mworia/veridocBackend">
              Github Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
     
  
        <WorkImage src="/images/works/veridoc.png" alt="Veridoc Homepage" />
        <WorkImage src="/images/works/Veridoc_Login.png" alt="Veridoc Login page" />
        <WorkImage src="/images/works/Veridoc_User_Dash.png" alt="Veridoc User dashboard" />
        <WorkImage src="/images/works/Veridoc_Case_Creation.png" alt="Veridoc case creation page" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'