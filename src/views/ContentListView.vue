<template>
  <div class="home">
    <PageLayoutMain title="コンテンツ">
      <template #col-main>
        <ContentList/>
      </template>
    </PageLayoutMain>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayoutMain from '@/views/utils/PageLayoutMain.vue'
import ContentList from '@/components/ContentList.vue';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default defineComponent({
  name: 'ContentListView',
  components: {
    PageLayoutMain,
    ContentList,
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
