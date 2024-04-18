<template>
  <div class="flip-card mb-3 ">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="store.baseImg + item.poster_path" :alt="item.title">
      </div>
      <div class="flip-card-back">
        <div class=" p-4 ">
          <h2>Titolo: {{ item.title || item.name}}</h2>
        <div>Titolo Originale: {{ item.original_title || item.original_name }}</div>
        <div>
          <span>voto: </span>
          <i class="fa-solid fa-star" v-for="n in starsVote()"></i>
        </div>
        <div>
          Overview: {{ item.overview }}
        </div>

        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { store } from '../../store.js';
export default {
  name: 'CardComponent',
  data() {
    return {
      store,
    }
  },
  props: {
    item: Object
  },
  methods: {
    starsVote() {
      return Math.round(this.item.vote_average / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-star {
  color: yellow;
}

.flip-card {
  background-color: transparent;
  width: 200px;
  aspect-ratio: 2 / 3;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  /* Remove this if you don't want the 3D effect */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
  width: 200px;
  aspect-ratio: 2 / 3;
}

/* Style the back side */
.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  overflow-y: auto;
}
img {
  width: 200px;
  aspect-ratio: 2 / 3;
}
</style>