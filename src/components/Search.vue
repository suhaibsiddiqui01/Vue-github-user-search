<template>
<div class="userSearch">
  <h1>Enter user Name</h1> 
  <input v-model="query" @input="debouncedSearch"/>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'search',
  computed: {
    ...mapState(['searchQuery']),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      }
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'search']),
    debouncedSearch: debounce(function () {
      this.search();
    }, 500)
  }
};
</script>

<style scoped>
.userSearch {
  padding: 10px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 10px;
}
 input {
  font-size: 16px;
  text-align: center;
}
</style>
