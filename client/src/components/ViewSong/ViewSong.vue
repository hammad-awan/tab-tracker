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
import SongsService from '@/services/songsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data() {
    return {
      song: { id: 0 }
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  async mounted() {
    const songId = this.$store.state.route.params.id
    try {
      this.song = (await SongsService.get(songId)).data
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
