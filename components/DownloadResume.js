import React from 'react'
import { saveAs } from '@progress/kendo-file-saver'
import { pdf } from '@react-pdf/renderer'
import { resume } from '../lib/resume'
import MyResume from './MyResume'
import DownloadIcon from './icons/DownloadIcon'

const DownloadResume = () => {
  const downloadPdf = async () => {
    const blob = await pdf(<MyResume resume={resume} />).toBlob()
    saveAs(blob, 'CV_Matahi_FAREEA.pdf')
  }

  return (
    <div>
      <button className="block md:hidden" onClick={downloadPdf}>
        <DownloadIcon className="w-11 h-11 dark:hover:text-amber-500 hover:text-indigo-300" />
      </button>
      <button className="hidden md:block" onClick={downloadPdf}>
        Télécharger mon CV
      </button>
    </div>
  )
}

export default DownloadResume
