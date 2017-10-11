<template>
  <panel title="Song Search">
    <v-text-field id="search" label="Search by song title, artist, album, or genre" v-model="search" @change="onSearchChange"></v-text-field>
  </panel>
</template>

<script>

export default {
  data() {
    return {
      search: ''
    }
  },
  components: {
  },
  methods: {
    onSearchChange() {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
