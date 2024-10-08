<script setup>
  import {supabase} from './lib/supabaseClient';
  const {data, error} = await supabase.from('products').select();
  console.log(data)
</script>

<template>
  <div class="">test</div>
</template>

<style scoped>

</style>
