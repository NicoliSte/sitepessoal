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
  justify-content: center;
 
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 760px) {
   font-size: 13px;
  }
`;

export const Ancora = styled.a`
font-size: 18px;
font-family: 'Nunito', sans-serif;
color: #5A5A5A;



@media (min-width: 560px) {
  color: #5A5A5A;
}
`;

export const AncoraUrl = styled.a`
font-size: 18px;
font-family: 'Nunito', sans-serif;
color: #F2726F;



@media (min-width: 560px) {
  color: #F2726F;
}
`;
export const TitleProject = styled.strong`
color:color: #5A5A5A;;
text-decoration:none;
text-align: center;

`;

export const Url = styled.span`
text-align: justified;
`;

export const Created_at = styled.span`
text-align: justified;
`;