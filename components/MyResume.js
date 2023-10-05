import React from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import { styles } from '../styles/components/MyResumeStyles'
import { BlockContentPDF } from './BlockContent'

// A component to display contact information with an icon.
const ContactInfo = ({ children, icon }) => (
  <View style={styles.contactInfo}>
    {icon}
    <Text style={{ flex: 1 }}>{children}</Text>
  </View>
)

// Header component for different sections of the resume.
const HeaderView = ({ children, icon, isDark }) => (
  <View style={styles.header}>
    {isDark && <View style={styles.iconDecoration2}></View>}
    {isDark && <View style={styles.iconDecoration}></View>}
    {isDark && (
      <View
        style={{
          width: 32,
          height: 32,
          left: -1,
          top: -1,
          borderRadius: 10,
          position: 'absolute',
          backgroundColor: 'white'
        }}
      ></View>
    )}
    {icon}
    <Text>{children}</Text>
  </View>
)

// Component for displaying descriptions with a bullet point.
const DescriptionItem = ({ children }) => {
  return (
    <View style={styles.descriptionItem}>
      <Text style={styles.bullet}></Text>
      <BlockContentPDF blocks={children} />
    </View>
  )
}

// The main resume component.
const MyResume = ({ resume }) => (
  <Document>
    <Page size="A4">
      <View style={styles.page}>
        {/* Resume Header: Contains profile picture, name, role, and summary. */}
        <View style={styles.resumeHead}>
          <View style={styles.left}>
            <View style={styles.profilPicRing}>
              <Image
                alt="profil-picture"
                source="/images/matahi.png"
                style={styles.profilePic}
              />
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.name}>{resume.name}</Text>
            <Text style={styles.actualRole}>{resume.role}</Text>
            <View style={styles.sectionBody}>
              <Text>{resume.summary}</Text>
            </View>
          </View>
        </View>

        {/* Resume Body: Contains contact details, skills, languages, experiences, and education.*/}
        <View style={styles.resumeBody}>
          {/* Left section: Contains contact details, skills, and languages.*/}
          <View style={styles.left}>
            <View style={{ display: 'flex', margin: 10, gap: 10 }}>
              {/* Contact details section */}
              <View style={{ ...styles.leftContent, gap: 10 }}>
                <ContactInfo
                  icon={
                    <Image
                      alt="mail"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/mail.png`}
                    />
                  }
                >
                  {resume.contacts.email}
                </ContactInfo>
                <ContactInfo
                  icon={
                    <Image
                      alt="phone"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/phone.png`}
                    />
                  }
                >
                  {resume.contacts.phone}
                </ContactInfo>

                <ContactInfo
                  icon={
                    <Image
                      alt="location"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/location.png`}
                    />
                  }
                >
                  {resume.location}
                </ContactInfo>
                <ContactInfo
                  icon={
                    <Image
                      alt="github"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/github.png`}
                    />
                  }
                >
                  {resume.contacts.github}
                </ContactInfo>
                <ContactInfo
                  icon={
                    <Image
                      alt="website"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/website.png`}
                    />
                  }
                >
                  {resume.contacts.portfolio}
                </ContactInfo>
              </View>

              {/* Skills section */}
              <View style={styles.leftContent}>
                <HeaderView
                  icon={
                    <Image
                      alt="skills"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/skills.png`}
                    />
                  }
                >
                  Compétences
                </HeaderView>
                <View style={{ ...styles.sectionBody }}>
                  <View style={styles.skillContainer}>
                    {resume.skills.map(skill => (
                      <Text style={styles.skillItem} key={skill.name}>
                        {skill.name}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>

              {/* Languages section */}
              <View style={styles.leftContent}>
                <HeaderView
                  icon={
                    <Image
                      alt="language"
                      style={{ ...styles.icon, backgroundColor: 'white' }}
                      src={`/icons/language.png`}
                    />
                  }
                >
                  Langues
                </HeaderView>
                <View style={{ ...styles.sectionBody, gap: 10 }}>
                  {resume.languages.map(language => (
                    <View style={styles.languageItem} key={language}>
                      <Text style={styles.jobTitle}>{language.name}</Text>
                      <Text style={styles.jobCompany}>{language.level}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Right section : Contains work experience and education.*/}
          <View style={{ ...styles.right, gap: 20 }}>
            {/* Work Experiences section */}
            <View>
              <HeaderView
                isDark
                icon={
                  <Image
                    alt="work"
                    style={{
                      ...styles.icon,
                      backgroundColor: '#1e2f40'
                    }}
                    src={`/icons/work.png`}
                  />
                }
              >
                Expérience Professionnelle
              </HeaderView>

              <View style={{ ...styles.sectionBody, gap: 10 }}>
                {resume.experiences.map(job => (
                  <View key={job.duration}>
                    <Text style={styles.jobTitle}>{job.role}</Text>
                    <Text style={styles.jobCompany}>{job.company}</Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Text style={styles.jobDuration}>{job.duration}</Text>
                      <Text style={styles.jobDuration}>{job.location}</Text>
                    </View>
                    {job.description.map(description => (
                      <DescriptionItem key={description}>
                        {description}
                      </DescriptionItem>
                    ))}
                  </View>
                ))}
              </View>
            </View>

            {/* Education section */}
            <View>
              <HeaderView
                isDark
                icon={
                  <Image
                    alt="formation"
                    style={{ ...styles.icon, backgroundColor: '#1e2f40' }}
                    src={`/icons/formation.png`}
                  />
                }
              >
                Formation
              </HeaderView>
              <View style={{ ...styles.sectionBody, gap: 10 }}>
                {resume.education.map(edu => (
                  <View key={edu.institution}>
                    <Text style={styles.jobTitle}>{edu.diploma}</Text>
                    <Text style={styles.jobCompany}>{edu.institution}</Text>
                    <Text style={styles.jobDuration}>{edu.duration}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

export default MyResume
