const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL

export const AppApi = {
  auth: {
    signup: APP_BASE_URL + "/auth/signup",
    changePassword: APP_BASE_URL + "/auth/change-password",
  },
}