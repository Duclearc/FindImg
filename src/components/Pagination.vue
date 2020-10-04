<template>
  <div id="pagination" v-if="lastPage > 1">
    <button :disabled="page==1" @click="previous">Previous</button>
    <span class="spacer">
      <p>{{page}} of {{lastPage}}</p>
    </span>
    <button :disabled="page==lastPage" @click="next">Next</button>
  </div>
</template>

<script>
export default {
  props: ["query", "totalImages", "page"],
  data: () => ({
    lastPage: 1,
    resultsPerPage: 20,
  }),
  methods: {
    next() {
      let page = this.page;
      if (page++ <= this.lastPage) {
        this.$emit("set-page", page);
      }
    },
    previous() {
      let page = this.page;
      if (page--) {
        this.$emit("set-page", page);
      }
    },
  },
  mounted() {
    this.lastPage = Math.round(this.totalImages / this.resultsPerPage);
  },
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
  color: rgba(0,0,0,1);
}
.spacer {
  flex-grow: 1;
  position: relative;
  top: 15px;
}
</style>