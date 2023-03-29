<template>
  <div class="container">
    <div class="square">
      <img
        :src="blogProp.image"
        class="mask"
      />
      <div class="h1">{{ blogProp.title.substring(0, 40) }}</div>
      <p>{{ blogProp.content.substring(0, 300) }}</p>

      <div>
        <a
          href="#"
          target="_"
          class="button"
          >Read More</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueProjectBlog',
  props: {
    blogProp: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="css" scoped>
    @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');

.container{
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  /* padding-bottom: 3rem; */
}

.square:hover {
    -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px);
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
     }


.square{
  /* width: 460px;
	height: 430px; */
	background: white;
  padding-bottom: 2rem;
  border-radius: 4px;
  box-shadow: 0px 1px 3px #D9DBDF;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.mask{
  clip: rect(0px, 460px, 220px, 0px);
  border-radius: 4px;
  position: absolute;
}

img{
  width: 100%;
  }

.h1{
  margin: auto;
  text-align: left;
  margin-top: 240px;
  padding-left: 30px;
  color: #3d5855;
  text-align: left;

  font-family: 'Merriweather', serif;
  font-size: 24px;
}
p{
 text-align: justify;
 padding-left: 30px;
 padding-right: 30px;
 font-family: 'Open Sans', sans-serif;
 font-size: 12px;
 color: #636363;
 line-height: 18px;
}

.button {
    background-color: #ff3300;
    color: white;
    /* width: 90px; */
    padding: 10px 18px;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 70px;
    font-size: 12px;
    cursor: pointer;
    font-family: 'merriweather';
}
</style>

