<template>
  <div class="login">
    <PageLayoutAuth title="アカウント作成">
      <template #col-main>
        <Signup/>
      </template>
    </PageLayoutAuth>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayoutAuth from '@/views/utils/PageLayoutAuth.vue'
import Signup from '@/components/Signup.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    PageLayoutAuth,
    Signup,
  },
});
</script>
