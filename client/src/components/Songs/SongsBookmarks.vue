<template>
  <panel title="Bookmarks">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.artist }}</td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import bookmarksService from '@/services/bookmarksService'

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
      bookmarks: []
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },
  async mounted() {
    try {
      if (this.isUserLoggedIn) {
        this.bookmarks = (await bookmarksService.index(this.user.id))
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
