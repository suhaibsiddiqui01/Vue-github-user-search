<template>
  <div id="app">
    <Search />
    <User />
  </div>
</template>

<script>
import Search from './components/Search';
import User from './components/User';

export default {
  name: 'app',
  components: {
    User,
    Search
  }
};
</script>

<style>
 body {
  background: #e2e1e0;
  text-align: center;
}
#app{
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
