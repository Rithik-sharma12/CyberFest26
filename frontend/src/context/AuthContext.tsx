/**
 * Authentication Context
 * 
 * Provides auth state and methods throughout the app.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { authService, tokenStorage } from '@/services';
import type { User, LoginFormData, SignupFormData } from '@/types/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginFormData) => Promise<void>;
  signup: (data: SignupFormData) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  // Load user on mount if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (tokenStorage.getAccessToken()) {
        try {
          const userData = await authService.getProfile();
          setUser(userData);
        } catch (error) {
          // Token invalid, clear it
          tokenStorage.clearTokens();
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const login = useCallback(async (data: LoginFormData) => {
    const response = await authService.login(data);
    const userData = await authService.getProfile();
    setUser(userData);
    return response;
  }, []);

  const signup = useCallback(async (data: SignupFormData) => {
    const response = await authService.register(data);
    setUser(response.user);
    return response;
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
      navigate('/login');
    }
  }, [navigate]);

  const refreshUser = useCallback(async () => {
    if (tokenStorage.getAccessToken()) {
      const userData = await authService.getProfile();
      setUser(userData);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        signup,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
