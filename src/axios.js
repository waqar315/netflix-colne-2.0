import axios from "axios";

// base url to make requests to the  movies database //
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

// instance.get('foo-bar')
//
// it seem look like that "https://api.themoviedb.org/3/foo-bar"

export default instance