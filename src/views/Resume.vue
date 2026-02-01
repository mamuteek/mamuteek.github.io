<template>
  <div class="section-container">

    <div class="full-content">
      <div class="skill-set">
        <h2>Tech Stack</h2>
        <div>
          <!-- Languages (Green) -->
          <span class="tag tag-lang"><span class="front" xp="10 years">C++</span></span>
          <span class="tag tag-lang"><span class="front" xp="4 years">C#</span></span>
          <span class="tag tag-lang"><span class="front" xp="4 years">Python</span></span>
          
          <!-- Engines (Blue) -->
          <span class="tag tag-engine"><span class="front" xp="4 years">UE4/5</span></span>
          <span class="tag tag-engine"><span class="front" xp="2 years">Unity</span></span>
          
          <!-- Libs (Orange) -->
          <span class="tag tag-lib"><span class="front" xp="7 years">Bullet physics</span></span>
          <span class="tag tag-lib"><span class="front" xp="3 years">PhysX</span></span>
          <span class="tag tag-lib"><span class="front" xp="2 year">Photon Fusion</span></span>
          <span class="tag tag-lib"><span class="front" xp="2 year">Nakama</span></span>
          <span class="tag tag-lib"><span class="front" xp="2 year">Collyseus</span></span>
          <span class="tag tag-lib"><span class="front" xp="3 years">UE GAS</span></span>
        </div>
      </div>
      <div style="clear:both" />

      <div style="margin-top: 45px; border-top: 2px dashed #00ff41; padding-top: 20px;">
        <p>My full CV in case anybody needs it:</p>
        <a class="download-link" href="docs/FrankRuzickaCV.pdf" target="_blank">
            <i class="fa fa-download fa-lg fa-fw"></i> Download PDF
        </a>
        <div style="clear:both"></div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Resume",
  components: {
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.section-container {
  padding-bottom: 60px;
  min-height: 400px;
}

h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
  margin-bottom: 30px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
    width: 100%;
  }
}

.job-desc ul {
  padding-left: 20px;
  margin-top: 5px;
}
.tag {
    /* Stable Container */
    position: relative;
    display: inline-block;
    padding: 0;
    margin-right: 15px;
    margin-bottom: 15px;
    font-size: 0.9em;
    font-family: 'VT323', monospace;
    cursor: help;
    perspective: 1000px;
    
    /* Ensure container has size but no interaction interference */
    width: auto;
    height: 1.5em;
    min-width: 120px; 
}

/* The Rotating Card */
.tag .front {
    display: block;
    width: 100%;
    height: 100%;
    padding: 2px 8px;
    box-sizing: border-box;
    
    /* Visuals moved here */
    color: inherit; /* Inherit color from .tag category class */
    border: 1px solid currentColor;
    background-color: @contentBgColor;
    
    /* Animation */
    transform-style: preserve-3d;
    transition: transform 0.6s;
    /* remove transition-delay to fix "stuck" feeling */
    
    text-align: center;
    line-height: inherit;
    /* Fix Z-fighting */
    backface-visibility: hidden;
    transform: translateZ(0px); /* Base state */
}

/* The Back Face (XP) */
.tag .front::after {
    content: attr(xp);
    position: absolute;
    top: -1px; /* Align with border */
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    padding: 2px 0;
    box-sizing: border-box;
    
    /* Visuals */
    border: 1px solid currentColor;
    background-color: @contentBgColor;
    color: inherit;
    
    /* Flip it */
    transform: rotateX(180deg) translateZ(1px); /* Push out slightly */
    backface-visibility: hidden;
    
    /* Alignment */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Trigger Flip on Container Hover */
.tag:hover .front {
    transform: rotateX(180deg);
    box-shadow: 0 0 10px currentColor; /* Glow on the card */
}

/* Category Colors (Applied to wrapper, inherited by children) */
.tag-lang { color: #00ff41; }
.tag-engine { color: #00f0ff; }
.tag-lib { color: #ff9f00; }


</style>