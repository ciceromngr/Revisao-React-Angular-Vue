<template>
  <div class="login">
      <img src="../../../assets/home-hero.png" alt="" />
      <h1>Login</h1>
      <form @submit.prevent="submit()">
          <div class="email">
              <input type="email"
                  placeholder="Email"
                  v-model= "form.email"
              />
          </div>
          <div class="senha">
              <input type="password"
                  placeholder="Senha"
                  v-model="form.password"
              />
          </div>
          <div class="button">
              <button>Logar</button>
          </div>
      </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionSetuser']),
    submit () {
      this.ActionDoLogin(this.form)
    }
  }
}
</script>

<style>
img {
    max-width: 350px;
    max-height: 350px;
}

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    color: #f3f3f3;
    margin-bottom: 1rem;
    font-weight: bold;
}

.email input , .senha input{
    outline: none;
    border: none;
    border-bottom: 1px solid #0fbe0f;
    margin-bottom: 1rem;
    padding: 0.4rem;
    border-radius: 5px;
    color: #7F68D2;
    font-weight: bold;
    background-color: #f3f3f3;
}

button {
    width: 100%;
    padding: 0.4rem;
    border: none;
    border-radius: 5px;
    background: rgb(15, 190, 15);
    color: #f3f3f3;
    font-weight: bold;
    transition: 0.3s;
}

button:hover {
    background: rgba(15, 190, 15,.7);
}
button:active {
    box-shadow:  inset -2px -2px 6px rgba(255,255,255,0.05),
                  inset 2px 2px 6px rgba(0,0,0,0.5);
}
</style>
