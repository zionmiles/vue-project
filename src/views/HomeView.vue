<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="food-container">
      <FoodCard #heading>
        London Fashion week's continued the evolution
      </FoodCard>
      <FoodCard
        image="https://eneye-cyber.github.io/Blooger.github.io/assets/Blog-post/post-2.jpg"
      ></FoodCard>
      <FoodCard
        image="https://eneye-cyber.github.io/Blooger.github.io/assets/Blog-post/post-3.jpg"
      >
      <slot>5 min</slot>
      </FoodCard>
    </div>
  </main>
</template>

<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
import FoodCard from "@/components/FoodCard.vue";
</script>

<style lang="scss" scoped>
.food-container {
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
