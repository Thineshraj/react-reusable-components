import logo from '../../assets/logo.svg';
import './Home.css';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>React reusable Components</p>
        <a
          className='App-link'
          href='https://github.com/Thineshraj/react-reusable-components'
          target='_blank'
          rel='noopener noreferrer'
        >
          Go to Repository
        </a>
      </header>
    </div>
  );
};

export default Home;
