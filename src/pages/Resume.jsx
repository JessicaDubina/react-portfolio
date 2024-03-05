import resume from '../assets/resume.pdf';
import React from 'react';

export default function Resume() {
  const styles = {
    font: {
      fontSize: 'calc(1.75rem + 1.25vw)'
    },
    pdf: {
   
      height: '800px'
    }
  }  
  
  return (
      <div>
        <h1 className="d-flex justify-content-center" style={styles.font}>Resume</h1>
        <div className='card col-md-8 my-3 mx-auto border p-2 shadow' style={styles.pdf}>
          <iframe src={resume} style={styles.pdf}/>
        </div>
      </div>
    );
  }
  