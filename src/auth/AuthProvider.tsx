import type { ReactNode, VFC } from 'react';
import React, { createContext, useEffect, useState } from 'react';

import { AUTH } from '@/common/constants/api';
import type { User } from '@/store/StoreTypes';
import client from '@/utilities/api';

interface AuthContextProps {
  currentUser: User | null | undefined;
  login: (token) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  login: () => undefined,
  logout: () => undefined,
});

type Props = {
  children?: ReactNode;
};

const AuthProvider: VFC = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<AuthContextProps>();
  const [token, setToken] = useState<AuthContextProps>();
  const [loading, setLoading] = useState(true);
  const fetchCurrentUser = async () => {
    try {
      const { data = {} } = await client.mutate({
        mutation: AUTH,
        variables: {
          token,
        },
      });
      setCurrentUser({ ...data.auth, token });
      setLoading(false);
    } catch (errors) {
      // console.log(errors)
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  });

  useEffect(() => {
    if (!token) {
      setCurrentUser(null);
    }
    (async () => {
      await fetchCurrentUser();
    })();
  }, [token]);

  if (loading) {
    return <>Loading...</>;
  }

  console.log(currentUser);

  const login = (token) => {
    setLoading(true);
    setToken(token);
    console.log(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
