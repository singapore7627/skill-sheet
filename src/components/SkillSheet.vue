<template>
  <div>
    <ComponentP title="職務要約" :contentsP="state.summaryContent" />
    <ComponentP title="知識・技術" :contentsP="state.knowledgeContent" />
    <ComponentP title="取得資格" :contentsP="state.certificationContent" />
    <ComponentCareer title="職務経歴" :careers="state.careerContent" />
    <ComponentP title="自己PR" :contentsP="state.prContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ComponentP from '@/components/utils/ComponentP.vue';
import ComponentCareer from '@/components/utils/ComponentCareer.vue';

export default defineComponent({
  setup() {
    const state = reactive<{ summaryContent: string[][], knowledgeContent: string[][], certificationContent: string[][], careerContent: object[], prContent: string[][] }>({
      summaryContent: [],
      knowledgeContent: [],
      certificationContent: [],
      careerContent: [],
      prContent: []
    });

    state.summaryContent.push(["2018年に明治大学商学部を卒業しました。"]);
    state.summaryContent.push([
      "システムエンジニアとして3か月の研修を行いました。",
      "最初のプロジェクトはJavaでした。"
    ]);
    state.knowledgeContent.push([
      "JavaやJavaScriptを得意としています。",
      "SpringBoot, ThemeLeaf, Servletに精通しています。",
      "Vue.jsやNuxt.jsも使えます。"
    ]);
    state.certificationContent.push([
      "TOEIC750点",
      "基本情報技術者試験"
    ]);
    state.prContent.push([
      "この職務経歴書はVue3、Bootstrap5を使用して作成しています。",
      "内容はべた書きです。ローカル環境で動作します。今後はfirebase環境に移行し、認証と登録データの管理を目指します。",
      "ブラウザの機能でPDF化しています。Chromeで85%の拡大率で出力しています。今後はJavaScriptライブラリを導入してPDF出力機能を追加することを目指します。",
      "(参考)",
      "https://github.com/singapore7627/skill-sheet",
    ]);

    state.careerContent.push(
      {
        period: "2018/06 - 2018/12",
        projectName: "低圧CIS統合",
        purpose: [
          "経営統合に伴ったシステム改修のうち、ポータルサイトの対応を行った。",
        ],
        phase: "開発-リリース",
        teamSize: "3-8人",
        tech: ["Java", "HTML"],
        duties: [
          "一般的ウォーターフォール型開発に従って進めた。",
          "開発、単体テスト、結合テストを行い、チームリーダーのレビューを受け必要に応じて修正を行った。",
          "既存のコードに対して、複数ブランドに対応できるよう、アカウント情報に紐づくSQL文の変更、描画内容やメール出力内容の切り替え等を行った。",
          "WebAPIやバッチ改修等も担当した。",
        ],
        skills: [
          "さまざまなスキルを会得した。",
        ],
        comments: [
          "コメントです。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2018/06 - 2018/12",
        projectName: "低圧CIS統合2",
        purpose: [
          "経営統合に伴ったシステム改修のうち、ポータルサイトの対応を行った。",
        ],
        phase: "開発-リリース",
        teamSize: "3-8人",
        tech: ["Java", "HTML"],
        duties: [
          "一般的ウォーターフォール型開発に従って進めた。",
          "開発、単体テスト、結合テストを行い、チームリーダーのレビューを受け必要に応じて修正を行った。",
          "既存のコードに対して、複数ブランドに対応できるよう、アカウント情報に紐づくSQL文の変更、描画内容やメール出力内容の切り替え等を行った。",
          "WebAPIやバッチ改修等も担当した。",
        ],
        skills: [
          "さまざまなスキルを会得した。",
        ],
        comments: [
          "コメントです。",
        ]
      }
    );

    return { state };
  },
  name: 'SkillSheet',
  components: {
    ComponentP,
    ComponentCareer,
  },
});
</script>
