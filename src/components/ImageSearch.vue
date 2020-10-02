<template>
  <div id="ImageSearch">
    <SearchField @set-images="setImages" @set-loading="setLoading" />
    <img v-if="loading" class="spinner" src="./../assets/loading.gif" alt="loading spinner" />
    <ImageResults v-if="!loading && query" :images="images" :total="totalFound" :query="query" />
    <Pagination
      v-if="!loading && totalFound > 0"
      @set-images="setImages"
      @set-loading="setLoading"
      :query="query"
    />
  </div>
</template>

<script>
import SearchField from "./SearchField";
import ImageResults from "./ImageResults";
import Pagination from "./Pagination";

export default {
  name: "ImageSearch",
  components: {
    SearchField,
    ImageResults,
    Pagination
  },
  data: () => ({
    images: [],
    totalFound: 0,
    query: "",
    loading: false
  }),
  methods: {
    setLoading(e) {
      this.loading = e;
    },
    setImages(e) {
      this.images = e.images;
      this.totalFound = e.total;
      this.query = e.query || this.query;
    }
  }
};
</script>

<style>
#ImageSearch {
  padding: 0 5%;
}
button {
  background-color: #999;
  color: #000;
  font-size: 1.3rem;
}
input {
  font-size: 1.5rem;
}
.spinner {
  max-width: 10vh;
  border: 0;
  padding-bottom: 3vh;
}
</style>
