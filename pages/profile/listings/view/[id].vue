<script setup>
definePageMeta({
  layout: 'custom'
})

const route = useRoute();
const { data: messages } = useFetch(`/api/car/listings/${route.params.id}/message`);
</script>




<template>
  <div class="rounded shadow mt-20">
    {{ data }}
    <CarMessageCard v-for="message in messages" :key="message" :message="message"/>
  </div>
</template>