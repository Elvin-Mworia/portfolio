import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Divider 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { WorkGridItem } from '../components/grid-item'
import thumbhulu from '../public/images/works/huluthumb.png'
import thumbwhatsapp from '../public/images/works/whatsapp.png'
import thumbhastle from '../public/images/works/hastle.png'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ElvinMworia1.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="149px"
              height="149px"
            />
          </Box>
        </Box>
        <Box flexGrow={1}
        margin="auto"
        >
          <Heading as="h2" ml=".5em" variant="page-title">
            Elvin Mworia
          </Heading>
          <Heading as="h4" ml="5%" size="sm">Software Engineer,Web3 Enthusiast</Heading>
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mt={3}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
     Hello,I&apos;m a Software Engineer based in Nairobi Kenya with a keen interest in Fullstack  and  Web3 Development
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Elvin is an enthusiastic and driven computer science student with a 
        passion for problem-solving through coding and a knack for generating 
        innovative ideas. Beyond the realm of technology, he has a fascinating 
        hobby—studying the financial markets and delving into investment and finance books. 
        Having an analytical mindset and technical skills allows
         him to explore creative solutions to complex challenges{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Meru, Kenya
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Joined High Shcool and studied at Meru School 
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Joined Bachelor&apos;s Program of Computer Science in the School of
          Computing at Jomo Kenyatta University of Agriculture and Technology
          
        </BioSection>
       
       
      </Section>
      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
          <WorkGridItem id="hulu" thumbnail={thumbhulu} title="Hulu Clone">
            Frontend  replica of Hulu a popular movie streaming website
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem id="whatsapp" thumbnail={thumbwhatsapp} title="Whatsapp Clone">
            Whatsapp Desktop Clone with a minimalistic user interface
          </WorkGridItem>
        </Section>
        <Section delay={0.9}>
          <WorkGridItem id="hastle" thumbnail={thumbhastle} title="Hastle web app">
            A web app that makes searching of local manual jobs easier
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding,{' '}

          
          
         
          
           Reading
          
          ,Listening  to podcasts of CyberSecurity & Blockchain Tech
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
  {/*      <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
