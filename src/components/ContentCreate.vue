<template>
  <div class="content-create">
    <div class="mb-3">
      <p v-if="state.errorMessage">{{ state.errorMessage }}</p>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="state.email">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="state.password">
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" @click="signUp">signup</button>
    </div>
    <div class="mb-3">
      <router-link to="/" class="nav-link fw-normal">
        ログイン
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ComponentP from '@/components/utils/ComponentP.vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '@/firebase/config';
import { doc, getDoc } from "firebase/firestore";

export default defineComponent({
  setup() {
    const state = reactive<{
        inputType: string[],
        order: number,
        content: string,
        project: any,
        errorMessage: string
      }>({
        inputType: ["summaryContent", "knowledgeContent", "certificationContent", "careerContent", "prContent"],
        order: 1,
        content: '',
        project: {
          period: "",
          projectName: "",
          purpose: [],
          phase: "",
          teamSize: "",
          tech: [],
          duties: [],
          skills: [],
          comments: [],
        },
        errorMessage: ''
      });

    return { state };
  },
  name: 'ContentCreate',
  components: {
    ComponentP,
  },
  mounted: async function() {
    // TODO dbを呼ばずに実行する
    const docRef = doc(db, "trashTypes", "bottles");
  },
  methods: {
    signUp: function () {
      const auth = getAuth();
      /* createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          this.state.errorMessage = error.message;
        });*/
    }
  }
});
</script>
