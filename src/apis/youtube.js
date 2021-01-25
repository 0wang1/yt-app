import axios from 'axios';

const KEY = 'AIzaSyAMdPXqNDZrxyi2kLS6L0k-igBnK91_ABk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    }
});