<template>
  <div class="login">
    <PageLayoutAuth title="ログイン">
      <template #col-main>
        <Login/>
      </template>
    </PageLayoutAuth>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayoutAuth from '@/views/utils/PageLayoutAuth.vue'
import Login from '@/components/Login.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    PageLayoutAuth,
    Login,
  },
});
</script>
