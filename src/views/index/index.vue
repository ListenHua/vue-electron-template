<template>
  <div class="test absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
    <div class="text-4xl mb-5">HELLO, {{ target }}!</div>

    <div
      class="inline-block cursor-pointer select-none rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      @click="onClick">
      <span class="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"> Click </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const target = ref('')

const onClick = () => {
  target.value = target.value == 'VUE' ? 'Electron' : 'VUE'
}

onMounted(() => {
  target.value = 'VUE'
})
</script>

<style lang="scss" scoped></style>
