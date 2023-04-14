import styled from 'styled-components';


export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid white;
  
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 90px;
  font-family: 'League Script', cursive;
  font-style: normal;
  font-weight: 400;
  line-height: 100px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;  
  justify-content: center;
  

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #E8A4A4;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 26%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      
      padding: 13px 0;
      align-items: center;
      
      
    }
  }
`;

export const Ancora = styled.div`
  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  align-items: center;
  transition: 0.3s;
  color: black;
  height: 30px;
  
  
  
  &.active {
    background-color: white;
    color: #F2726F
    
    
  }
  
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
    height: 100px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const SubTitle = styled.span``;