import resume from '../assets/resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <p>
          Add in downloadable resume here
        </p>
        <Document
          file={resume}
          onLoadError={console.error}
          style={{ width: "100vw", height: 'auto'}}
        >
          <Page pageIndex={0}/>
        </Document>
      </div>
    );
  }
  