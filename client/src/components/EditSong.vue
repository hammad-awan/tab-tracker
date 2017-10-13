<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form">
            <v-text-field id="title" label="Title" v-model="song.title"></v-text-field>
            <v-text-field id="artist" label="Artist" v-model="song.artist"></v-text-field>
            <v-text-field id="genre" label="Genre" v-model="song.genre"></v-text-field>
            <v-text-field id="album" label="Album" v-model="song.album"></v-text-field>
            <v-text-field id="albumImageUrl" label="Album Image Url" v-model="song.albumImageUrl"></v-text-field>
            <v-text-field id="youtubeId" label="You Tube Id" v-model="song.youtubeId"></v-text-field>
          </form>
        </div>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field id="lyrics" label="Lyrics" multi-line v-model="song.lyrics"></v-text-field>
        <v-text-field id="tab" label="Tab" multi-line v-model="song.tab"></v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn class="cyan" dark @click="save">Save Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import songsService from '../services/songsService'

export default {
  data() {
    return {
      error: null,
      song: {}
    }
  },
  components: {
  },
  async mounted() {
    const songId = this.$route.params.id
    try {
      this.song = await songsService.get(songId)
    } catch (ex) {
      console.log(`An error occurred attempting to retrieve the song with id ${songId}: ${ex.message}`)
    }
  },
  methods: {
    async save() {
      try {
        this.error = null

        const allFieldsSet = Object.keys(this.song).every(key => !!this.song[key])
        if (!allFieldsSet) {
          this.error = 'Please fill in all the required fields'
          return
        }

        const songId = this.$route.params.id
        await songsService.update(this.song)
        this.$router.push(
          {
            name: 'song',
            params: { id: songId }
          })
      } catch (ex) {
        console.log(`Error updating the song: ${ex.message}.`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
