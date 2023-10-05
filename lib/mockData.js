import { SKILL_LEVELS } from './enums'

export var mockResume = {
  name: 'Matahi Fareea',
  role: 'Développeur Full stack',
  location: 'Bordeaux, France',
  contacts: {
    email: 'matahivanille@gmail.com',
    phone: '(+33) 06 60 75 28 95',
    linkedin: 'www.linkedin.com/in/matahifareea-ab6421292',
    github: 'https://github.com/jiu-dev',
    portfolio: 'jiudev-homepage.vercel.app'
  },
  summary:
    "Développeur Full Stack créatif et passionné, fort d'une solide expérience dans divers projets technologiques. Je valorise le travail d'équipe pour atteindre des objectifs communs et je suis prêt à mettre mon expertise au service de votre vision. Contactez-moi pour donner vie à vos projets.",
  skills: [
    {
      name: 'React',
      level: SKILL_LEVELS.EXPERT
    },
    {
      name: 'NodeJS',
      level: SKILL_LEVELS.ADVANCED
    },
    {
      name: 'NextJS',
      level: SKILL_LEVELS.INTERMEDIATE
    },
    {
      name: 'TailwindCSS',
      level: SKILL_LEVELS.EXPERT
    },
    {
      name: 'Express',
      level: SKILL_LEVELS.ADVANCED
    },
    {
      name: 'MongoDB',
      level: SKILL_LEVELS.INTERMEDIATE
    },
    {
      name: 'Angular',
      level: SKILL_LEVELS.ADVANCED
    },
    {
      name: 'ASP.NET',
      level: SKILL_LEVELS.ADVANCED
    },
    {
      name: 'Azure Devops',
      level: SKILL_LEVELS.INTERMEDIATE
    },
    {
      name: 'MSSQL',
      level: SKILL_LEVELS.INTERMEDIATE
    }
  ],
  experiences: [
    {
      company: 'Matahi Vanille',
      project: 'Vanira',
      role: 'Développeur Web',
      location: 'Bordeaux',
      duration: 'Janvier 2023 - Présent',
      description: [
        [
          {
            _type: 'text',
            content: "Conception d'une "
          },
          {
            _type: 'strong',
            content: 'plateforme e-commerce'
          },
          {
            _type: 'text',
            content: ' pour la vente de vanille.'
          }
        ],
        [
          {
            _type: 'text',
            content: 'Mise en œuvre de la pile MERN avec '
          },
          {
            _type: 'strong',
            content: 'TypeScript'
          },
          {
            _type: 'text',
            content: ' et stylisation avec '
          },
          {
            _type: 'strong',
            content: 'Tailwind CSS'
          },
          {
            _type: 'text',
            content: '.'
          }
        ]
      ],
      skills: [
        {
          title: 'React',
          iconIdentifier: 'reactIcon'
        },
        {
          title: 'TailwindCSS',
          iconIdentifier: 'tailwindIcon'
        },
        {
          title: 'NodeJS',
          iconIdentifier: 'nodeJSIcon'
        },
        {
          title: 'MongoDB',
          iconIdentifier: 'mongodbIcon'
        }
      ]
    },
    {
      company: 'Avanade France',
      project: 'AB Monitoring',
      role: 'Développeur Full stack',
      location: 'Bordeaux',
      duration: 'Septembre 2020 - Juillet 2022',
      description: [
        [
          {
            _type: 'text',
            content: "Développement d'une "
          },
          {
            _type: 'strong',
            content: 'application de monitoring'
          },
          {
            _type: 'text',
            content: ' pour le secteur éolien.'
          }
        ],
        [
          {
            _type: 'text',
            content: "Utilisation d'"
          },
          {
            _type: 'strong',
            content: 'Angular'
          },
          {
            _type: 'text',
            content: ', '
          },
          {
            _type: 'strong',
            content: 'ASP.NET'
          },
          {
            _type: 'text',
            content: ', et '
          },
          {
            _type: 'strong',
            content: 'MSSQL'
          },
          {
            _type: 'text',
            content: ' avec orchestration via '
          },
          {
            _type: 'strong',
            content: 'Azure Devops'
          },
          {
            _type: 'text',
            content: '.'
          }
        ]
      ],
      skills: [
        {
          title: 'Angular',
          iconIdentifier: 'angularIcon'
        },
        {
          title: 'ASP.NET',
          iconIdentifier: 'aspNetIcon'
        },
        {
          title: 'MSSQL',
          iconIdentifier: 'mssqlIcon'
        }
      ]
    },
    {
      company: 'AZEO',
      project: 'CvFlow',
      role: 'Développeur Full stack',
      location: 'Bordeaux',
      duration: 'Septembre 2019 - Juillet 2020',
      description: [
        [
          {
            _type: 'text',
            content: "Développement d'une application pour l'"
          },
          {
            _type: 'strong',
            content: 'automatisation des mises à jour de CV'
          },
          {
            _type: 'text',
            content: '.'
          }
        ],
        [
          {
            _type: 'text',
            content: 'Rédaction des spécifications, utilisation de '
          },
          {
            _type: 'strong',
            content: 'React'
          },
          {
            _type: 'text',
            content: ' pour le front-end, et '
          },
          {
            _type: 'strong',
            content: 'ASP.NET'
          },
          {
            _type: 'text',
            content: ' pour le back-end.'
          }
        ]
      ],
      skills: [
        {
          title: 'React',
          iconIdentifier: 'reactIcon'
        },
        {
          title: 'ASP.NET',
          iconIdentifier: 'aspNetIcon'
        },
        {
          title: 'MSSQL',
          iconIdentifier: 'mssqlIcon'
        }
      ]
    },
    {
      company: 'Projet personnel',
      project: 'Space Portfolio',
      role: 'Développeur Full stack',
      location: 'Bordeaux',
      duration: 'Octobre 2023',
      description: [
        [
          { _type: 'text', content: 'Space Portfolio est ' },
          { _type: 'strong', content: 'une vitrine numérique' },
          {
            _type: 'text',
            content:
              ' conçue pour mettre en avant mes compétences et réalisations en tant que '
          },
          { _type: 'strong', content: 'développeur frontend' },
          { _type: 'text', content: '.' }
        ],
        [
          {
            _type: 'text',
            content: 'Utilisation des frameworks '
          },
          { _type: 'strong', content: 'React' },
          {
            _type: 'text',
            content: ', '
          },
          { _type: 'strong', content: 'NextJS' },
          {
            _type: 'text',
            content: ' et stylisation avec '
          },
          { _type: 'strong', content: 'TailwindCSS' },
          { _type: 'text', content: '.' }
        ]
      ],
      skills: [
        {
          title: 'React',
          iconIdentifier: 'reactIcon'
        },
        {
          title: 'TailwindCSS',
          iconIdentifier: 'tailwindIcon'
        },
        {
          title: 'NextJS',
          iconIdentifier: 'nextJSIcon'
        }
      ]
    }
  ],
  education: [
    {
      institution: "EPSI - L'école d'ingénierie informatique",
      diploma: 'Master : Titre RNCP Niveau 7, Ingénierie informatique  ',
      duration: 'Septembre 2017 - Juillet 2022'
    },
    {
      institution: 'Lycée Tuianu Legayic',
      diploma: 'Baccalauréat Scientifique',
      duration: 'Juillet 2016'
    }
  ],
  languages: [
    {
      name: 'Francais',
      level: 'Langue maternelle'
    },
    {
      name: 'Anglais',
      level: 'Connaissances techniques'
    }
  ]
}
