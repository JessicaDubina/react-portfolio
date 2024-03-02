import Nav from '../Nav'

const Header = () => {
    return (
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h1 className="m-0">Jessica Dubina</h1>
          <Nav />
        </div>
      </header>
    );
  };
  
  export default Header;