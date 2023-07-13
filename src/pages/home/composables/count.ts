import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', () => {
  const count = ref(0)

  function increaseCount() {
    count.value++
  }

  return {
    count,
    increaseCount,
  }
})
