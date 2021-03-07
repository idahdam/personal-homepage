import React from 'react'
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Markdown from "react-markdown"
import bloglist from "../../blog.json"

const Blogs = () => {
    const excerptList = bloglist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="bloglist">
            <h1 className="title">All Posts</h1>
            {bloglist.length && 
                bloglist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt=""/> }
                                <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="links" to={`/blog/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blogs;