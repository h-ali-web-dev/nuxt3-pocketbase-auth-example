import PocketBase from 'pocketbase';
import colors from "colors";

const pb = new PocketBase('http://127.0.0.1:8090');

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body)
    try {

        const authData = await pb.collection('users').authWithPassword(body.username, body.password);
        console.log(colors.cyan(` user id: ${authData.record.id}`))
        console.log(colors.green(` user validated: ${pb.authStore.isValid}`));
        console.log(colors.yellow(` user auth token: ${pb.authStore.token}`));
    } catch (error) {
        throw createError({
            statusCode: 404,
            statusMessage: error as string,
        })
        return {
            "err": error
        }
    }

    // this is not necessary for this application
    pb.authStore.onChange((auth) => { console.log("auth changed ", auth); })

    pb.authStore.save(pb.authStore.token, pb.authStore.model);

    setCookie(event, 'authTokenPB', pb.authStore.token);
    pb.authStore.clear();

    return {
        "token": pb.authStore.token,
    }
})