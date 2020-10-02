<template>
  <div id="pagination">
    <button :disabled="page==1" @click="previous">Previous</button>
    <span class="spacer" />
    <button :disabled="page==lastPage" @click="next">Next</button>
  </div>
</template>

<script>
import APIquery from "./../assets/api";
export default {
  props: ["query"],
  data: () => ({ page: 1, totalImages: 15, lastPage: 10 }),
  methods: {
    loadPage() {
      APIquery(this.query, this.page)
        .then(data => {
          this.$emit("set-images", {
            images: data.hits,
            total: data.totalHits,
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
        });
    },
    next() {
      if (this.page++ <= this.lastPage) {
        this.page++;
        this.loadPage();
      }
    },
    previous() {
      if (this.page--) {
        this.page--;
        this.loadPage();
      }
    },
    setLastPage() {
      console.log("last page set", this.lastPage);
    }
  }
};
</script>

<style>
#pagination {
  display: flex;
}
#pagination button {
  margin-top: 10px;
}
#pagination button:disabled,
#pagination button:disabled:hover {
  margin-top: 10px;
  opacity: 50%;
  border: 0;
  color: #000;
}
.spacer {
  flex-grow: 1;
}
</style>