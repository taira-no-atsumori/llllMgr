<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="elevation-12">
          <v-toolbar color="pink" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
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
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="pink" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarMessage }}
      <template #actions>
        <v-btn variant="text" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { rtdb } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import { useRouter } from 'vue-router';

interface FirebaseError {
  code: string;
  message: string;
}

const id = ref('');
const password = ref('');
const store = useStateStore();
const router = useRouter();
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('error');

const login = async () => {
  const auth = getAuth(rtdb.app);
  // IDがメールアドレス形式でない場合、ドメインを付与する
  // ※Firebase Authに登録されているドメインに合わせて変更してください
  const email = id.value.includes('@') ? id.value : `${id.value}@llllMgr.com`;

  try {
    await signInWithEmailAndPassword(auth, email, password.value);
    snackbarMessage.value = 'ログインしました';
    snackbarColor.value = 'success';
    snackbar.value = true;

    setTimeout(() => {
      store.switchDialog(false);
      router.push({ name: 'AddData' });
    }, 1000);
  } catch (e) {
    console.error(e);
    const error = e as FirebaseError;
    let message = 'ログインに失敗しました';

    switch (error.code) {
      case 'auth/invalid-email':
        message = 'メールアドレスの形式が正しくありません。';
        break;
      case 'auth/user-disabled':
        message = 'このユーザーは無効化されています。';
        break;
      case 'auth/user-not-found':
        message = 'ユーザーが見つかりません。';
        break;
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        message = 'パスワードまたはIDが間違っています。';
        break;
      default:
        message += `: ${error.message}`;
    }
    snackbarMessage.value = message;
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};
</script>
