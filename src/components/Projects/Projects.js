import React from 'react'
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Markdown from "react-markdown"
import projectsList from "../../projects.json"

const Projects = () => {
    const excerptList = projectsList.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist">
            <h1 className="title">All Projects</h1>
            {projectsList.length && 
                projectsList.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt=""/> }
                                <h2 className="post-title"><Link className="links" to={`/Projects/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="links" to={`/Projects/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;