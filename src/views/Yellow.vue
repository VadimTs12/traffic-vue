<template>
  <div class="wrapper">
    <router-link to="/red"> <div class="item red"></div></router-link>
    <div class="item animation yellow border animation"> <div class="timer"> {{ timer }}</div></div>
    <router-link to="/green"><div class="item green "></div></router-link>

  </div>
</template>

<script>
export default {
  name: "Yellow",
  data() {
    return {
      timer: 3,
      prevRoute: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  methods: {
    timerBlock() {
      if (this.timer) {
        return setTimeout(() => {
          --this.timer
          if(this.timer == 0){
            setTimeout(() => {
              if(this.prevRoute.path == '/red') {
                this.$router.push('/green')
              }
              if (this.prevRoute.path == '/green') {
                this.$router.push('/red')
              }
            }, 1000)
          }
          this.timerBlock()
        }, 1000)
      }
    }
  },
  mounted() {
    this.timerBlock()
  },


}
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