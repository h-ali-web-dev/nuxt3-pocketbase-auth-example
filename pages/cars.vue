<template>
  <div>
    <div class="font-extralight">
      The data will not be fetched until the user is logged in. <br />
      press "refresh" to refetch data.
    </div>
    <div class="bg-red-400" v-if="error">
      <span class="underline">Errors</span>
      {{ error.message }}
    </div>
    <div v-else>
      <div>
        <div class="bg-blue-300 flex justify-around">
          fetch pending state:{{ pending }}
          <button @click="refresh" class="border rounded p-1 bg-slate-200">refresh</button>
        </div>
      </div>
      <div>
        <div class="text-3xl underline">Cars List</div>
        <div v-for="car in data?.cars">
          <div>
            <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100">
              <img
                class="object-cover w-full rounded-t-lg h-32 md:w-56 md:rounded-none md:rounded-l-lg"
                :src="`http://127.0.0.1:8090/api/files/${car.collectionId}/${car.id}/${car.pic}`"
                alt="car picture"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ car.manufacturer }}</h5>
                <p class="mb-3 font-normal text-gray-700">Model: {{ car.modelYear }}</p>
                <p :class="`mb-3 font-normal text-${car.color}-600`">Color: {{ car.color }}</p>
                <p class="mb-3 font-normal text-gray-700">{{ car.available ? "available" : "not available" }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="text-3xl underline">Returned Data:</div>
        <pre>
            {{ data }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/userStore";
const userS = userStore();
userS.checkToken();

// useState("logged_state", () => (useCookie("authTokenPB") ? "logged_in" : "logged_out"));
const { data, refresh, error, pending } = await useFetch("/api/fetchCarsList", { method: "GET" });
</script>
