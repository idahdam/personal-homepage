import React from 'react'
import {
    CatalogContainer,
    CatalogBody,
    CatalogTitle,
    CatalogImg,
    CatalogContainerRow,
    CatalogContainerColumn,
    CatalogContainerColor,
    CatalogContainerHref
} from './Catalog.Elements';
import projectsList from "../../projects.json"
import bloglist from "../../blog.json"


const Catalog = ({proj}) => {
    const blogListCatalog = bloglist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    const projectsListCatalog = projectsList.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })

    return(
        <>
            <CatalogContainer>
                <CatalogContainerRow>
                { proj ?
                bloglist.length && bloglist.map((post, i) => {
                    if(i < 3){
                        return(
                        <CatalogContainerColumn key={i}>
                            <CatalogContainerHref to={`/Blogs/${post.id}`} catalogColor={i%2 == 0 ? false : true}>
                            <CatalogContainerColor catalogColor={i%2 == 0 ? false : true}>
                                <CatalogImg src={post.thumbnail} alt="alt"></CatalogImg>
                                <CatalogTitle catalogColor={i%2 == 0 ? false : true}>{post.title.length < 25 ? post.title : post.title.split(" ").slice(0, 4).join(" ") + "..." }</CatalogTitle>
                            </CatalogContainerColor>
                            </CatalogContainerHref>
                        </CatalogContainerColumn>
                    )}
                })
                :
                projectsList.length && projectsList.map((post, i) => {
                    if(i < 3){
                        return(
                        <CatalogContainerColumn key={i}>
                            <CatalogContainerHref to={`/Projects/${post.id}`} catalogColor={i%2 == 0 ? false : true}>
                            <CatalogContainerColor catalogColor={i%2 == 0 ? false : true}>
                                <CatalogImg src={post.thumbnail} alt="alt"></CatalogImg>
                                <CatalogTitle catalogColor={i%2 == 0 ? false : true}>{post.title.length < 30 ? post.title : post.title.split(" ").slice(0, 4).join(" ") + "..." }</CatalogTitle>
                            </CatalogContainerColor>
                            </CatalogContainerHref>
                        </CatalogContainerColumn>
                    )}
                })
                }
                </CatalogContainerRow>
            </CatalogContainer>
        </>
    )
};

export default Catalog