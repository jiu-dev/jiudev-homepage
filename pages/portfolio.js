import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/article'
import DottedTabMenu from '../components/DottedTabMenu'
import DottedTab from '../components/DottedTab'
import { projets } from '../lib/portfolio'
import Galaxy from '../components/Galaxy'

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [currentProject, setCurrentProject] = useState(projets[0])

  useEffect(() => {
    setCurrentProject(projets[selectedTab])
  }, [selectedTab])

  return (
    <Layout>
      <Galaxy />
      <div className="flex z-10 relative justify-center h-full flex-col md:flex-row-reverse mx-10">
        <div className="flex md:flex-none md:ml-10 md:mr-14">
          <div className="ml-10 mb-6 md:hidden">
            <h3 className=" text-3xl mb-3 mt-4 md:hidden">Projets</h3>

            <div className="flex-none flex gap-6 ">
              <DottedTabMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                itemsByMenu={2}
              >
                {projets.map((projet, index) => (
                  <DottedTabMenu.Item key={index}>
                    {projet.title}
                  </DottedTabMenu.Item>
                ))}
              </DottedTabMenu>
            </div>
          </div>

          <div className="hidden md:h-full md:flex md:items-center md:justify-center">
            <DottedTabMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            >
              {projets.map((projet, index) => (
                <DottedTabMenu.Item key={index}>
                  {projet.title}
                </DottedTabMenu.Item>
              ))}
            </DottedTabMenu>
          </div>
        </div>
        <div className="flex md:h-full md:items-center md:justify-center z-10">
          <DottedTab>
            <DottedTab.Title>{currentProject.title}</DottedTab.Title>
            <DottedTab.Subtitle>
              {currentProject.skills.map((skill, index) => (
                <DottedTab.Subtitle.Item key={index}>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 text-white">{skill.icon}</span>
                    <span>{skill.title}</span>
                  </div>
                </DottedTab.Subtitle.Item>
              ))}
            </DottedTab.Subtitle>

            <DottedTab.Body>{currentProject.body}</DottedTab.Body>
          </DottedTab>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
