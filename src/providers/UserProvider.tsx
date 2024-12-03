import React, {
  createContext, useState, useContext, useMemo,
} from 'react';
import { User } from '@/types/user';

interface CurrentUserContextType {
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      isLoggedIn,
      setIsLoggedIn,
    }),
    [currentUser, isLoggedIn],
  );

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error('useUser는 UserProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};
