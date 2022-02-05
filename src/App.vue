<template>
  <h1>СВЕТОФОР</h1>
  <nav>
    <router-link to="/red" class="red-link">RED</router-link>
    |
    <router-link to="/yellow" class="yellow-link">YELLOW</router-link>
    |
    <router-link to="/green" class="green-link">GREEN</router-link>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 60px;
  margin: 5px;
}

nav {
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #000d3f;
    border-radius: 5px;
    padding: 5px;
  }

  .red-link {
    background: red;
  }

  .yellow-link {
    background: yellow;
  }

  .green-link {
    background: green
  }
}

.wrapper {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00030a;
  border-radius: 50px;
  padding: 10px;

  section {
    width: 100%;
  }

  .timer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120px;
    font-weight: 700;
    color: #000d3f;
  }
}

.item {
  width: 250px;
  height: 250px;
  border-radius: 300px;
}

.item.animation {
  animation-name: light;
  animation-duration: 1s;
  animation-iteration-count: 4;
}

@keyframes light {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.border {
  border: 3px solid #595959;
}

</style>

<script>
export default {
  name: "App"

};
</script>
