import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
