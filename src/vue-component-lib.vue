<template>
  <button @click="onClick()">{{text}}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
  },
  setup() {
    return {
      onClick: () => {
        alert("You click me!");
      },
    };
  },
});
</script>
