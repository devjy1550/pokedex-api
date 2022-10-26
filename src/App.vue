<template>
  <div class="wrap">
    <h2 class="main-title">Pokedex</h2>
    <div class="container">
      <Transition name="fade">
        <div class="intro" v-if="show"></div>
      </Transition>
      <RouterView v-on:hide="hideIntro" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const show = ref(true);
    const hideIntro = () => {
      show.value = false;

      document.querySelector("html").style.overflowY = "auto";
    };

    return { show, hideIntro };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

html {
  font-size: 16px;
  background-color: rgb(255, 255, 255);
}

.wrap {
  position: relative;
  display: block;
  background-color: #fb0505;
}

.wrap > h2 {
  position: relative;
  display: block;
  text-align: center;
}

.container {
  position: relative;
  display: block;
}

/* .intro {
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: url("@/assets/intro-ball.gif") no-repeat center;
  background-size: 100% 100%;
  z-index: 9999;
} */
</style>
