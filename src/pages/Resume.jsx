import resume from '../assets/resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Resume() {
  const styles = {
    font: {
      fontSize: 'calc(1.75rem + 1.25vw)'
    }
  }  
  
  return (
      <div>
        <h1 className="d-flex justify-content-center" style={styles.font}>Resume</h1>
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
  