<script setup lang="ts">
import { storeToRefs } from 'pinia'
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
