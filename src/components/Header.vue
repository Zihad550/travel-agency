<template>
  <div id="nav">
    <router-link to="/"> Travel Agency </router-link>
    <router-link
      :to="{ name: 'Destination', params: { name: destination.name } }"
      v-for="destination in destinations"
      :key="destination.id"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import data from "../data.json";

export default {
  name: "Header",
  data() {
    return {
      destinations: data.destinations,
    };
  },
};
</script>
