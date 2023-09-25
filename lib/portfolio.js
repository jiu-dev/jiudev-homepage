import AngularIcon from '../components/icons/AngularIcon'
import AspNetIcon from '../components/icons/AspNetIcon'
import MicrosoftSQLServerIcon from '../components/icons/MicrosoftSQLServerIcon'
import MongoDBIcon from '../components/icons/MongoDBIcon'
import NextJSIcon from '../components/icons/NextJSIcon'
import NodeJSIcon from '../components/icons/NodeJSIcon'
import ReactIcon from '../components/icons/ReactIcon'
import TailwindIcon from '../components/icons/TailwindIcon'

const skills = {
  angular: {
    title: 'Angular',
    icon: <AngularIcon className="w-full h-full" />
  },
  react: {
    title: 'React',
    icon: <ReactIcon className="w-full h-full" />
  },
  nodeJS: {
    title: 'NodeJS',
    icon: <NodeJSIcon className="w-full h-full" />
  },
  tailwind: {
    title: 'Tailwind',
    icon: <TailwindIcon className="w-full h-full" />
  },
  nextJs: {
    title: 'NextJS',
    icon: <NextJSIcon className="w-full h-full" />
  },
  mongoDB: {
    title: 'MongoDB',
    icon: <MongoDBIcon className="w-full h-full" />
  },
  mssql: {
    title: 'MSSQL',
    icon: <MicrosoftSQLServerIcon className="w-full h-full" />
  },
  aspNet: {
    title: 'ASP.Net',
    icon: <AspNetIcon className="w-full h-full" />
  }
}
export const projets = [
  {
    title: 'CvFlow',
    skills: [skills.react, skills.aspNet, skills.mssql],
    body: "CvFlow est une application conçue pour maximiser l'efficacité dans la mise à jour des CV des collaborateurs. Cette application est unique en ce qu'elle s'intègre à un écosystème complet d'applications tierces, automatisant ainsi la mise à jour des CV."
  },
  {
    title: 'SBM Offshore',
    skills: [skills.angular, skills.aspNet, skills.mssql],
    body: "Développement d'une application de monitoring dédiée à une entreprise dans le secteur de l'énergie éolienne. L'application est spécialisée dans la gestion des tickets d'incidents émanant des bateaux responsables de la maintenance des éoliennes. "
  },
  {
    title: 'E-Shop Vanira',
    skills: [skills.react, skills.tailwind, skills.nodeJS, skills.mongoDB],
    body: "Créateur d'une plateforme e-commerce pour la vente de vanille. Les fonctionnalités clés incluent l'inscription des utilisateurs, le suivi des commandes et le téléchargement de factures."
  },
  {
    title: 'Space portfolio',
    skills: [skills.react, skills.nextJs, skills.tailwind],
    body: "Créateur d'une plateforme e-commerce pour la vente de vanille. Les fonctionnalités clés incluent l'inscription des utilisateurs, le suivi des commandes et le téléchargement de factures."
  }
]
