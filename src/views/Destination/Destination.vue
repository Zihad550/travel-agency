<template>
  <div>
    <section class="container">
      <div class="destination" v-if="destination">
        <img :src="`/images/${destination.image}`" alt="" />
        <h1>{{ destination.name }}</h1>
        <p>
          {{ destination.description }}
        </p>
        <section class="experiences">
          <h2>Top Experiences in {{ destination.name }}</h2>
          <div class="cards">
            <router-link
              v-for="experience in destination.experiences"
              :key="experience.slug"
              :to="{
                name: 'ExperienceDetails',
                params: { name: experience.slug, id: destination.id },
              }"
            >
              <Experience :experience="experience" />
            </router-link>
          </div>
          <router-view />
        </section>
      </div>
      <div v-else>loading...</div>
    </section>
  </div>
</template>

<script>
import Experience from "./Experience/Experience.vue";
export default {
  name: "Destination",
  components: {
    Experience,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      destination: null,
    };
  },

  methods: {
    async fetchData() {
      await fetch(`https://travel-dummy-api.netlify.app/${this.name}`)
        .then((res) => res.json())
        .then((data) => (this.destination = data));
    },
  },

  created() {
    this.fetchData();
    // this.$watch(() => this.name, this.fetchData);
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
