import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Hi, I`m Nicoli</Name>
          <Function>FullStack Developer</Function>
        
          <Link href="contact">
            <LinkProjects>CONTACT ME <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}