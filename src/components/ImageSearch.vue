<template>
  <div id="ImageSearch">
    <SearchField @set-query="setQuery" />
    <img v-if="loading" class="spinner" src="./../assets/loading.gif" alt="loading spinner" />
    <ImageResults v-if="!loading && query" :images="images" :total="totalFound" :query="query" />
    <Pagination
      v-if="!loading && totalFound > 0"
      @set-page="setPage"
      :query="query"
      :page="page"
      :totalImages="totalFound"
    />
  </div>
</template>

<script>
import SearchField from "./SearchField";
import ImageResults from "./ImageResults";
import Pagination from "./Pagination";
import APIquery from "./../assets/api";

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
    loading: false,
    page: 1
  }),
  methods: {
    setLoading(e) {
      this.loading = e;
    },
    setQuery(e) {
      this.query = e;
      this.page = 1;
      this.loadPage();
    },
    setImages(e) {
      this.images = e.images;
      this.totalFound = e.total;
    },
    setPage(e) {
      this.page = e;
      this.loadPage();
    },
    loadPage() {
      this.setLoading(true);
      APIquery(this.query, this.page)
        .then(data => {
          this.setImages({
            images: data.hits,
            total: data.totalHits
          });
        })
        .catch(err => {
          this.setImages(null);
          console.log(err);
          alert("Ops. Something went wrong. Please reload and try again");
        })
        .finally(() => {
          setTimeout(() => {
            this.setLoading(false);
          }, 300);
        });
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
