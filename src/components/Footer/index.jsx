import { Link } from 'react-router-dom';

const styles = {
    footer: {
      backgroundColor: '#f8f8f8', 
      position: 'fixed',
      left: '0',
      bottom: '0',
      right: '0'
    },
    list: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        fontSize: 'calc(.5rem + .5vw)',
        color: 'black',
        textDecoration: 'none'
    }
  }

  const github = 'https://github.com/JessicaDubina'
  const linkedin = 'https://www.linkedin.com/in/jessica-dubina-78749939/'
  const facebook = 'https://www.facebook.com/jessica.dubina.5'
  
  const Footer = () => {
      return (
        <footer className="d-flex w-100 mt-4 px-4 pt-1" style={styles.footer}>

            <ul className="d-md-inline-flex" style={styles.list}>
                <li className="nav-link">
                    <Link to={github} className='nav-link'>Github</Link>
                    </li>
                <li className="nav-link">
                    <Link to={linkedin} className='nav-link'>LinkedIn</Link>
                    </li>
                <li className="nav-link">
                    <Link to={facebook} className='nav-link'>Facebook</Link>
                    </li>
            </ul>

        </footer>
      );
    };
    
    export default Footer;
  