import axios from 'axios'
const api = axios.create({
  baseURL: 'https://tarefa-backend-f316df2.herokuapp.com'
})

export default api;