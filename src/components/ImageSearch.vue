<template>
  <div id="ImageSearch">
    <SearchField @set-images="setImages"/>
    <ImageResults v-if="totalFound > 0" :images="images" :total="totalFound" :query="query" />
  </div>
</template>

<script>
import SearchField from './SearchField';
import ImageResults from './ImageResults';

export default {
  name: 'ImageSearch',
  components: {
    SearchField,
    ImageResults
  },
  data() {
    return {
      images: [],
      totalFound: 0,
      query: '',
    }
  },
  methods: {
    setImages(e) {
    console.log(e);
    
      this.images = e.images;
      this.totalFound = e.total;
      this.query = e.query;
    }
  }
}
</script>

<style>
</style>
