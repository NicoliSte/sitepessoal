import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at, Ancora, AncoraUrl } from './style';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/NicoliSte/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        var data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();
  }, [])

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map(item => (
            <Li key={item.id} className="item-hover">
              <TitleProject>
                <Ancora href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name.toUpperCase()}</Ancora>
              </TitleProject>
              <Url>
                <AncoraUrl href={item.html_url} target="_blank" rel="noopener noreferrer">URL: {item.url}</AncoraUrl>
                </Url>
              <Created_at>
              <AncoraUrl href={item.html_url} target="_blank" rel="noopener noreferrer">Data Criação: { Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}</AncoraUrl>
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}