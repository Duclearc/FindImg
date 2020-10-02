<template>
  <form @submit.prevent="search">
    <div>
      <input type="text" v-model="query" placeholder="Cat pictures" />
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script>
import APIquery from "./../assets/api";
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
      this.$emit("set-loading", true);
      this.images = [];
      APIquery(searchTerm)
        .then(data => {
          this.$emit("set-images", {
            images: data.hits,
            total: data.totalHits,
            query: searchTerm
          });
        })
        .catch(err => {
          this.$emit("set-images", null);
          console.log(err);
          alert("Ops. Something went wrong. Please reload and try again");
        })
        .finally(() => {
          setTimeout(() => {
            this.$emit("set-loading", false);
          }, 300);
          this.query = "";
        });
    }
  }
};
</script>