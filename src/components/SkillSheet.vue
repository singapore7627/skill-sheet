<template>
  <div>
    <ComponentP title="職務要約" :contentsP="state.summaryContent" />
    <ComponentP title="知識・技術" :contentsP="state.knowledgeContent" />
    <ComponentP title="取得資格" :contentsP="state.certificationContent" />
    <div class="row mb-3">
      <div class="col text-start">
        <h3 class="mb-2 fs-6">■職務経歴</h3>
        <p>株式会社アズヴィン</p>
      </div>
    </div>
    <ComponentP title="自己PR" :contentsP="state.prContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ComponentP from '@/components/utils/ComponentP.vue';

export default defineComponent({
  setup() {
    const state = reactive<{ summaryContent: string[][], knowledgeContent: string[][], certificationContent: string[][], prContent: string[][] }>({
      summaryContent: [],
      knowledgeContent: [],
      certificationContent: [],
      prContent: []
    });

    state.summaryContent.push(["2018年に明治大学商学部を卒業しました。"]);
    state.summaryContent.push(["システムエンジニアとして3か月の研修を行いました。", "最初のプロジェクトはJavaでした。"]);
    state.knowledgeContent.push(["JavaやJavaScriptを得意としています。", "SpringBoot, ThemeLeaf, Servletに精通しています。", "Vue.jsやNuxt.jsも使えます。"]);
    state.certificationContent.push(["TOEIC750点", "基本情報技術者試験"]);
    state.prContent.push(["初動を大切にしています。"]);

    return { state };
    
  },
  name: 'SkillSheet',
  components: {
    ComponentP,
  },
});
</script>
