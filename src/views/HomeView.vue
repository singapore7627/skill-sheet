<template>
  <div class="home">
    <PageLayoutSkill title="職務経歴書" date="2023年8月11日" name="渡辺貴義">
      <template #col-main>
        <SkillSheet/>
      </template>
    </PageLayoutSkill>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayoutSkill from '@/views/utils/PageLayoutSkill.vue'
import SkillSheet from '@/components/SkillSheet.vue';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default defineComponent({
  name: 'HomeView',
  components: {
    PageLayoutSkill,
    SkillSheet,
  },
  mounted: async function() {
    // TODO ログイン状態で直叩きで1回目失敗、2回目成功の理由

    const auth = getAuth();
    const user = await auth.currentUser;
      console.log(auth)
      console.log(user)

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
    } else {
      this.$router.push({ name: 'login', params: {} })
    }
  }
});
</script>
