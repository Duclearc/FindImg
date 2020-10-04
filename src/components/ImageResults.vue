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
        <img slot="preloader" class="spinner" src="./../assets/loading.gif" alt="loading spinner" />
        <div slot="error">IMAGE UNAVAILABLE</div>
      </vue-load-image>
      <image-selected
        v-if="showLarge"
        :imageDescription="imageDescription"
        :largerImageURL="largerImageURL"
        :downloadLink="downloadLink"
        :creatorName="creatorName"
        :creatorPage="creatorPage"
        @show-larger="setShowLarge"
      />
    </div>
  </section>
</template>

<script>
import VueLoadImage from "vue-load-image";
import ImageSelected from "./ImageSelected";
export default {
  props: ["images", "total", "query"],
  components: {
    "vue-load-image": VueLoadImage,
    "image-selected": ImageSelected
  },
  data: () => ({
    showLarge: false,
    imageDescription: "",
    largerImageURL: "",
    downloadLink: "",
    creatorName: "",
    creatorPage: ""
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
    setShowLarge(e) {
      this.showLarge = e;
    }
  }
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
.spinner {
  max-width: 10vh;
  border: 0;
}
</style>