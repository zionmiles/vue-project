<template>
  <div class="blogContainer">
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "VueProjectBlogView",

  components: {
    Login,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.blogContainer {
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
