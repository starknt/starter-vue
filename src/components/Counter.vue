<script setup lang="ts">
const { inc, count, dec } = useCounter(0)

const increment = () => inc()
const decrement = () => dec()
</script>

<template>
  <div flex flex-col justify-center items-center>
    <h1>Vue Counter</h1>
    <p>{{ count }}</p>
    <div flex gap-x-2 mt-6>
      <button bg-indigo text-amber hover:text-emerald cursor-pointer text-xl border-cyan px-4 py-2 rounded
        @click="increment">
        increment
      </button>
      <button bg-warmGray text-amber hover:text-emerald cursor-pointer text-xl border-cyan px-4 py-2 rounded
        @click="decrement">
        decrement
      </button>
    </div>
  </div>
</template>
