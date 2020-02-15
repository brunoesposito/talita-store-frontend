export const TOKEN_KEY = "@talita-Token";
export const IS_ADMIN = "@talita-IsAdmin";
export const NAME = "@talita-Name";
export const EMAIL = "@talita-Email";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, isAdmin, Name, Email) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(IS_ADMIN, isAdmin);
    localStorage.setItem(NAME, Name);
    localStorage.setItem(EMAIL, Email);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(IS_ADMIN);
    localStorage.removeItem(NAME);
    localStorage.removeItem(EMAIL);
};