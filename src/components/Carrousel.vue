<template>
    <v-carousel height="auto" cycle interval=5000>
        <v-carousel-item
         v-for="(item,i) in items"
         :key="i"
         >
         <img :src="item" style="width:auto;height:auto;"/>
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
