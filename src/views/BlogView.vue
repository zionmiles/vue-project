<template>
  <div>
    <div v-if="user !== null">
      <h2>Welcome {{ user.name }}</h2>
      <p>You have logged in {{ noOfTimes }} times</p>
    </div>
    <div v-else>
      <h2>Hi,</h2>
      <p>Please Log in</p>
    </div>
    <div class="blogContainer">
      <Blog v-for="(blog, index) in blogs" :key="index" :blogProp="blog"></Blog>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";
import { mapGetters } from "vuex";

export default {
  name: "VueProjectBlogView",

  components: {
    Blog,
  },

  computed: {
    ...mapGetters({
      blogs: "getBlogPosts",
      user: "getUser",
      noOfTimes: "getLoginCount",
    }),
  },

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getPosts", "Call Post");
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.blogContainer {
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
