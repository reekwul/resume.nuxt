import { defineStore } from "pinia";
import type { AvatarProps } from "primevue";

interface User{
    name: string,
    avatar: AvatarProps 
}

export const useUserStore = defineStore('userStore', ()=>{
    const user:Ref<null | User> = useState("user", ()=>(null))


    return {
        user
    }
})