function Post({ image, title, excerpt }) {
  return (
    <li>
      <article>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </article>
    </li>
  )
}

export default Post