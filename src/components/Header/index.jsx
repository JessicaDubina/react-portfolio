import Nav from '../Nav'

const styles = {
  headerbar: {
    display: "flex",
    backgroundColor: '#2C505E',  
  },
  font: {
    fontSize: 'calc(2.5rem + 1.25vw)'
  }
}

const Header = () => {
    return (
      <header className="text-light mb-4 py-3 flex-row align-center" style={styles.headerbar}>
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h1 className="m-0 align-self-end" style={styles.font}>Jessica Dubina</h1>
          <Nav />
        </div>
      </header>
    );
  };
  
  export default Header;
