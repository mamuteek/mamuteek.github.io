<template>
  <div class="section-container">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>I'm Frank — a gameplay and physics programmer based in Prague, Czech Republic.</div>
        
      <div style="margin-top: 15px;">With a background in theoretical physics and over 10 years in game development, I specialize in vehicle dynamics, physics simulation, and low-level C++ engine programming. Over the years, I've had the chance to work on projects like <em>Euro Truck Simulator 2</em>, <em>Star Atlas</em>, and various real-time simulation systems.</div>

      <div style="margin-top: 20px;">Always happy to connect at <a href="mailto:fruzicka@gmail.com">fruzicka@gmail.com</a>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.section-container {
  padding-bottom: 60px;
  min-height: 400px;
}

.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

.photo img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%; /* making it circular */
  border: 4px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); /* subtle shadow */
  transition: transform 0.2s; /* hover effect foundation */
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
