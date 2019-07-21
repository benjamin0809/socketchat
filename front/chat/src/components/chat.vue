<template>
      <div>{{name}}</div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'chat',
  data: () => {
    return {
      name: 'chat'
    }
  }
}

let i = 0
const func = () => {
  setTimeout(() => {
    console.log(new Date().getTime())
    i++
    if (i < 100) {
      func()
    }
  }, 10)
}
</script>
