<template>
  <section>
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
  column-count: 4;
}
img {
  border: solid 2px #000;
  border-radius: 20px;
}
#resultsTitle {
    padding-top: 10px;
}

</style>