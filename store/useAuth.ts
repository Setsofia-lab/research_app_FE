import axios from 'axios';
import { create } from 'zustand';
import instance from './utils/axiosInstance';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}
type CartStore = {
  authenticated: boolean;
  token: string;
  setToken: (args: { token: string; authenticated?: boolean; loading: boolean }) => void;
  loading: boolean;
  login: (args: { email: string; password: string }) => void;
  logout: () => void;
  signup: (args: SignUpProps) => void;
};

export const useAuth = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        authenticated: false,
        loading: false,
        token: '',
        setToken({ token, authenticated, loading }) {
          cookies.set('sessionToken', token, { path: '/' });
          cookies.set('authenticated', true, { path: '/' });
          set({ token, authenticated, loading });
        },
        logout() {
          cookies.set('sessionToken', '', { path: '/' });
          cookies.set('authenticated', false, { path: '/' });
          set({ token: '', authenticated: false, loading: false });
          window.location.href = '/auth/login';
        },
        login: async (data) => {
          set({ loading: true });
          return instance.post('user/token/', data);
        },
        signup: async (data) => {
          return instance.post('user/create/', data);
        },
      }),
      {
        name: 'auth-sys',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
