import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import MyResume from '../components/MyResume'
import dynamic from 'next/dynamic'
import { resume } from '../lib/resume'

const DynamicPDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  {
    ssr: false, // assurez-vous qu'il ne soit chargé que côté client
    loading: () => <p>Chargement de la prévisualisation...</p>
  }
)
const Preview = () => (
  <div style={{ height: '100vh' }}>
    <DynamicPDFViewer width="100%" height="100%">
      <MyResume resume={resume} />
    </DynamicPDFViewer>
  </div>
)

export default Preview
