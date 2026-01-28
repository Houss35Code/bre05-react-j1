import { skills } from './data'
import Skill from './Skill'

function Skills() {
  return (
    <section>
      <h2>Compétences</h2>
      <ul>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} grade={skill.grade} />
        ))}
      </ul>
    </section>
  )
}

export default Skills