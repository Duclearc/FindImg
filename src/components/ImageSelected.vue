<template>
  <div id="largeImageBox">
    <span class="hideImage" @click="hideImage">X</span>
    <span class="helper"></span>
    <div id="imageActions" class="largeImagePreview">
      <a id="credits" :href="creatorPage">by {{creatorName}}</a>
      <a :href="downloadLink" id="downloadLink">
        <vue-load-image>
          <img
            slot="image"
            id="largeImage"
            title="Click to Download"
            class="largeImagePreview"
            :src="this.largerImageURL"
            :alt="imageDescription"
          />
          <img
            slot="preloader"
            class="largeImagePreview spinner"
            src="./../assets/loading.gif"
            alt="loading spinner"
          />
          <div slot="error">IMAGE UNAVAILABLE</div>
        </vue-load-image>
      </a>
    </div>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";
export default {
  props: [
    "imageDescription",
    "largerImageURL",
    "downloadLink",
    "creatorName",
    "creatorPage"
  ],
  components: {
    "vue-load-image": VueLoadImage
  },
  methods: {
    hideImage() {
      this.$emit("show-larger", false);
    }
  }
};
</script>

<style>
#largeImageBox {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
  white-space: nowrap;
}
.largeImagePreview {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  z-index: 2;
  font-size: 2rem;
  text-align: end;
  color: rgba(255, 255, 255, 1);
}
#largeImage:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 1);
}
#credits {
  font-style: italic;
  text-decoration: none;
  color: inherit;
}
#credits:hover {
  font-style: italic;
  text-decoration: underline;
  color: inherit;
}
.hideImage {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
}
.helper {
  display: inline-block;
  height: 10%;
  vertical-align: middle;
}
.spinner {
  max-width: 10vh;
  border: 0;
}
</style>