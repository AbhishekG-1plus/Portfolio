import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'cv' ?
            <ToggleButton active value="cv" onClick={() => setToggle('cv')}>Computer Vision</ToggleButton>
            :
            <ToggleButton value="cv" onClick={() => setToggle('cv')}>Computer Vision</ToggleButton>
          }
          <Divider />
          {toggle === 'quant' ?
            <ToggleButton active value="quant" onClick={() => setToggle('quant')}>Quant</ToggleButton>
            :
            <ToggleButton value="quant" onClick={() => setToggle('quant')}>Quant</ToggleButton>
          }
          <Divider />
          {toggle === 'ml' ?
            <ToggleButton active value="ml" onClick={() => setToggle('ml')}>Machine Learning</ToggleButton>
            :
            <ToggleButton value="ml" onClick={() => setToggle('ml')}>Machine Learning</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects