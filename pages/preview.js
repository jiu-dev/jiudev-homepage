import React from 'react'
import MyResume from '../components/MyResume'
import dynamic from 'next/dynamic'
import { mockResume } from '../lib/mockData'

const DynamicPDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Chargement de la prévisualisation...</p>
  }
)

// Remove Space Portfolio experience.
const resume = {
  ...mockResume,
  experiences: mockResume.experiences.filter(
    exp => exp.project !== 'Space Portfolio'
  )
}

// Review my resume at the /preview page
const Preview = () => (
  <div style={{ height: '100vh' }}>
    <DynamicPDFViewer width="100%" height="100%">
      <MyResume resume={resume} />
    </DynamicPDFViewer>
  </div>
)

export default Preview
