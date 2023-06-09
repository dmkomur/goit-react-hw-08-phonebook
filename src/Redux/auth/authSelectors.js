export const authSelector = state => state.auth?.user?.email;
export const loginSelector = state => state.auth.isLogin;
export const tokenSelector = state => state.auth.token;
