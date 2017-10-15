<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex xs6 ml-2>
        <you-tube :id="song.youtubeId"></you-tube>
      </v-flex>
    </v-layout>

    <v-layout mt-2>
      <v-flex xs6>
        <tab :song="song"></tab>
      </v-flex>
      <v-flex xs6 ml-2>
        <lyrics :song="song"></lyrics>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import songsService from '@/services/songsService'
import songHistoryService from '@/services/songHistoryService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      song: {}
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },
  async mounted() {
    const songId = this.$route.params.id
    try {
      this.song = await songsService.get(songId)
      if (this.isUserLoggedIn) {
        await songHistoryService.create(songId)
      }
    } catch (ex) {
      console.log(`An error occurred attempting to retrieve the song with id ${songId}: ${ex.message}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
