import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default defineEventHandler(async (event) => {
    deleteCookie(event, 'authTokenPB');
    console.log("user logged out");
    // "logout" the last authenticated model
    pb.authStore.clear();
    return {
        "status": "user logged out",
    }
})

