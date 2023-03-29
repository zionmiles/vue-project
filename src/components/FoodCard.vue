<template>
  <div class="card">
    <img class="card_img" :src="image" alt="food-image" />
    <div class="card_container">
      <h2 class="card_heading">
        <slot name="heading">This is a default header</slot>
      </h2>
      <button class="card_btn">Fashion</button>
      <p class="card_paragrah">
        <slot>2 min</slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default:
        "https://eneye-cyber.github.io/Blooger.github.io/assets/Blog-post/post-1.jpg",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 350px;
  margin-top: 5rem;
  border: 1px solid yellow;
  background-color: #fff;
  border-radius: 1rem;

  &_img {
    width: 100%;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  &_container {
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &_heading {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.2;
    color: gray;
    text-align: center;
  }

  &_btn {
    align-self: center;
    border: none;
    font-size: 1rem;
    font-weight: 200;
    padding: 1rem 3rem;
    border-radius: 2rem;
    background-color: rgb(116, 153, 82);
  }

  &_paragrah {
    align-self: center;
    font-size: 1.2rem;
    font-weight: 200;
    color: gray;
  }
}
</style>
