import { defineStore } from "pinia";

export const userStore = defineStore("counter", {
    state: () => ({
        userLoggedIn: useCookie('authTokenPB') ? true : false,
    }),

    getters: {
        userloginState: (state) => state.userLoggedIn,
    },

    actions: {
        setloginState(state: boolean) {
            this.userLoggedIn = state;
        },
        checkToken() {
            this.userLoggedIn = useCookie('authTokenPB') ? true : false;
        }
    },
});
