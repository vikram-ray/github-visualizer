import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import {toast} from 'react-toastify'

export const counterSlice = createSlice({
  name: 'visualizer',
  initialState: {
    loading: false,
    username: '',
    repo: [],
    profile: null,
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
    clearValues: state => {
      state.profile = null;
      state.repo = []
    },
    setusername: (state, action) => {
      state.username = action.payload;
    },
    setrepo: (state, action) => {
      state.repo = action.payload;
    },
    setprofile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { toggleLoading, setusername, setrepo, setprofile, clearValues } = counterSlice.actions;

export const getAndSetUsername = username => dispatch => {
    dispatch(toggleLoading())
    // TODO maximum of 100 repos are PublicKeyCredential, needs pagination
    const repoUrl = `https://api.github.com/users/${username}/repos?sort=created&per_page=100`
    const profileUrl = `https://api.github.com/users/${username}`

    const requestOne = Axios.get(repoUrl);
    const requestTwo = Axios.get(profileUrl);

    Axios.all([requestOne, requestTwo]).then(Axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        dispatch(setrepo(responseOne.data))
        dispatch(setprofile(responseTwo.data))
      })).catch(error => {
        const status = error.response.status
        if(status === 404) {
            toast.error(`No user found with id ${username}`)
        }else{
            toast.error("Something went wrong")
        }
        console.log(error);
      }).finally(()=>{
        dispatch(toggleLoading())
    })
};

export default counterSlice.reducer;
