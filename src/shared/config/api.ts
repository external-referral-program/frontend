export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000',

  VACANCIES_ENDPOINT: '/api/vacancies-list/',
  CITIES_ENDPOINT: '/api/cities-list/',

  SEND_REGISTRATION_CODE_ENDPOINT: 'api/referer/send-registration-code/',
  SEND_PASSWORD_RESET_CODE_ENDPOINT: 'api/referer/send-password-reset-code/',
  REGISTER_USER_ENDPOINT: 'api/referer/registration/',
  LOG_OUT_USER_ENDPOINT: 'api/referer/logout/',
  PASSWORD_RESET_ENDPOINT: 'api/referer/password-reset/',
  SIGN_IN_USER_ENDPOINT: 'api/referer/login/',
  RECOMMEND_REFERRAL: 'api/referer/recommendation/',
  REFERRALS_ENDPOINT: 'api/referer/referrals/',
  SEND_ACCOUNT_DELETE_CODE_ENDPOINT: 'api/referer/send-account-delete-code/',
  ACCOUNT_DELETE_ENDPOINT: 'api/referer/account-delete/',

  REFERRAL_PAYMENT_ENDPOINT_FIRST_PART: 'api/referer/referal/',
  REFERRAL_PAYMENT_ENDPOINT_LAST_PART: '/payment/',
}
