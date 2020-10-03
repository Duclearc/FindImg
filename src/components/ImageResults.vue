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
    <div class="imgList">
      <img v-for="image in images" :key="image.id" :src="image.previewURL" :alt="image.tags" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["images", "total", "query"]
};
</script>

<style>
.imgList {
  column-count: 3;
}
@media(max-width: 1204px) {
  .imgList {
    column-count: 2;
  }
}
@media(max-width: 800px) {
  .imgList {
    column-count: 1;
  }
}
iframe {
  margin-top: 20px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #999;
  width: 50%;
}
img {
  border: solid 2px #999;
  border-radius: 20px;
}
</style>