<script setup>
import {RouterLink} from 'vue-router'
import { computed } from 'vue';

    const props = defineProps({
        ...RouterLink.props
    })
    const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
    

</script>

<template>
    <a :href="props.to" v-if="isExternal"><slot/></a>
    <router-link v-bind="$props" v-else> <slot/> </router-link>
</template>