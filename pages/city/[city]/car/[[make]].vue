<script setup>
const route = useRoute();
const {data: cars, refresh} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make
});

watch(() => route.query, () => {
  window.location.reload(true);
});
</script>


<template>
  <div>
      <CarCards :cars="cars" v-if="cars.length" />
      <h1 v-else class="text-red-600">No Cars Found With Filters</h1>
  </div>
</template>

<!-- ROUTE -->
<!-- /car/[car-name]-[car-id] -->

<!-- ENDPOINT -->
<!-- /api/car/[id] -->