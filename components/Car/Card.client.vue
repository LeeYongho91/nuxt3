<script setup>
import heartFilled from '@/assets/heartFilled.png';
import heartOutline from '@/assets/heartOutline.png';
const props = defineProps({
  car: Object,
  favored: Boolean
})

const emit = defineEmits(['favor']);
const config = useRuntimeConfig();


// const favored = useState(`favored-${props.car.id}`, () => {
//   return false;
// })

</script>

<template>
      <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[220px]">
      <img class="absolute w-7 right-5 top-2 z-20" :src="favored ? heartFilled: heartOutline" alt="" @click="emit('favor', car.id)" />
      <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
        <NuxtImg :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"  alt="" class="w-[300px] h-full" />
        <div class="p-4 flex flex-col">
          <div>
            <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
            <p>{{ car.description }}</p>
          </div>
          <h1 class="mt-auto">${{ car.price }}</h1>
        </div>
      </div>
    </div>
</template>