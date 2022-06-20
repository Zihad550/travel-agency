<template>
  <div id="nav">
    <router-link to="/"> Travel Agency </router-link>
    <router-link
      :to="{ name: 'Destination', params: { name: destination.slug } }"
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

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
#nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  transition: 0.2 ease color;
}
#nav a.router-link-active,
#nav a:hover {
  opacity: 1;
}
</style>
