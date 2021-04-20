<template>
  <v-row class="d-flex">
    <v-text-field v-model="title" />
    <v-file-input v-model="img" />
    <v-btn @click="addPhoto">Добавить</v-btn>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      img: null,
    };
  },
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          thumbnailUrl: reader.result,
        };
        console.log(photo);
        this.$emit("addPhoto", photo);
      };
      reader.readAsDataURL(this.img);
    },
  },
};
</script>