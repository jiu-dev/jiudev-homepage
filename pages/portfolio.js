import Capsule from '../components/Capsule'
import Layout from '../components/layouts/article'

const Project = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="w-1/3 h-full ">
          <div className="flex flex-col items-center gap-6 mt-6">
            <span>Oui</span>
            <span>Oui</span>
          </div>
        </div>
        <div className="w-2/3 h-full flex flex-col items-center justify-center">
          <div>
            <h3 className="text-4xl text-center mb-4">CvFlow</h3>
            <Capsule>
              CvFlow est une application conçue pour maximiser l'efficacité dans
              la mise à jour des CV des collaborateurs. Cette application est
              unique en ce qu'elle s'intègre à un écosystème complet
              d'applications tierces, automatisant ainsi la mise à jour des CV.
              Grâce à cette intégration, les utilisateurs bénéficient d'une
              expérience optimisée, éliminant le besoin de mises à jour
              manuelles répétées.
            </Capsule>
            <ul className="flex items-center justify-center mt-4">
              <li>
                <a>Voir plus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
