<template>
  <v-container>
    <v-card class="elevation-12">
      <v-toolbar color="pink" dark flat>
        <v-toolbar-title text="Login" />
      </v-toolbar>

      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
            v-model="id"
            label="ID"
            name="id"
            prepend-icon="mdi-account"
            type="text"
          />
          <v-text-field
            id="password"
            v-model="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn text="Login" color="pink" @click="login" />
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarMessage }}
      <template #actions>
        <v-btn text="Close" variant="text" @click="snackbar = false" />
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { rtdb } from '@/firebase';

import { useStateStore } from '@/stores/stateStore';

import { MESSAGES } from '@/constants/messageConst';

/** DBエラーの型定義 */
interface DBError {
  code: string;
  message: string;
}

const id = ref('');
const password = ref('');
const showPassword = ref(false);
const store = useStateStore();
const router = useRouter();
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

/** ログイン処理 */
const login = async () => {
  const auth = getAuth(rtdb.app);
  const email = id.value.includes('@') ? id.value : `${id.value}@llllMgr.com`;

  try {
    await signInWithEmailAndPassword(auth, email, password.value);
    showSnackbar(MESSAGES.M001, 'success');

    setTimeout(() => {
      store.switchDialog(false);
      router.push({ name: 'AddData' });
    }, 1000);
  } catch (e) {
    console.error(e);
    const error = e as DBError;
    let message = MESSAGES.E006;

    switch (error.code) {
      case 'auth/invalid-email':
        message = MESSAGES.E008;
        break;
      case 'auth/user-disabled':
        message = MESSAGES.E009;
        break;
      case 'auth/user-not-found':
        message = MESSAGES.E010;
        break;
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        message = MESSAGES.E011;
        break;
      default:
        message += `: ${error.message}`;
    }

    showSnackbar(message, 'error');
  }
};

/**
 * スナックバー表示
 *
 * @param message 表示するメッセージ
 * @param color 色
 * @returns void
 */
const showSnackbar = (message: string, color: string) => {
  snackbarMessage.value = message;
  snackbarColor.value = color;
  snackbar.value = true;
};
</script>
