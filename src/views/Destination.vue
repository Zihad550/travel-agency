<template>
  <div class="container">
    <div class="destination" v-if="destination">
      <img :src="`/images/${destination.image}`" alt="" />
      <h1>{{ destination.name }}</h1>
      <p>
        {{ destination.description }}
      </p>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "Destination",
  props: {
    name: String,
  },

  data() {
    return {
      destination: null,
    };
  },

  computed: {
    image() {
      return `../assets/images/${this.destination.image}`;
    },
  },

  mounted() {
    this.destination = data.destinations.find(
      (destination) => destination.name === this.name
    );
  },
  updated() {
    this.destination = data.destinations.find(
      (destination) => destination.name === this.name
    );
  },
};
</script>

<style scoped>
.destination {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
