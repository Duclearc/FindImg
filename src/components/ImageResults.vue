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
    <h2 id="resultsTitle">Results for "{{query}}"</h2>
    <p>Showing {{images.length}} out of {{total}} images</p>
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