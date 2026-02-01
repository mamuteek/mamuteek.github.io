<template>
  <div id="app">
    
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Helpers from './helpers';

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
});


// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/project-1-icon.png",
  "img/projects/project-2-icon.png",
  "img/projects/project-3-icon.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'VT323', monospace;
  -webkit-font-smoothing: none; /* Pixel fonts look better without smoothing */
  -moz-osx-font-smoothing: none;

  font-size: 1.4em; /* VT323 needs to be larger */
  line-height: 1.2em;
  text-align: left;
  
  border: 4px double @textColor;
  margin: 20px;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 4px; /* Slight rounding for a CRT feel */
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  position: relative;
  color: #ff0055; /* Neon Pink for links */
  text-decoration: none;
  opacity: 1;
  transition: all 0.1s;
}
a:hover {
  background-color: transparent;
  color: #ffcce698; /* Pale Pink (Darker than white) */
  opacity: 1;
  text-shadow: 0 0 8px #ff0055;
}

/* Retro Cursor Effect > (Hover Only) */
a:hover::before {
  content: ">";
  position: absolute;
  left: -15px;
  color: #ff0055;
  text-shadow: 0 0 5px #ff0055;
  animation: blink 1s step-end infinite;
}

/* Active State - Static Green */
a.router-link-exact-active {
  color: @textColor;
  text-shadow: 0 0 8px @textColor;
  opacity: 1;
}

a.router-link-exact-active::before {
  content: ">";
  position: absolute;
  left: -15px;
  color: @textColor;
  text-shadow: 0 0 5px @textColor;
  animation: none;
}

/* Retro Click/Press Effect */
a:active {
  color: @textColor !important; /* Green Flash */
  text-shadow: 0 0 10px @textColor !important;
  transform: scale(0.95); /* Physical press feel */
  transition: none; /* Instant feedback */
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.3em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 40px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
