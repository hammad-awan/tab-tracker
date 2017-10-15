<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn class="cyan" dark :to="{name: 'song-edit', params: {id: songId}}" v-show="songId > 0">Edit</v-btn>
        <v-btn class="cyan" dark @click="setBookmark" v-if="isUserLoggedIn && !bookmark">Bookmark</v-btn>
        <v-btn class="cyan" dark @click="unbookmark" v-if="isUserLoggedIn && bookmark">Unbookmark</v-btn>

      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br/> {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import bookmarksService from '@/services/bookmarksService'

export default {
  props: ['song'],
  data() {
    return {
      bookmark: null
    }
  },
  components: {
  },
  methods: {
    async setBookmark() {
      try {
        this.bookmark = (await bookmarksService.add(this.song.id))
      } catch (ex) {
        console.log(ex.message)
      }
    },
    async unbookmark() {
      try {
        await bookmarksService.remove(this.bookmark.id)
        this.bookmark = null
      } catch (ex) {
        console.log(ex.message)
      }
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user']),
    songId() {
      return this.song != null && this.song.id != null ? this.song.id : 0
    }
  },
  watch: {
    async song() {
      try {
        if (this.isUserLoggedIn) {
          const bookmarks = (await bookmarksService.index(this.song.id))
          if (bookmarks.length > 0) {
            this.bookmark = bookmarks[0]
          }
        }
      } catch (ex) {
        console.log(ex.message)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
