<template>
  <v-dialog
      v-model="$store.getters.getDialog"
      max-width="600"
      @click:outside="hideDialog()"
    >
        <img :src="$store.getters.getCurrentPhoto.thumbnailUrl" alt="">
    </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations(['hideDialog'])
    }
}
</script>