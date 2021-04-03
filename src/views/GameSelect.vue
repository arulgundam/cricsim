<template>
  <div class="about">
    <h1 id="title">Choose your game mode:</h1>
    <!--
    game modes:
      1. custom
      2. draft
      3. auction
      game modes in forms of buttons, descriptions beneath each button
   -->
   <div class="body">
     <div>
       Pick any team you want and play any team you want!
       <div>
         <router-link to="/custommode" custom v-slot="{navigate}">
           <button @click="navigate">Custom</button>
         </router-link>
       </div>
     </div>
     <div>
       Multiplayer mode: Draft two teams to play against each other!
       <div>
         <router-link to="/draftmode" custom v-slot="{navigate}">
           <button @click="navigate">Draft</button>
         </router-link>
       </div>
     </div>
     <div>
       Multiplayer mode: Take part in an IPL-style auction to pick two teams to play against each other!
       <div>
         <router-link to="/auctionmode" custom v-slot="{navigate}">
           <button @click="navigate">Auction</button>
         </router-link>
       </div>
     </div>
   </div>
  </div>
</template>

<style>
.about {
  width: 100%;
  height: 100%;
}
#title {
  margin: 0
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
