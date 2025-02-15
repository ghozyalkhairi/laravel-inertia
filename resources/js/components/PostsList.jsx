const PostsList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    );
};

export default PostsList;
