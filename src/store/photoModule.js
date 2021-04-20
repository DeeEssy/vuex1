import axios from "axios"

export default {
    state: {
        photos: [],
        dialog: false,
        currentPhoto: {}
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload;
        },
        showDialog(state) {
            state.dialog = true;
        },
        hideDialog(state) {
            state.dialog = false;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto =  payload;
        }
    },
    getters: {
        getAllPhotos(state) {
            return state.photos;
        },
        getDialog(state) {
            return state.dialog;
        },
        getCurrentPhoto(state) {
            return state.currentPhoto;
        }
    },
    actions: {
        fetchPhotos(context) {
            axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/photos?_limit=12",
            })
                .then((res) => {
                    context.commit('setPhotos', res.data)
                })
        }
    }
}