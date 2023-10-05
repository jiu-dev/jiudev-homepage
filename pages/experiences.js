import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/article'
import DottedTabMenu from '../components/DottedTabMenu'
import DottedTab from '../components/DottedTab'
import { mockResume } from '../lib/mockData'
import GetIcon from '../lib/utils/GetIcon'
import { BlockContent } from '../components/BlockContent'

const Experiences = () => {
  const experiences = mockResume.experiences
  const [selectedTab, setSelectedTab] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(experiences[0])

  useEffect(() => {
    setCurrentExperience(experiences[selectedTab])
  }, [selectedTab, experiences])

  return (
    <Layout>
      <div className="flex z-10 relative justify-center h-full flex-col md:flex-row-reverse mx-10">
        <div className="flex md:flex-none md:ml-10 md:mr-14">
          {/* Dotted menu styled component; splits into two sections and becomes hidden at the 'md' breakpoint. */}
          <div className="ml-10 mb-6 md:hidden">
            <h3 className=" text-3xl mb-6 mt-4 md:hidden">Projets</h3>

            <div className="flex-none flex gap-6 ">
              <DottedTabMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                itemsByMenu={2}
              >
                {experiences.map((exp, index) => (
                  <DottedTabMenu.Item key={index}>
                    <span className="whitespace-nowrap">{exp.project}</span>
                  </DottedTabMenu.Item>
                ))}
              </DottedTabMenu>
            </div>
          </div>

          {/* Dotted menu styled component; Becomes visible at the 'md' breakpoint. */}
          <div className="hidden md:h-full md:flex md:items-center md:justify-center">
            <DottedTabMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            >
              {experiences.map((exp, index) => (
                <DottedTabMenu.Item key={index}>
                  {exp.project}
                </DottedTabMenu.Item>
              ))}
            </DottedTabMenu>
          </div>
        </div>
        <div className="flex md:h-full md:grow md:items-center md:justify-center z-10">
          {/* Render the experience chosen from the dotted menu options */}
          <DottedTab>
            <DottedTab.Title>{currentExperience.project}</DottedTab.Title>
            <DottedTab.Subtitle>
              {currentExperience.skills.map((skill, index) => (
                <DottedTab.Subtitle.Item key={index}>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 hidden md:inline">
                      {GetIcon(skill.iconIdentifier)}
                    </span>
                    <span>{skill.title}</span>
                  </div>
                </DottedTab.Subtitle.Item>
              ))}
            </DottedTab.Subtitle>

            <DottedTab.Body>
              <div className="flex flex-col gap-4">
                {currentExperience.description.map((line, index) => (
                  <span className="pl-4 relative" key={index}>
                    <div className="absolute w-2 h-2 rounded-sm bg-indigo-300 dark:bg-amber-500 top-[6px] -ml-5 "></div>
                    <BlockContent blocks={line} />
                  </span>
                ))}
              </div>
            </DottedTab.Body>
          </DottedTab>
        </div>
      </div>
    </Layout>
  )
}

export default Experiences
