<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
            style="--darkreader-inline-stroke: currentColor"
            data-darkreader-inline-stroke=""
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Company Name</span>
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
