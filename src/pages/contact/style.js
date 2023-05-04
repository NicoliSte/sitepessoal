import styled from "styled-components";

export const Container = styled.div`
margin-top: 80px;
bottom: 0;
  width: 100%;
  height: 100%;  
 

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    
    
  }
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 35%;  


a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #000;
  text-decoration: none;
  
}

span {
  margin-top: 10px;
}

@media screen and (max-width: 480px) {
  flex-direction: column;
  align-items: flex-start;

  a {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
`;

export const Img = styled.img``