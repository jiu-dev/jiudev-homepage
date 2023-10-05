import AngularIcon from '../../components/icons/AngularIcon'
import AspNetIcon from '../../components/icons/AspNetIcon'
import MicrosoftSQLServerIcon from '../../components/icons/MicrosoftSQLServerIcon'
import MongoDBIcon from '../../components/icons/MongoDBIcon'
import NextJSIcon from '../../components/icons/NextJSIcon'
import NodeJSIcon from '../../components/icons/NodeJSIcon'
import ReactIcon from '../../components/icons/ReactIcon'
import TailwindIcon from '../../components/icons/TailwindIcon'

const GetIcon = iconID => {
  switch (iconID) {
    case 'reactIcon':
      return <ReactIcon className="w-full h-full" />
    case 'tailwindIcon':
      return <TailwindIcon className="w-full h-full" />
    case 'nodeJSIcon':
      return <NodeJSIcon className="w-full h-full" />
    case 'mongodbIcon':
      return <MongoDBIcon className="w-full h-full" />
    case 'angularIcon':
      return <AngularIcon className="w-full h-full" />
    case 'aspNetIcon':
      return <AspNetIcon className="w-full h-full" />
    case 'mssqlIcon':
      return <MicrosoftSQLServerIcon className="w-full h-full" />
    case 'nextJSIcon':
      return <NextJSIcon className="w-full h-full" />
  }
}

export default GetIcon
