import { createSlice } from '@reduxjs/toolkit';
export type ThemeState = 'light' | 'dark';
const initialState: ThemeState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
    setThemeAs: (_, action: { payload: ThemeState }) => action.payload,
  },
});

export const { toggleTheme, setThemeAs } = themeSlice.actions;
export default themeSlice.reducer;
