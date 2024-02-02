import axios from 'axios';
import { create } from 'zustand';
import instance from './utils/axiosInstance';
import { redirect } from 'next/navigation';

type CartStore = {
  authenticated: boolean;
  loading: boolean;
  login: (args: { email: string; password: string }) => void;
  signin: () => void;
};

export const useAuth = create<CartStore>((set) => ({
  authenticated: false,
  loading: false,
  login: async (data) => {
    set({ loading: true });
    try {
      const response = await instance.post('api/authenticate', data);
      set({ authenticated: true });
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },
  signin: () => {},
}));
