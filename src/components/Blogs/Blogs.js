import React from 'react'
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Markdown from "react-markdown"
import bloglist from "../../blog.json"
import projectsList from "../../projects.json"

import {
    BlogListHeaderContainer,
    BlogListHeaderTitle,
    BlogListHeaderDesc,
    BlogListBodyContainer,
    BlogListBodyImage,
    BlogListBodyTitle,
    BlogListBodyReadmore,
    BlogListBodyPublished,
    BlogListBodyBody,
    BlogListRow,
    BlogListColumn,
    BlogListColumImage,
    BlogListLinkTitle,
    BlogListBodyReadmoreLink,
} from './Blogs.element';

const Blogs = () => {
    const excerptList = bloglist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <Container>
            <BlogListHeaderContainer>
                <BlogListHeaderTitle>Blog</BlogListHeaderTitle>
                <BlogListHeaderDesc>(noun) a regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style.</BlogListHeaderDesc>
            </BlogListHeaderContainer>
                {bloglist.length && 
                    bloglist.map((post, i) => {
                        return (
                            <BlogListBodyContainer key={i}>
                                <BlogListRow>
                                    <BlogListColumn>
                                        <BlogListBodyTitle>
                                            <BlogListLinkTitle to={`/Blogs/${post.id}`}>{post.title}</BlogListLinkTitle>
                                        </BlogListBodyTitle>
                                        <BlogListBodyPublished>Published on {post.date} by {post.author}</BlogListBodyPublished>
                                        <BlogListBodyBody source={excerptList[i]} escapeHtml={false} />
                                        <br/>
                                        <BlogListBodyReadmore>
                                            <BlogListBodyReadmoreLink className="links" to={`/Blogs/${post.id}`}>Read more</BlogListBodyReadmoreLink>
                                        </BlogListBodyReadmore>
                                    </BlogListColumn>
                                    <BlogListColumImage>
                                        <BlogListBodyImage>
                                            <Link className="links" to={`/Blogs/${post.id}`}>{post.thumbnail && <img className="thumbnail" width={250} src={post.thumbnail} alt=""/> }</Link>
                                        </BlogListBodyImage>
                                    </BlogListColumImage>
                                </BlogListRow>
                                <br/>
                                <hr/>
                            </BlogListBodyContainer>
                        )
                    })
                }
        </Container>
    )
}

export default Blogs;