/* eslint-disable no-undef */
export const authStore = defineStore('auth', {
  state: () => ({ user: {}, processing: false }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    currentUser: (state) => state.foods,
  },
  actions: {
    async login(auth) {
      this.processing = true
      const { apiURL } = useRuntimeConfig()

      await $larafetch(`${apiURL}/sanctum/csrf-cookie`)

      await $larafetch(`${apiURL}/login`, {
        method: 'POST',
        body: auth,
      })

      this.user = await $larafetch(`${apiURL}/user`)

      this.processing = false

      useRouter().push('/cookbook')
    },
  },
})
