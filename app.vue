<script setup>
// const { data, error, pending, refresh } = await useAsyncGql({
//   operation: "Songs",
// });

const { data } = await useGraphqlQuery("films");
console.log(data.allFilms.films);
</script>

<template>
  <div>
    <button @click="refresh()">Refresh</button>

    <p v-if="pending">pending</p>
    <pre v-else>
      {{ data || error }}
   </pre
    >
  </div>
</template>
