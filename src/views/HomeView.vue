<template>
  <div class="home">
    <SkillSheet/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkillSheet from '@/components/SkillSheet.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    SkillSheet,
  },
});
</script>
