type TokenType = string;

const TOKEN_KEY = 'access_token';

export const tokenStorage = {
  get: (): TokenType | null => {
    const item = localStorage.getItem(TOKEN_KEY);
    return item ? JSON.parse(item) as TokenType : null;
  },
  set: (token: TokenType): void => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  },
  remove: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
