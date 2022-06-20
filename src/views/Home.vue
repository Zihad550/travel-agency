<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
        :to="{ name: 'Destination', params: { name: destination.name } }"
        v-for="destination in destinations"
        :key="destination.id"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "HomeView",
  data() {
    return {
      destinations: data.destinations,
    };
  },
};
</script>

<style scoped>
/* Home */
.home {
  /* margin: 20px; */
  padding: 20px;
}

.home h1 {
  text-align: center;
  border-bottom: 2px solid black;
  width: max-content;
  margin: 15px auto;
}
.home img {
  max-width: 230px;
}
.home .destinations {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
