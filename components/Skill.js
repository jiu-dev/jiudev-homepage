import { SKILL_LEVELS } from '../lib/enums'

const Skill = ({ children, ...props }) => {
  var percentage = 0
  var label = ''
  switch (props.level) {
    case SKILL_LEVELS.BEGINNER:
      label = 'Débutant'
      percentage = 25
      break
    case SKILL_LEVELS.INTERMEDIATE:
      label = 'Intermédiaire'
      percentage = 50
      break
    case SKILL_LEVELS.ADVANCED:
      label = 'Avancé'
      percentage = 75
      break
    case SKILL_LEVELS.EXPERT:
      label = 'Expert'
      percentage = 100
      break
  }
  return (
    <div className={props.className} {...props}>
      {/* Display the skill name and its level label */}
      <div className="mb-1">
        <span className="">{children}</span>
        <span className="self-center px-2">&bull;</span>
        <span className="font-thin">{label}</span>
      </div>

      {/* Skill progress bar */}
      <div className="relative p-1 dark:bg-black bg-white w-full h-4 rounded-3xl">
        <div className="relative dark:bg-amber-200 bg-indigo-200 h-2 rounded-3xl">
          {/* Fill of the progress bar based on the percentage */}
          <div
            className="relative dark:bg-amber-500 bg-indigo-400 h-2 rounded-3xl"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Skill
