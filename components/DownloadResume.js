import React from 'react'
import { saveAs } from '@progress/kendo-file-saver'
import { pdf } from '@react-pdf/renderer'
import MyResume from './MyResume'
import DownloadIcon from './icons/DownloadIcon'
import { resume } from '../lib/mockData'

const DownloadResume = () => {
  // An async function that generates a PDF of the resume and triggers a download.
  const downloadPdf = async () => {
    const blob = await pdf(<MyResume resume={resume} />).toBlob()
    saveAs(blob, 'CV_Matahi_FAREEA.pdf')
  }

  return (
    <div>
      {/* Mobile button (visible on small screens) to download the resume. Uses an icon as the button's content. */}
      <button className="block md:hidden" onClick={downloadPdf}>
        <DownloadIcon className="w-11 h-11 dark:hover:text-amber-500 hover:text-indigo-300" />
      </button>
      {/* Desktop button (hidden on small screens) to download the resume. Uses text as the button's content. */}
      <button className="hidden md:block" onClick={downloadPdf}>
        Télécharger mon CV
      </button>
    </div>
  )
}

export default DownloadResume
