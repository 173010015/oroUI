import axios from "axios";

/**
 * 
 */
const api = axios.create({
    baseURL: "https://oro-api-qa.herokuapp.com"
})

api.interceptors.request.use(req => {
    console.log(`${req.method} ${req.baseURL}${req.url}`);
    req.headers.Authorization = 'Token '+ localStorage.getItem('token');
    return req;
  });

  api.interceptors.response.use(res => {
    console.log(res.data.json);
    return res;
  });

  api.interceptors.response.use(undefined,error=>{
    const{status} =error.response;

    if(status === 400){
         throw Error('Server Error- Validation not proper');
    }
  })

  export default api;