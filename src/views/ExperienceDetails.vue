<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>
<script>
import sourceData from "../data.json";
export default {
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
  },
  computed: {
    destination() {
      console.log(this.$props);
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.name
      );
    },
  },
};
</script>
