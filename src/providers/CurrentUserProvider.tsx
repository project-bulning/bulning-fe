import React, {
  createContext, useState, useContext, useMemo, useEffect, ReactNode,
} from 'react';
import { User } from '@/types/user';
import { tokenStorage } from '@/utils/tokenStorage';
import { getMyInfo } from '@/api/user';
import { checkAndUpdateFcmToken, initForegroundMessageListener } from '@/api/firebase/firebaseCloudMessage';

interface CurrentUserContextType {
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(undefined);

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = tokenStorage.get();
    if (token) {
      getMyInfo()
        .then((data) => {
          setCurrentUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error('Failed to fetch user info:', error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      checkAndUpdateFcmToken();
      initForegroundMessageListener();
    }
  }, [isLoggedIn]);

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
    throw new Error('useUser는 CurrentUserProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};
