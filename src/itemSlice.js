import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const getText = 'https://animechan.vercel.app/api/quotes';
const getImage = 'https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'; // url proxy для локального разворота


export const itemSlice = createSlice({
    name: 'allData',
    initialState: {
        value: [],
        like: false,
        loading: true
    },
    reducers: {
        liked: (state, action) => {
            const id = action.payload;
            if (state.value.length && state.value[id].hasOwnProperty("isLiked")) {
                state.value[id].isLiked = !state.value[id].isLiked;
            }
        },
        remove: (state, action) => {
            const id = action.payload;
            return { ...state, value: [...state.value.slice(0, id), ...state.value.slice(id + 1)] };
        },
        setData: (state, action) => ({ ...state, value: [...state.value, ...action.payload], loading: false }),
        toggleLike: (state) => ({ ...state, like: !state.like })
    },

})

// Action creators are generated for each case reducer function
export const { liked, remove, setData, toggleLike } = itemSlice.actions

export const getFirstData = state => dispatch => {
    let image = null;
    let text = null;

    axios.get(PROXY_URL + getImage, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }).then(responseImage => {
        image = responseImage.data;

        axios.get(PROXY_URL + getText, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(responseText => {
            text = responseText.data;

            let result = text.map((item, index) => {
                return { ...item, img: image[index], isLiked: false }
            })
            dispatch(setData(result));
        })
    })
};

export const selectValue = state => state.allData.value;
export const selectLike = state => state.allData.like;
export const selectLoading = state => state.allData.loading;

export default itemSlice.reducer