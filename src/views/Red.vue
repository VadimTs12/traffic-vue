<template>
  <div class="wrapper">
    <div class="item red border "
         :class="{'animation': (timer < 4 ) }"
    >
      <div class="timer"> {{ timer }}</div>
    </div>
    <router-link to="/yellow">
      <div class="item yellow "></div>
    </router-link>
    <router-link to="/green">
      <div class="item green "></div>
    </router-link>

  </div>

</template>

<script>
export default {
  name: "Red",
  data() {
    return {
      timer: 10
    };
  },
  methods: {
    timerBlock() {
      if(this.$route.path != '/red') {
        localStorage.removeItem('timeRed');
        return
      }
      if (this.timer) {
        return setTimeout(() => {
          --this.timer;
          localStorage.setItem('timeRed',this.timer);
          if (this.timer == 0) {
            localStorage.removeItem('timeRed');
            this.$router.push("/yellow");
          }
          this.timerBlock();
        }, 1000);
      }
    }
  },
  mounted() {
    if(localStorage.getItem('timeRed')) {
      this.timer = JSON.parse(localStorage.getItem('timeRed'))
    }
    this.timerBlock();
  }
};
</script>

<style scoped>

.red {
  background: rgba(255, 0, 0, 1);
}

.yellow {
  background: rgba(255, 255, 0, 0.25);
}

.green {
  background: rgba(0, 255, 0, 0.25);
}
</style>