import { createContext, useState, useContext } from 'react';

interface UserContextValue {
  username: string;
  fullName: string;
  avatar: string;
  email: string;
  about: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAbout: React.Dispatch<React.SetStateAction<string>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextValue>({
  username: '',
  fullName: '',
  avatar: '',
  email: '',
  about: '',
  setUsername: () => {},
  setFullName: () => {},
  setAvatar: () => {},
  setEmail: () => {},
  setAbout: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [about, setAbout] = useState('');

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        fullName,
        setFullName,
        avatar,
        setAvatar,
        email,
        setEmail,
        about,
        setAbout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
