import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../../blog.json"
import {
    BlogsDetailsContainer,
    BlogsDetailsTitle,
    BlogsDetailsPublished,
    BlogsDetailsMarkdown,
    BlogsDetailsHeaderContainer,
    BlogsDetailsBodyContainer
} from './BlogsDetails.elements';

const BlogsDetails = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <BlogsDetailsContainer>
            <BlogsDetailsHeaderContainer>
                <BlogsDetailsTitle>{fetchedPost.title}</BlogsDetailsTitle>
                <BlogsDetailsPublished>Published on {fetchedPost.date} by <strong>{fetchedPost.author}</strong></BlogsDetailsPublished>
            </BlogsDetailsHeaderContainer>
            <BlogsDetailsBodyContainer>
                <hr/>
                <BlogsDetailsMarkdown source={fetchedPost.content} escapeHtml={false} />
            </BlogsDetailsBodyContainer>
        </BlogsDetailsContainer>
    )
}

export default BlogsDetails;