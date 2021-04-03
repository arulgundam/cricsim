<template>
  <main class="home">
    <header class="toolbar">
      <div>
        CricSim
      </div>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/squad">Squad Data</router-link>
      </div>
    </header>
    <div class="body">
      <router-view/>
    </div>
  </main>
</template>

<style>

html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}


#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body {
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
