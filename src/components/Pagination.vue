<template>
  <div id="pagination">
    <button :disabled="page==1" @click="previous">Previous</button>
    <span class="spacer" />
    <button :disabled="page==lastPage" @click="next">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      lastPage: 10
    };
  },
  methods: {
    next() {
      if (this.page + 1 <= this.lastPage) {
        this.page++;
        this.$emit("set-page", this.page);
      }
    },
    previous() {
      if (this.page - 1) {
        this.page--;
        this.$emit("set-page", this.page);
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