import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  flex: 1 0 300px;
  margin: 20px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-basis: calc(33.33% - 40px);
  }

  @media (max-width: 768px) {
    flex-basis: calc(33.33% - 40px);
    &:hover {
      
      cursor: pointer;
  }
   
  
`;

export const ImageDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
  margin-bottom: 10px;
  pointer-events: none;

  @media (max-width: 768px) {
    position: relative;
    width: 80%;
    padding-top: 5%;
    margin-bottom: 2px;
  }

  &:hover {
    pointer-events: auto;
  }

  &:hover ${ImageDescription} {
    opacity: 1;
  }
`;

