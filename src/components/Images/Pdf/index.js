import resume from '../assets/resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFViewer } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    document: {
        width: '100vw',
        height: 'auto',
    }
  });

export default function Pdf() {
    return (
        <PDFViewer>
            <Document
            file={resume}
            onLoadError={console.error}
            style={styles.document}
            >
            <Page pageIndex={0} style={styles.page}/>
            </Document>
        </PDFViewer>
    );
  }
  