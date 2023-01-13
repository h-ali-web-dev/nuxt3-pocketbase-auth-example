import { defineStore } from "pinia";

export const userStore = defineStore("counter", {
    state: () => ({
        userLoggedIn: false,
    }),

    getters: {
        userloginState: (state) => state.userLoggedIn,
    },

    actions: {
        setloginState(state: boolean) {
            this.userLoggedIn = state;
        },
    },
});
