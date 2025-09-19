import { defineStore } from 'pinia';

interface User {
    name: string;
}

export const useUserStore = defineStore('userStore', () => {
    const user: Ref<null | User> = useState('user', () => null);

    return {
        user,
    };
});
