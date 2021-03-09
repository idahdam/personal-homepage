import React from 'react'
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Markdown from "react-markdown"
import projectsList from "../../projects.json"
import {
    ProjectsListHeaderContainer,
    ProjectsListHeaderTitle,
    ProjectsListHeaderDesc,
    ProjectsListContainerColumn,
    ProjectsListContainerHref,
    ProjectsListContainerColor,
    ProjectsListImg,
    ProjectsListTitle,
    ProjectsListContainerRow,
    SlideTitle,
    SlideDesc
} from './Projects.elements';

let counter = 0;
const Projects = () => {
    const excerptList = projectsList.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <Container>
            <ProjectsListHeaderContainer>
                <ProjectsListHeaderTitle>Projects</ProjectsListHeaderTitle>
                <ProjectsListHeaderDesc>(noun) an individual or collaborative enterprise that is carefully planned to achieve a particular aim.</ProjectsListHeaderDesc>
            </ProjectsListHeaderContainer>
            <ProjectsListContainerRow>
            {projectsList.length && 
                projectsList.map((post, i) => {
                        var counter = (projectsList.length/3);
                        var a, b = 0;
                        console.log(counter);
                        for(a = 0; a < counter; a++){
                            for(b = i%2; b<3; i++){
                                return(
                                    <>
                                    <ProjectsListContainerColumn key={b}>
                                        <ProjectsListContainerHref to={`/Projects/${post.id}`} catalogColor={b%2 == 0 ? false : true}>
                                        <ProjectsListContainerColor catalogColor={b%2 == 0 ? false : true}>
                                            <ProjectsListImg src={post.thumbnail} alt="alt"></ProjectsListImg>
                                            <ProjectsListTitle catalogColor={b%2 == 0 ? false : true}>{post.title.length < 30 ? post.title : post.title.split(" ").slice(0, 4).join(" ") + "..." }</ProjectsListTitle>
                                        </ProjectsListContainerColor>
                                        </ProjectsListContainerHref>
                                    </ProjectsListContainerColumn>
                                    </>
                                )
                            }
                        }
                })
            }
            </ProjectsListContainerRow>
            <SlideTitle>Slide to View ➡️</SlideTitle>
            <SlideDesc>Sorted from the freshest.</SlideDesc>
        </Container>
    )
}

export default Projects;