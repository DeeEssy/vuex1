<template>
  <v-col cols="4" @click="openPhoto(photo)">
    <img :src="photo.thumbnailUrl" alt="" />
    <h4 class="subtitle-1">{{ photo.title }}</h4>
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['showDialog', 'setCurrentPhoto']),
    openPhoto(photo) {
      // this.$store.commit('showDialog');
      // this.$store.commit('setCurrentPhoto', this.photo)
      this.showDialog();
      this.setCurrentPhoto(this.photo);
    }
  }
};
</script>