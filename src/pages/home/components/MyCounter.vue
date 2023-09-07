<script setup lang="ts">
import { useCountStore } from '../composables/count'

const countStore = useCountStore()
const { count } = storeToRefs(countStore)
const { increaseCount } = countStore
</script>

<template>
  <h1>Vue TypeScript Starter</h1>
  <div class="card">
    <button type="button" @click="increaseCount">
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped>
button {
  padding: 0.6em 1.2em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
