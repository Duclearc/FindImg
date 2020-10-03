<template>
  <form @submit.prevent="setQuery">
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
    setQuery() {
      if (this.query.length < 1) return;
      this.images = [];
      this.$emit("set-query", this.query);
      this.query = "";
    }
  }
};
</script>