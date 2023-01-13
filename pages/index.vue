<template>
  <div>
    {{ useState("logged_state") }}
    <div>
      <div class="mx-auto justify-center">
        <form>
          <div class="mb-6">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Your username</label>
            <input
              type="text"
              id="username"
              v-model.lazy="userName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input
              type="password"
              id="password"
              v-model.lazy="passWord"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </form>
      </div>
      <button
        @click="result"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        LogIn
      </button>
    </div>
    <div>
      <button
        @click="LogOutFn"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useState("logged_state", () => (useCookie("authTokenPB") != null ? "logged_in" : "logged_out"));
const userName = ref("");
const passWord = ref("");
const result = async function sendData() {
  console.log("login function entered");
  const res = await useFetch("/api/CheckUserStatus", {
    method: "post",
    body: {
      username: userName.value,
      password: passWord.value,
    },
    lazy: true,
  });
  if (res.data) {
    useState("logged_state", () => (res.data.value ? "logged_in" : "logged_out"));
  }
  return res;
};

const LogOutFn = async () => {
  const result = await useFetch("/api/UserLogOut");
  console.log(result.data.value?.status);
  useState("logged_state", () => "logged_out");
};
</script>
