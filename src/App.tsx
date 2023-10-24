import { Outlet } from 'react-router-dom';
import { UiProvider } from './contexts/UiContext';
import { UserProvider } from './contexts/UserContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <UserProvider>
      <UiProvider>
        <Header />
        <Outlet />
        <Footer />
      </UiProvider>
    </UserProvider>
  );
};

export default App;
