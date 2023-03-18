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
    state.knowledgeContent.push([
      "【Java】",
      "最初のプロジェクトではServletを利用したLiferayが採用されており、その他SpringBootやDBアクセスフレームワークのDOMAなど汎用性の高い知見を取得しました。",
      "また、15人日ほどのスポット案件ではSpringBootを利用して自力で開発し、有識者のレビューを経て納品しました。"
    ]);
    state.knowledgeContent.push([
      "【JavaScript】",
      "・Vue.jsについて",
      "年月日等による画面表示の切り替え等の要件に対する対応として、JavaアプリのレスポンスをVue配下で扱い通信回数とDBアクセス数を削減する狙いで導入しました。",
      "その後SPAとREST APIによる通信の実現のために採用しています。",
      "この職務経歴書出力はVue3で作成しています。（その他はVue2です。）",
      "・Nuxt.jsについて",
      "HP（初期構築は外注）のリニューアルを機に、べた書きによる保守性の低下への対処のためSSGとして採用しました。",
      "・jQueryについて",
      "最初のプロジェクトでの一部改修対応や、小規模プロジェクトで動きを付けるために多少使用した程度です。",
      "・Node.jsについて",
      "SSGであるHexoを利用したHPの改修のために触れたのち、ExpressやVue等を使用する場合に多少意識する程度です。"
    ]);
    state.knowledgeContent.push([
      "【HTML / CSS】",
      "小規模プロジェクト以後フロントエンドを開発する機会が多くなりました。",
      "社内HP改修などではSASSが採用されていたものの開発者によって、記述方法のムラが多くありました。",
      "自身で構築する際はフロントエンドの経験年数が浅い人も扱いやすいことも考慮に入れ、Bootstrap5を基本としカスタマイズでも対応しきれない部分ではじめてCSS（SASS）の記述をする方針としています。"
    ]);
    state.knowledgeContent.push([
      "【その他】",
      "触れたことのある技術等を記載します。",
      "WindowsServer2012 / Firebase / Linux / Apache / NGINX / さくらのレンタルサーバー / Apache Tomcat",
      "JSP / thymeleaf / PHP / Laravel / Dart / FlutterWeb / Salesforce / Apex / Visualforce / データローダ / VBA / Perl / HSP",
      "SQL / SQL Server / MySQL / Access",
      "Git / GitHub / Sourcetree / SVN / Redmine / Slack / Teams",
      "Eclipse / STS / Andoroid Studio",
    ]);
    state.certificationContent.push([
      "TOEIC750点 (2017/2/5)",
      "基本情報技術者試験 (2019/5/22)",
      "Salesforce認定アドミニストレータ (2020/4/24)"
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
