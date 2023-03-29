<script setup></script>

<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="navlink">Home</router-link>
      <router-link to="/about" class="navlink">About</router-link>
      <router-link to="/admin" class="navlink">Admin</router-link>
      <router-link to="/client" class="navlink">Client</router-link>
      <router-link to="/Blog" class="navlink">Blog</router-link>
      <a href="#" @click.prevent="logOut" class="navlink" v-if="isLoggedIn">Log Out</a>
      <router-link to="/Login" class="navlink" v-else>Login</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VueProjectApp',

  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  mounted() {
    
  },

  methods: {
    ...mapActions(['logOut'])
  },
};
</script>
<style scoped>
.nav{
  height: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}
.navlink {
  text-decoration: none;
  color: #ccc;
  display: inline-block;
  padding: 4px 12px;
}
</style>
