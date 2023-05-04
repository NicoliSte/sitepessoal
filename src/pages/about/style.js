import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
   
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 100%;
  display: grid;
  margin-top: 120px;
  
  @media (max-width: 760px) {
    margin-top: 180px;
    width: 90%;
  }


`;

export const Name = styled.span`
  font-family: 'Nunito';
  font-style: italic;
  font-weight: 400;
  font-size: 60px;
  line-height: 95px;
  text-align: center;
  justify-content: center;
  
  
  @media (max-width: 760px) {
   
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 400;
    font-size: 25px;
  }
`;



export const Intro = styled.span`
  font-family: 'Nunito';
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: #5A5A5A;
  text-align: justify;

  @media (max-width: 760px) {
    
    font-family: 'Nunito';
  font-style: italic;
  font-weight: 400;
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  background: #F2726F;
  svg {
    font-size: 20px;
    
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25rem;
    height: 25rem;
  }
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Img = styled.img``