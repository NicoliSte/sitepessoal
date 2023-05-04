import React, { useState } from 'react';
import { Container, ImageContainer, ImageDescription, ImageWrapper } from '../../../styles/styleskill';
import Image from 'next/image';

const images = [{ src: '/images/imagem1.svg' }, 
{ src: '/images/imagem2.svg' }, 
{ src: '/images/imagem3.svg' }, 
{ src: '/images/imagem5.svg' }, 
{ src: '/images/imagem6.svg' }, 
{ src: '/images/imagem7.svg' }, 
{ src: '/images/imagem8.svg' }, 
{ src: '/images/imagem9.svg' }];

const Skills = () => {
  return (
    <Container>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <ImageWrapper>
            <Image src={image.src} alt={image.description} width={250} height={250} />
            <ImageDescription>{image.description}</ImageDescription>
          </ImageWrapper>
        </ImageContainer>
      ))}
    </Container>
  );
};

export default Skills;