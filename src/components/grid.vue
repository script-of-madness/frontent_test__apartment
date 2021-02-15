<template>
  <v-container
    cols="12"
    class="d-flex align-center justify-center flex-wrap mb-6 section "
  >
    <h1>Lorem ipsum dolor sit</h1>
    <sort-panel />
    <v-col cols="12" class="d-flex  flex-wrap col-lg-8 mb-4 justify-center  ">
      <card v-for="el in data" :key="el.id" :card="el"></card>
    </v-col>
  </v-container>
</template>

<script>
import card from '@/components/card'
import sortPanel from '@/components/sortPanel'
import { mapState } from 'vuex'

export default {
  name: 'grid',
  components: {
    card,
    sortPanel,
  },

  computed: {
    ...mapState(['data']),
  },
}
</script>
