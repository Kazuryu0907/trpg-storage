<template>
    <v-carousel height="800px" cycle interval=5000>
        <v-carousel-item
         v-for="(item,i) in items"
         :key="i"
         :src="item">
        </v-carousel-item>
    </v-carousel>
</template>

<script>
 export default {
     props: {
         items: {
             type: Array,
             default: new Array(),
             require: true
         }
     }
 }
</script>
