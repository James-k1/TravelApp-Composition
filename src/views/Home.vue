<script setup>
import sourceData from '@/data.json' 
import { reactive } from 'vue';

const destinations = reactive({data: sourceData.destinations})


</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
      
      <router-link v-for="destination in destinations.data" :key="destination.id" :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}">
      <h2>{{destination.name}}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>

  </div>
</template>
