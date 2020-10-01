<template>
  <div id="ImageSearch">
    <SearchField @set-query="setQuery" />
    <img v-if="loading" class="spinner" src="./../assets/loading.gif" alt="loading spinner" />
    <ImageResults v-if="!loading && query" :images="images" :total="totalFound" :query="query" />
    <Pagination v-if="!loading && totalFound > 0" @set-page="setPage" />
  </div>
</template>

<script>
import APIquery from "./../assets/api";
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
  data() {
    return {
      images: [],
      totalFound: 0,
      query: "",
      loading: false,
      page: 1
    };
  },
  methods: {
    setLoading() {
      this.loading = !this.loading;
    },
    setQuery(e) {
      this.query = e;
      this.search();
    },
    setImages(i) {
      this.images = i.images;
      this.totalFound = i.total;
      this.query = i.query;
    },
    setPage(e) {
      this.page = e;
    },
    search() {
      const searchTerm = this.query;
      if (searchTerm.length < 1) return;
      this.setLoading();
      this.images = [];
      APIquery(searchTerm)
        .then(data => {
          const info = {
            images: data.hits,
            total: data.totalHits,
            query: searchTerm
          };
          this.setImages(info);
        })
        .catch(err => {
          this.setImages(null);
          console.log(err);
          alert("Ops. Something went wrong. Please reload and try again");
        })
        .finally(() =>
          setTimeout(() => {
            this.setLoading();
          }, 300)
        );
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
