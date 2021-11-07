import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const getText = 'https://animechan.vercel.app/api/quotes';
const getImage = 'http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true';
const PROXY_URL = 'https://thingproxy.freeboard.io/fetch/'; // url proxy для локального разворота


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

    axios({
        method: 'get',
        // url: PROXY_URL + getImage // для локального разворота
        url: getImage
    }).then(responseImage => {
        image = responseImage;
        axios({
            method: 'get',
            // url: PROXY_URL + getText // для локального разворота
            url: getText
        }).then(responseText => {
            text = responseText;
            let result = text.data.map((item, index) => {
                return { ...item, img: image.data[index], isLiked: false }
            })
            dispatch(setData(result))
        })
    })
};

export const selectValue = state => state.allData.value;
export const selectLike = state => state.allData.like;
export const selectLoading = state => state.allData.loading;

export default itemSlice.reducer