<template>
  <div class="login">
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
      <button class="btn btn-primary" @click="login">login</button>
    </div>
    <div class="mb-3">
      <router-link to="signup" class="nav-link fw-normal">
        アカウント作成
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '@/firebase/config';
import { doc, getDoc } from "firebase/firestore";

export default defineComponent({
  setup() {
    const state = reactive<{
      email: string,
      password: string,
      errorMessage: string
      }>({
      email: '',
      password: '',
      errorMessage: ''
    });

    return { state };
  },
  name: 'LoginComponent',
  mounted: async function() {
    // TODO dbを呼ばずに実行する
    const docRef = doc(db, "trashTypes", "bottles");
  },
  methods: {
    login: function () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          this.$router.push({ name: 'home', params: {} })
        })
        .catch((error) => {
          const errorCode = error.code;
          this.state.errorMessage = error.message;
        });
    }
  }
});
</script>
