import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle} from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiHomeHeart } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { AiFillCode , AiFillInfoCircle} from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";




export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            N S
          </Title>
          
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}><BiHomeHeart />Home</Ancora>
          </Link>
          <Link href="about">
            <Ancora className={activeLink('about')} onClick={showSiderbar}><AiFillInfoCircle />About</Ancora>
          </Link>
          <Link href="skill">
            <Ancora className={activeLink('skill')} onClick={showSiderbar}><GiSkills />Skills</Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSiderbar}><AiFillCode />Projects</Ancora>
          </Link>
          <Link href="contact">
            <Ancora className={activeLink('contact')} onClick={showSiderbar}><GrContactInfo />Contact</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}