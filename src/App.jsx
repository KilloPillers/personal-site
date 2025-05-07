import { Divider } from '@mui/material';
import './App.css';
import HeaderProfile from './HeaderProfile.jsx'
import Banner from './Banner.jsx';

const App = () => {
  return (
      <div style ={{ position: 'relative', width: '100vw', height: '100vh', color: 'midnightblue'}}>
        <Banner/>
        <HeaderProfile/>
        <Divider/>
      </div>
  );
};

export default App;
