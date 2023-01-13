import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default defineEventHandler(async (event) => {
    const cookie: any = getCookie(event, 'authTokenPB');
    console.log(`got cookie ${cookie}`);
    pb.authStore.save(cookie, pb.authStore.model);
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
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
    console.log(cars)
    return {
        "cars": cars,
    }
})