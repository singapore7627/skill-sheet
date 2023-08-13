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
      "社内HP改修などではSassが採用されていたものの開発者によって、記述方法のムラが多くありました。",
      "自身で構築する際はフロントエンドの経験年数が浅い人も扱いやすいことも考慮に入れ、Bootstrap5を基本としカスタマイズでも対応しきれない部分ではじめてCSS（Sass）の記述をする方針としています。"
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
        period: "2022/04 - 2023/06",
        projectName: "新サービスリリースに向けた諸作業",
        purpose: [
          "2022年4月に立ち上げた新会社のサービスリリースに向けた活動を行った",
          "主に経営陣3人と協力メンバーを合わせ5人で週次の打ち合わせをベースに各々が補完して作業を進めた。",
        ],
        phase: "要求分析 - リリース",
        teamSize: "5-8人",
        tech: ["Node.js ( Express )", "Vue.js ( SPA )", "Nuxt.js ( SSG )", "HTML", "CSS ( Sass, Bootstrap )", "PHP"],
        duties: [
          "HPの更新や管理を行った。（初期構築は外注、リニューアル時にNuxt.jsを導入）",
          "既存技術の開発者と調整し、サービス化に必要な要素の洗い出しからDBスキーマ、技術構成、実現方式の提案やドキュメント化を行った。必要となった開発要素のうち、Web管理画面（Vue.js / SPA）をメンバーのレビューを踏まえながら担当した。REST APIを開発ができる程度の設計まで担当し、他のメンバーに開発を依頼、不完全な点の解消に努めた。",
          "さくらのレンタルサーバーに関連して、ドメイン取得、SSL化、社内メールアドレス管理、サーバー設定等を行った。Slack、さくらぽけっと（ストレージ）、Redmineを導入した。",
          "営業、法務、広報等、人手の足らない部分は逐次対応した。",
        ],
        skills: [
          "リーダーシップ",
          "内部調整",
          "Vue.js / Nuxt.js",
          "SPA / REST API 設計",
          "社内基盤構築",
          "技術選定",
          "アーキテクチャ",
        ],
        comments: [
          "開発に限らず様々な経験をさせていただきました。",
          "会社全体のマイルストーンと開発チームとしてできる範囲の調整など、開発全体をリードする貴重な経験となりました。",
          "判断すべきことが連続して、メンバーの納得感とスピード感の両立をどのようにコントロールするかを意識していました。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2022/03 - 2022/03",
        projectName: "デスクトップアプリの一部Web化対応",
        purpose: [
          "社内向けのアプリのうち一部機能を外部からも参照したいとの要望を受け、技術選定から納品まで行った。",
        ],
        phase: "要件定義 - リリース",
        teamSize: "1人",
        tech: ["Java ( Spring Boot )", "SQLServer", "HTML", "CSS ( Bootstrap )", "Vue.js"],
        duties: [
          "見積関連資料の作成からリリースまで対応した。",
          "自身で構築し、数回ほど有識者のレビューを依頼しながら開発した。",
        ],
        skills: [
          "顧客折衝",
          "技術選定",
          "アーキテクチャ",
        ],
        comments: [
          "先方の作成資料の不備の指摘や、契約の範囲すれすれの要件追加など、不規則に発生する事象に戸惑いながらの遂行でした。",
          "一方技術視点では、サーバー側はJavaのWebアプリの知見があったため、再度調べつつではありましたが比較的容易に構築できました。",
          "クライアント側では、画面上でのデータ表示条件操作などに対応するためVue.jsを採用し、多少の苦労はしながらもうまく取り入れられたと思います。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2021/11 - 2022/02",
        projectName: "小規模プロジェクト(2)",
        purpose: [
          "自社HPの更新や営業等を行った。",
        ],
        phase: " - ",
        teamSize: "1人",
        tech: ["HTML", "CSS ( Sass )", "jQuery"],
        duties: [
          "デザイン案の作成からコーディングまで実施した。",
          "他社ソリューションの習熟、自社用ドキュメント作成を行った。",
        ],
        skills: [
          "HTML / CSS",
          "営業",
          "見積",
        ],
        comments: [
          "jQueryを含め、自分にとって新しいことを積極的に調べ導入した経験となりました。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2021/04 - 2021/10",
        projectName: "受発注システム 新規開発",
        purpose: [
          "電話等で受け付けていた業務を効率化するため、顧客にアカウントを発行しWeb上で完結するシステムを構築した。",
        ],
        phase: "見積 - リリース",
        teamSize: "1人",
        tech: ["FlutterWeb", "Firebase"],
        duties: [
          "見積関連資料の作成からリリースまで対応した。",
          "FlutterやFirebaseに関する部分は有識者の助言やレビューを受けながら開発を進めた。",
        ],
        skills: [
          "顧客折衝",
          "設計",
          "見積",
        ],
        comments: [
          "想定アクセス回数等を踏まえ、Firebaseによってインフラ構築や運用を簡素化しようとしました。Firebaseとの相性の良さや世界的に採用事例が増えていることからFlutterを採用しました。",
          "結果、以下2点のために困難なプロジェクトとなってしまい、顧客への説明に苦慮しました。。",
          "1点目、有識者との役割分担の不明瞭性。どちらの技術も未経験のため、社長と相談し有識者をアサインしました。アーキテクチャや顧客対応でリードしてもらうつもりでしたが、想定していたよりも関与度が低い状態でした。結局自分で考え顧客とコミュニケーションをとり、レビューのみの対応となり不効率な開発となってしまいました。はっきりと役割分担を合意すべきでした。",
          "2点目、Flutterそのものの日本語対応への優先度の低さ。Flutter独自のレンダリングと相まって、Tabキーを用いた予測変換でバグがありました。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2020/11 - 2021/03",
        projectName: "小規模プロジェクト(1)",
        purpose: [
          "自社HP更新および顧客HPの環境移行等を行った。",
          "ビジネスマッチングサイトを利用した営業も並行して実施した。",
        ],
        phase: " - ",
        teamSize: "2人",
        tech: ["HTML", "CSS ( Sass )", "jQuery"],
        duties: [
          "自社HPでは先輩の指導の下、デザイン案の作成からコーディングまで実施した。",
          "顧客HPの環境移行では先輩と協働して、移行方法の検討からコーディングまで実施した。",
          "ビジネスマッチングサイトではサイト上での提案や見積等を行った。",
        ],
        skills: [
          "HTML / CSS",
          "営業",
          "見積",
        ],
        comments: [
          "以前からHTMLやCSSには触れていたものの、様々なタグやCSSのプロパティを調べ、かつ理解しながら開発する経験となりました。",
          "自社HP更新では特に既存のSassでページごとに個性にあふれており、フロントエンド開発の難しさとアーキテクトの大切さを感じました。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2020/01 - 2020/09",
        projectName: "警備会社管理業務支援システム Salesforce環境移行等",
        purpose: [
          "警備会社を管理するシステムにおいて、警備会社入れ替えのための調査・改修や、環境移行（Classic⇒Lightning）および追加要件の対応を行った。",
        ],
        phase: "要求分析-基本設計、運用・保守",
        teamSize: "4人",
        tech: ["Salesforce ( Apex, Visualforce )", "VBA"],
        duties: [
          "調査・改修では、PMの助言の下、課題の整理や対応案の策定、スケジューリングやSandobox（テスト環境）でのテストの計画と実施等の諸作業を主導した。",
          "環境移行および追加要件では、メンバーとして影響調査や議事録作成、資料作成等を行った。後輩への作業割り振りも担当した。",
        ],
        skills: [
          "資料作成",
          "顧客折衝",
          "議事録",
          "Salesforce",
        ],
        comments: [
          "本格的に顧客と対応する最初の経験になり、対面、web会議、電話、メールを駆使し意思疎通を行いました。",
          "警備会社入れ替えではタイトなスケジュールとなっており、シナリオテストでNGとなったケースについて原因分析、対応案の検討、顧客への説明など、切迫しながらもなんとか乗り越えました。",
          "複数案用意することで納得感のある選択をしていただけることや、たたき台を用意することで認識齟齬の少ないコミュニケーションを実現できる場合があることなどを学びました。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2019/01 - 2019/12",
        projectName: "家庭用電力小売ポータルサイト 運用・保守",
        purpose: [
          "SAPと連携したシステムのうち、ポータルサイトの運用・保守を行った。",
        ],
        phase: "運用・保守",
        teamSize: "2人",
        tech: ["Java ( Liferay, Spring Boot )", "SQLServer", "Apache"],
        duties: [
          "手順書に従ったSQL文実行や、文言変更等に対応した。",
          "アラートメールを起因にした、webログやアプリログの分析や問題となるコードの調査等を行った。",
        ],
        skills: [
          "電話対応",
          "メール送信による合意内容の確認",
          "日次ミーティングでのファシリテート",
          "ログの分析",
        ],
        comments: [
          "在任中に、グローバル変数の共有によって、同時アクセス時に別アカウントの情報が漏洩してしまう障害が発生しました。（後述のNo.1のプロジェクトのリリースに伴う障害）",
          "それまでログに慣れ親しんでいたため、ログの出力条件やタイミングをもとに該当アカウントのIDを特定し、顧客への影響を最小限にする一助とすることができました。",
        ]
      }
    );
    state.careerContent.push(
      {
        period: "2018/06 - 2018/12",
        projectName: "家庭用電力小売ポータルサイト PMI対応",
        purpose: [
          "経営統合に伴ったシステム改修のうち、ポータルサイトの対応を行った。",
        ],
        phase: "開発-リリース",
        teamSize: "3-8人",
        tech: ["Java ( Liferay, Spring Boot )", "SQLServer"],
        duties: [
          "一般的ウォーターフォール型開発に従って進めた。",
          "開発、単体テスト、結合テストを行い、チームリーダーのレビューを受け必要に応じて修正を行った。",
          "既存のコードに対して、複数ブランドに対応できるよう、アカウント情報に紐づくSQL文の変更、描画内容やメール出力内容の切り替え等を行った。",
          "WebAPIやバッチ改修等も担当した。",
        ],
        skills: [
          "EclipseやSVNなどの開発基本ツール",
          "MVCの考え方、実装",
          "Java",
          "SQL、DB設定",
        ],
        comments: [
          "研修直後で現場のコードはどんなものだろうと思いながら参画しました。パッと見て全く分からず、ただそれは他のメンバーも同様でした。",
          "そこで、動きをひとつ一つ確認しつつ、チームで知見を共有しながら開発していきました。",
          "コードも資料も全体を確認しながら部分を見ていくことで理解が深まることを感じました。",
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
