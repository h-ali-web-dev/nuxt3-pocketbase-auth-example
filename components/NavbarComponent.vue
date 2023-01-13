<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Nuxt3 pocketbase auth example</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <!-- <NuxtLink to="/newPocket" class="mr-5 hover:text-gray-900">PocketBase Example</NuxtLink>
					<NuxtLink to="/CreateUserForm" class="mr-5 hover:text-gray-900">Create New User</NuxtLink> -->
          <NuxtLink to="/cars" class="mr-5 hover:text-gray-900">Car Details</NuxtLink>
          <NuxtLink to="/" class="mr-5 hover:text-gray-900">Log In Page</NuxtLink>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          {{ userS.userloginState ? "logged In" : "logged out" }}
        </button>
      </div>
    </header>
  </div>
</template>
<script setup lang="ts">
import { userStore } from "@/stores/userStore";
const userS = userStore();
</script>
