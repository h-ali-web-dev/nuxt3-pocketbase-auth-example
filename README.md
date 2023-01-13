# Nuxt 3 PocketBase Simple Auth test

This project sets the cookies from token recived from pocketbase and uses the token to authenticate routes.
LogIn sets the cookie 'authTokenPB' in the browser. and logOut deletes the cookie and clears the pb.authstore.

if you are not logged in the /cars route will not return any data even after pressing the refresh button.
After login, the function works as expected and returns the list of data.

## Things that are not working

- useState is not propoerly working
- proper auth test is not implemented on pocketbase admin UI

## installation

add the "pocketbase" exe file in the root directory of this project and use either "./pocketbase serve" command or the 'servePocketBase' script in package.json.
