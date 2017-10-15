<template>
  <panel title="Recently Viewed Songs">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="songHistory">
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.artist }}</td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import songHistoryService from '@/services/songHistoryService'
import _ from 'lodash'

export default {
  data() {
    return {
      headers: [{
        text: 'Title',
        value: 'title'
      },
      {
        text: 'Artist',
        value: 'artist'
      }],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      songHistory: []
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },
  async mounted() {
    try {
      if (this.isUserLoggedIn) {
        const songHistory = await songHistoryService.index()
        this.songHistory = songHistory.map(x => _.extend({}, x.Song))
      }
    } catch (ex) {
      console.log(ex.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
