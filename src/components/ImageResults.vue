<template>
  <section v-if="images.length < 1">
    <h2>There were no results for "{{query}}"</h2>
    <p>Try searching for something else</p>
    <iframe
      src="https://giphy.com/embed/3oEduTObiUMV3vD69y"
      width="100%"
      height="100%"
      allowfullscreen
    />
  </section>
  <section v-else>
    <h2 id="resultsTitle">{{total}} "{{query}}" Images Found</h2>
    <div id="imageList">
      <vue-load-image>
        <img
          v-for="image in images"
          slot="image"
          class="imagePreview"
          :key="image.id"
          :src="image.previewURL"
          :alt="image.tags"
          @click="showLarger(image)"
        />
        <img
          slot="preloader"
          class="largeImagePreview spinner"
          src="./../assets/loading.gif"
          alt="loading spinner"
        />
        <div slot="error">IMAGE UNAVAILABLE</div>
      </vue-load-image>
      <div id="largeImageBox" v-if="showLarge" @click="showLarge=false">
        <span class="hideImage" @click="showLarge=false">X</span>
        <span class="helper"></span>
        <div id="imageActions" class="largeImagePreview">
          <a id="credits" :href="creatorPage">by {{creatorName}}</a>
          <a :href="downloadLink">
            <vue-load-image>
              <img
                slot="image"
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
    </div>
  </section>
</template>

<script>
import VueLoadImage from "vue-load-image";
export default {
  props: ["images", "total", "query"],
  components: {
    "vue-load-image": VueLoadImage,
  },
  data: () => ({
    showLarge: false,
    imageDescription: "",
    largerImageURL: "",
    downloadLink: "",
    creatorName: "",
    creatorPage: "",
  }),
  methods: {
    showLarger(image) {
      this.largerImageURL = image.largeImageURL;
      this.imageDescription = `${image.tags} image`;
      this.downloadLink = `https://pixabay.com/images/download/${
        image.tags.split(",")[0]
      }-${image.id}_1280.jpg?attachment`;
      this.creatorName = image.user;
      this.creatorPage = `https://pixabay.com/users/${image.user.toLowerCase()}-${
        image.user_id
      }/`;
      this.showLarge = true;
    },
  },
};
</script>

<style>
#imageList {
  column-count: 1;
}
@media (min-width: 550px) {
  #imageList {
    column-count: 2;
  }
}
@media (min-width: 750px) {
  #imageList {
    column-count: 3;
  }
}
@media (min-width: 1200px) {
  #imageList {
    column-count: 4;
  }
}
iframe {
  margin-top: 20px;
  border-radius: 20px;
  border-width: 2px;
  border-color: rgba(153, 153, 153, 1);
  width: 50%;
}
img {
  border: solid 2px rgba(153, 153, 153, 1);
  border-radius: 20px;
}
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
#credits {
  font-style: italic;
  text-decoration: none;
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