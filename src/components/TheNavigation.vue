<template>
     <div id="nav">
      <AppLink id="logo" to="/">Vue School Travel App</AppLink>

      
    <div class="destinations">
      
      <AppLink v-for="destination in destinations.data" :key="destination.id" :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}">
        {{destination.name}}
      </AppLink>
      <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
    </div>

    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue';
const destinations = reactive({data: sourceData.destinations})
</script>