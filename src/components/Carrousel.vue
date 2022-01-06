<template>
    <v-carousel>
        <v-carousel-item
         v-for="(item,i) in items"
         :key="i"
         :src="item.src">
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
