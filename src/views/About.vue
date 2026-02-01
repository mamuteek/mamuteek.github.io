<template>
  <div class="section-container">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>Hi, I'm Frank, a former physicist turned into a game dev (which I've been doing for 10 years).</div>
        
      <div style="margin-top: 15px;"> I'm based in Prague, Czech Republic </div>

      <div style="margin-top: 15px;">I've worked on various game projects, physics simulations, and have extensive experience in C++ and engine development.</div>

      <div style="margin-top: 20px;">You can reach me at <a href="mailto:fruzicka@gmail.com">fruzicka@gmail.com</a>.</div>
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