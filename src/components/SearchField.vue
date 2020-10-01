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
      this.$emit("set-query", this.query);
      this.query = "";
    }
  }
};
</script>