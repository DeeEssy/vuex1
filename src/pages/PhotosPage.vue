<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <Photo  v-for="photo in $store.getters.getAllPhotos" :photo="photo" :key="photo.id" />
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
import Photo from "@/components/Photo";
import PhotoForm from "@/components/PhotoForm";
import PhotoDialog from "@/components/PhotoDialog";
import { mapActions } from "vuex";

export default {
  name: "PhotosPage",
  components: {
    Photo,
    PhotoForm,
    PhotoDialog
  },
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    //this.$store.dispatch('fetchPhotos')
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    addPhoto(photo) {
      this.photos.push(photo);
    },
  },
};
</script>