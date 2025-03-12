import './Skills.scss';

const hardSkills = [
  { icon: '🟡', text: 'JavaScript (ES6+/Node.js/Web APIs)' },
  { icon: '⚛️', text: 'React.js / Frontend Frameworks' },
  { icon: '🎨', text: 'HTML5 / CSS3 / BEM / SASS / SCSS' },
  { icon: '🛠', text: 'Git / Version Control' },
  { icon: '📦', text: 'Build Tools (Webpack/Vite/Babel)' },
  { icon: '🐧', text: 'Linux / Terminal / Shell scripting' },
];

const softSkills = [
  { icon: '💬', text: 'Командная работа / Коммуникация' },
  { icon: '🧠', text: 'Решение проблем / Критическое мышление' },
  { icon: '⏳', text: 'Тайм-менеджмент / Самоорганизация' },
  { icon: '🎭', text: 'Креативное мышление / Гибкость' },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__grid">
        {/* Hard Skills */}
        <div className="skills__hard">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__items">
            {hardSkills.map((skill, index) => (
              <div key={index} className="skills__item">
                <span className="skills__icon">{skill.icon}</span>
                {skill.text}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills__soft">
          <h2 className="skills__title">Soft Skills</h2>
          <div className="skills__items">
            {softSkills.map((skill, index) => (
              <div key={index} className="skills__item">
                <span className="skills__icon">{skill.icon}</span>
                {skill.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
