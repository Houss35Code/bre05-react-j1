function Student(props) {
  return (
    <li>
      <article>
        <h3>{props.name}</h3>
        <ul>
          {props.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </article>
    </li>
  )
}

export default Student