<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form">
            <v-text-field id="title" label="Title" v-model="song.title" required :rules="[required]"></v-text-field>
            <v-text-field id="artist" label="Artist" v-model="song.artist" required :rules="[required]"></v-text-field>
            <v-text-field id="genre" label="Genre" v-model="song.genre" required :rules="[required]"></v-text-field>
            <v-text-field id="album" label="Album" v-model="song.album" required :rules="[required]"></v-text-field>
            <v-text-field id="albumImageUrl" label="Album Image Url" v-model="song.albumImageUrl" required :rules="[required]"></v-text-field>
            <v-text-field id="youtubeId" label="You Tube Id" v-model="song.youtubeId" required :rules="[required]"></v-text-field>
          </form>
        </div>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field id="lyrics" label="Lyrics" multi-line v-model="song.lyrics" required :rules="[required]"></v-text-field>
        <v-text-field id="tab" label="Tab" multi-line v-model="song.tab" required :rules="[required]"></v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn class="cyan" dark @click="create">Create</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import songsService from '../services/songsService'

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      try {
        this.error = null

        const allFieldsSet = Object.keys(this.song).every(key => !!this.song[key])
        if (!allFieldsSet) {
          this.error = 'Please fill in all the required fields'
          return
        }

        console.log(this.song)
        await songsService.post(this.song)
        this.$router.push({ name: 'songs' })
      } catch (ex) {
        console.log(`Error creating the song: ${ex.message}.`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
