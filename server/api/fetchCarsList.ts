import PocketBase from 'pocketbase';
import colors from "colors";


const pb = new PocketBase('http://127.0.0.1:8090');

export default defineEventHandler(async (event) => {
    const cookie: any = getCookie(event, 'authTokenPB');
    if (cookie) {

        console.log(colors.bold.yellow("recieved user cookie: ") + colors.yellow(cookie));
        pb.authStore.save(cookie, pb.authStore.model);
        console.log("user is valid: ".america + pb.authStore.isValid);
        console.log(colors.bold("authstore token:") + colors.bgYellow(pb.authStore.token));
    }
    else {
        console.log(colors.red(`No cookie found, only found ${cookie}`));
    }
    try {
        // get an up-to-date auth store state by veryfing and refreshing the loaded auth model (if any)
        pb.authStore.isValid && await pb.collection('users').authRefresh();
    } catch (_) {
        // clear the auth store on failed refresh
        pb.authStore.clear();
    }
    const cars: any = await pb.collection('carList').getFullList(200, {
        sort: '-created',
    });
    // console.log(cars)
    return {
        cars,
    }
})