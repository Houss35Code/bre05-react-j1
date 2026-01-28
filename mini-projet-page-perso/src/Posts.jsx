import { posts } from './data'
import Post from './Post'

function Posts() {
  return (
    <section>
      <h2>Publications</h2>
      <ul>
        {posts.map((post, index) => (
          <Post 
            key={index} 
            image={post.image} 
            title={post.title} 
            excerpt={post.excerpt} 
          />
        ))}
      </ul>
    </section>
  )
}

export default Posts