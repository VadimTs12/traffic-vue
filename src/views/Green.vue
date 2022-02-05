<template>
  <div class="wrapper">
    <router-link to="/red"><div class="item red "></div></router-link>
    <router-link to="/yellow"><div class="item yellow "></div></router-link>
    <div class="item green border"
         :class="{'animation': (timer < 4 ) }">

      <div class="timer">
      {{ timer }}</div></div>

  </div>
</template>

<script>
export default {
  name: "Green",
  data() {
    return {
      timer: 15
    }
  },
  methods: {
    timerBlock() {
      if (this.timer) {
        return setTimeout(() => {
          --this.timer
          localStorage.setItem('timeGreen',this.timer);
          if (this.timer == 0) {
            localStorage.setItem('timeGreen',this.timer);
            setTimeout(() => {
              this.$router.push('/yellow')
              localStorage.setItem('timeGreen', 15);
            }, 1000)
          }
          this.timerBlock()
        }, 1000)
      }
    }
  },
  mounted() {
    if(localStorage.getItem('timeGreen')) {
      this.timer = JSON.parse(localStorage.getItem('timeGreen'))
    }
    this.timerBlock()
  },
}
</script>

<style scoped>

.red {
  background: rgba(255, 0, 0, 0.25);
}
.yellow {
  background: rgba(255, 255, 0, 0.25);
}
.green {
  background: rgba(0, 255, 0, 1);
}
</style>