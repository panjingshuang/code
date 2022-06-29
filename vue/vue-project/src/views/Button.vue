<script setup lang="ts">
  const props = defineProps(['item'])
  const item = props.item
  const handleClick = () =>{
    item.age ++
  }
</script>

<template>
  <button @click="handleClick">点击改变reactive的数据</button>
</template>
