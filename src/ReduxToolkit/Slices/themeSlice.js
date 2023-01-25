import { createSlice } from '@reduxjs/toolkit'
import darkTheme from '../../Themes/dark';
import lightTheme from '../../Themes/light';

const initialState = {
    theme: lightTheme
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: (state) => {
            state.theme = darkTheme
        },
        setLight: (state) => {
            state.theme = lightTheme
        },
        /*incrementByAmount: (state, action) => {
            state.value += action.payload
        },*/
    },
})


export const { setDark, setLight } = themeSlice.actions

export default themeSlice.reducer