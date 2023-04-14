import { useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from './style';
import Link from 'next/link'

function About() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleNameClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container>
      <Content>
        <Infos>
          <Name onClick={handleNameClick}>MySelf</Name>
          <Intro>
            <p>
              I`m a computer engineering student at UFPB and a front-end and back-end developer. Furthermore, I am
              passionate about UX/UI, animations and creating intuitive and dynamic user experiences.
            </p>

            <br />
            <p>
              I have extensive bootcamp experience in the field, having attended several including Rocketseat and
              Devsuperior. In these programs, I acquired knowledge in database, React Native, Spring Boot, REST API and
              other related technologies.
            </p>

            <br />
            <p>
              I am a very organized person, patient and problem solver. I`m always interested in working on ambitious
              projects with positive and dedicated people, across any front-end or back-end spectrum.
            </p>

            <br />
            <p>
              Software development is my passion and I am always looking for new opportunities to improve myself and
              learn more about technology and innovation. I`m confident that I can add value to any development team and
              look forward to sharing my skills and experience with others on exciting and challenging projects.
            </p>
          </Intro>

          <Link href="projects">
            <LinkProjects>See my projects <FaArrowRight /></LinkProjects>
          </Link>
          
        </Infos>
      </Content>
      {dialogOpen && (
        <div className="DialogBox" onClick={handleDialogClose}>
          <div className="DialogBox-container" onClick={(e) => e.stopPropagation()}>
            <div className="DialogBox-title">I</div>
            <Img src="/images/eu.png" alt="eu" className="Img" />
            <div className="DialogBox-close" onClick={handleDialogClose}>
            <FaTimes />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default About;