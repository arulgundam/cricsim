<template>
    <div class="home">
      <img id="stadiumimg" src="/images/tare.jpg">
      Simulate T20 games by choosing your favorite players!
      <router-link to="/settings" custom v-slot="{navigate}">
        <button @click="navigate">Start Game</button>
      </router-link>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
<style>
.home {
  width: 100%;
  height: 100%;
}

.toolbar {
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 20px 0 20px 0; /* top right bottom left */
  text-align: center;
  line-height: 60px;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
}

#stadiumimg {
  width: 66%;
}

.home {
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
