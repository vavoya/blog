// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "@/redux/store";

type ThemeState = {
    mode: 'light' | 'dark';
};
// 카드 그림자 색 추가해야할 듯
const themes = {
    light: {
        mode: 'light',
        backgroundColor1: '#424242',
        backgroundColor2: '#303030',
        color1: '#000000',
        color2: '#FFFFFF',
        color3: '#000000',
        topBarBackgroundColor: '#FFFFFF'
    },
    dark: {
        mode: 'dark',
        backgroundColor1: '#000000',
        backgroundColor2: '#202020',
        color1: '#FFFFFF',
        color2: '#000000',
        color3: '#000000',
        topBarBackgroundColor: '#000000'
    },
};


const initialState: ThemeState = {
    mode: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const selectThemeColors = (state: RootState) => {
    const currentMode = state.theme.mode;
    return themes[currentMode];
};