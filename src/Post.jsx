export default function Post({post}) {
    // const {title, body} = post;
    return(
        <div className="card">
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
        </div>
    )
}