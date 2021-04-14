<script lang="ts">
import { defineComponent } from 'vue';
import VueComponentLib from '@/vue-component-lib.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueComponentLib
  }
});
</script>

<template>
  <div id="app">
    <vue-component-lib text="hello"/>
  </div>
</template>
