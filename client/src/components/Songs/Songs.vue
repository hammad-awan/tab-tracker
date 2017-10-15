<template>
  <div>
    <v-layout>
      <v-flex xs6 v-if="isUserLoggedIn">
        <songs-bookmarks></songs-bookmarks>
        <song-history class="mt-2"></song-history>
      </v-flex>
      <v-flex ml-2>
        <songs-search-panel></songs-search-panel>
        <songs-panel class="mt-2"></songs-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import SongHistory from './SongHistory'
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    SongHistory
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
