import axios from 'axios'

export default axios.create({
  baseURL: 'https://myallies-breaking-news-v1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '665e03e2eamsh891a6bae9728b2bp1544cejsna69a9801b320'
  }
})
