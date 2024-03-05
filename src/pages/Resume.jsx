import resume from '../assets/resume.pdf';
import React from 'react';

export default function Resume() {
  const styles = {
    font: {
      fontSize: 'calc(1.75rem + 1.25vw)'
    },
    pdf: {
      marginBottom: '20px',
      height: '800px'
    },
    title: {
      fontSize: 'calc(1rem + .5vw)'
    },
    list: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      fontSize: 'calc(.5rem + .5vw)',
      color: 'black',
      textDecoration: 'none',
  }
  }  
  
  return (
      <div>
        <h1 className="d-flex justify-content-center" style={styles.font}>Resume</h1>

        <div className="card col-md-8 my-3 mx-auto border p-2 shadow">
          <h2 className="card-header" style={styles.title}>Dev Proficiencies</h2>
          <ul className="mt-1 p-0" style={styles.list}>
            <li style={styles.list}>HTML5</li>
            <li style={styles.list}>CSS</li>
            <li style={styles.list}>JavaScript</li>
            <li style={styles.list}>jQuery</li>
            <li style={styles.list}>Node.js</li>
            <li style={styles.list}>API</li>
            <li style={styles.list}>Bootstrap</li>
            <li style={styles.list}>JSON</li>
            <li style={styles.list}>Express.js</li>
            <li style={styles.list}>MySQL</li>
            <li style={styles.list}>NoSQL</li>
            <li style={styles.list}>React.js</li>
            <li style={styles.list}>MERN</li>
          </ul>
        </div>
        
        <div className='card col-md-8 my-3 mb-4 mx-auto border p-2 shadow' style={styles.pdf}>
          <iframe src={resume} style={styles.pdf}/>
        </div>
      </div>
    );
  }
  