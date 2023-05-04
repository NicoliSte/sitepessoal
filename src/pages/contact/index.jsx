import React from 'react'
import { Container, Content, Img } from '../../../styles/stylecontact'
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <Container>
      <h1>Entre em contato</h1>
      <Img src="/images/email.png" alt="email" />
      
      <Content>
        <a href="https://www.linkedin.com/in/nicoli-stefani-78986b22b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/nicolii.s/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="mailto:nicolistefani@icloud.com">
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a href="tel:+5583982135115">
          <FaPhone />
          <span>(83) 98213-5115</span>
        </a>
      </Content>
    </Container>
  )
} 