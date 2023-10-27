<script setup>


const route = useRoute();
const { data: car } = await useFetchCar(route.params.id); 
const { toTitleCase } = useUtilities();
const user = useSupabaseUser()

useHead({
  title: toTitleCase(route.params.name)
});



definePageMeta({
  layout: "custom"
})



</script>
<template>
  <div v-if="car">
    {{ user.id }}
      <CarDetailHero :car="car" />
      <CarDetailAttributes :features="car.features" />
      <CarDetailDescription :description="car.description"/>
      <CarDetailContact />
  </div>
</template>