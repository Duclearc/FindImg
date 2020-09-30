<template>
  <form @submit.prevent="search">
    <div>
      <input type="text" v-model="query" placeholder="Cat pictures" />
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchField",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      const searchTerm = this.query;
      if (searchTerm.length < 1) return;
      this.images = [];
      const API_URL = `https://pixabay.com/api/?key=${process.env.VUE_APP_API_KEY.replace(
        "_",
        "-"
      )}&q=${searchTerm.replace(/ /g, "+")}`;
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          const info = {
            images: data.hits,
            total: data.total,
            query: searchTerm,
          };
          this.$emit("set-images", info);
        });
      this.query = "";
    }
  }
};
</script>

<style scoped>
</style>