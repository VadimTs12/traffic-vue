<template>
  <div class="wrapper">
    <router-link to="/red">
      <div class="item red"></div>
    </router-link>
    <div class="item animation yellow border animation">
      <div class="timer"> {{ timer }}</div>
    </div>
    <router-link to="/green">
      <div class="item green "></div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "Yellow",
  data() {
    return {
      timer: 3,
      prevRoute: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },
  methods: {
    timerBlock() {
      if(this.$route.path != '/yellow') {
        localStorage.removeItem('timeYellow');
        return
      }
      if (this.timer) {
        return setTimeout(() => {
          --this.timer;

          localStorage.setItem('timeYellow',this.timer);
          if (this.timer == 0) {

            localStorage.removeItem('timeYellow');
            if (this.prevRoute.path == "/red") {
              this.$router.push("/green");
            }
            if (this.prevRoute.path == "/green") {
              this.$router.push("/red");
            }
          }
          this.timerBlock();
        }, 1000);
      }
    }

  },
  mounted() {
    if(localStorage.getItem('timeYellow')) {
      this.timer = JSON.parse(localStorage.getItem('timeYellow'))
    }
    this.timerBlock();


  }


};
</script>

<style scoped>

.red {
  background: rgba(255, 0, 0, 0.25);
}

.yellow {
  background: rgba(255, 255, 0, 1);
}

.green {
  background: rgba(0, 255, 0, 0.25);
}
</style>