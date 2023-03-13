<template>
  <div>
    <ComponentP title="職務要約" :contentsP="state.summaryContent" />
    <ComponentP title="知識・技術" :contentsP="state.knowledgeContent" />
    <ComponentP title="取得資格" :contentsP="state.certificationContent" />
    <div class="row mb-3">
      <div class="col text-start fs-6">
        <h3 class="mb-2 fs-6">■職務経歴</h3>
        <div class="container-fluid">
          <h4 class="fs-7 fw-bold">1 2018/06 - 2018/12 電力会社</h4>
          <div class="row">
            <div class="col-7 border">
              <h5 class="fs-7 fw-bold">プロジェクトの目的・説明</h5>
              <p>
                経営統合に伴ったシステム改修のうち、ポータルサイトの対応を行った。
              </p>
            </div>
            <div class="col-2 border">
              <div class="row">
                <h5 class="fs-7 fw-bold">フェーズ</h5>
                <p>
                  開発-リリース
                </p>
              </div>
              <div class="row">
                <h5 class="fs-7 fw-bold">人数</h5>
                <p>
                  3-8
                </p>
              </div>
            </div>
            <div class="col-3 border">
              <h5 class="fs-7 fw-bold">技術</h5>
              <p>
                Java
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-7 border">
              <h5 class="fs-7 fw-bold">役割</h5>
              <p>
                一般的ウォーターフォール型開発に従って進めた。<br/>
                開発、単体テスト、結合テストを行い、チームリーダーのレビューを受け必要に応じて修正を行った。<br/>
                既存のコードに対して、複数ブランドに対応できるよう、アカウント情報に紐づくSQL文の変更、描画内容やメール出力内容の切り替え等を行った。<br/>
                WebAPIやバッチ改修等も担当した。
              </p>
            </div>
            <div class="col-5 border">
              <h5 class="fs-7 fw-bold">スキル</h5>
              <p>
                さまざまなスキルを会得した。
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col border">
              <h5 class="fs-7 fw-bold">コメント</h5>
              <p>
                さまざまなスキルを会得した。
              </p>
            </div>
          </div>
        </div>
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
