<template>
  <div>
    <ComponentP title="職務要約" :contentsP="state.summaryContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ComponentP from '@/components/utils/ComponentP.vue';

export default defineComponent({
  setup() {
    const state = reactive<{ summaryContent: string[][], knowledgeContent: string[][], certificationContent: string[][], careerContent: object[], prContent: string[][] }>({
      summaryContent: [],
      knowledgeContent: [],
      certificationContent: [],
      careerContent: [],
      prContent: []
    });

    state.summaryContent.push([
      "2018年、明治大学商学部を卒業後、3か月の研修を経て最初のプロジェクトに参画。",
      "研修での知識を活かし同時期に参画した先輩と同等の立場でチームとして活動。JavaやMVC等Webアプリ開発の基礎知識を定着させる。",
      "その後、並行して動いていた保守プロジェクトのメンバー退職に伴い、玉突きで保守プロジェクトに移動。",
    ]);
    state.summaryContent.push([
      "2020年1月、所属会社のSalesforce案件の強化の方針と相まってSalesforceを業務システムとして利用しているプロジェクトに参画。",
      "運用・保守的動きの中で初めて顧客とのコミュニケーションをリードし、マスタ変更に伴う諸問題の解決を模索した。",
    ]);
    state.summaryContent.push([
      "2020年11月以後、転職をきっかけに小規模案件への対応が増える。",
      "2022年4月頃から、別会社での新規サービスの立ち上げに係るHPやWeb管理システムの初期構築段階から主体的に携わる。",
    ]);

    return { state };
  },
  name: 'ContentList',
  components: {
    ComponentP,
  },
});
</script>
