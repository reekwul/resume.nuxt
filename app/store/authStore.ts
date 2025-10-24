import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
  const isAuth = useState('isAuth', () => false);

  return {
    isAuth,
  };
});
