import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const URL_LOGIN = '/auth/v1/token?grant_type=password'
export const URL_REGISTER = '/auth/v1/signup'
export const URL_VERIFY_EMAIL = '/auth/v1/verify'
export const URL_LOGOUT = '/auth/v1/logout'
export const GET_OTP = '/auth/v1/otp'
export const URL_REFRESH_TOKEN = '/auth/v1/token?grant_type=refresh_token'

const authApi = {
  registerAccount(body: { email: string; password: string; fullName: string; passwordConfirm: string }) {
    return http.post<AuthResponse>(URL_REGISTER, body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>(URL_LOGIN, body)
  },
  logout() {
    return http.post(URL_LOGOUT)
  },
  verify(body: { email: string; encode: string }) {
    return http.post(URL_VERIFY_EMAIL, body)
  },
  getOtp(body: { email: string }) {
    return http.post(GET_OTP, body)
  },
  forgotPassword(body: { email: string }) {
    return http.post('/auth/v1/forgotPassword', body)
  },
  verifyResetPassPage(body: { encode: string }) {
    return http.post('/auth/v1/verifyResetPass', body)
  },
  resetPassword(body: { password: string; passwordConfirm: string }, token: string) {
    return http.patch(`/auth/v1/resetPassword/${token}`, body)
  }
}

export default authApi
