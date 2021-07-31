import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import  {ReducerActions}  from '../store/reducers/reducer';


export const api = axios.create({
    baseURL: 'https://api.github.com/users'
    //baseURL : 'http://torneiosplus.herokuapp.com/'
   // baseURL: 'http://192.168.0.16/api/php/'
});



export async function loadRepo(){
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.reducer);
    const [user, setUser] = useState(reducer.user);
    const [repo, setRepo] = useState(reducer.user);
    


    try{
        const response = await api.get(`/${user}/repos`)
        if (response.data){
            dispatch(ReducerActions.changeRepo(response.data))
        }
    }catch{
        console.log('error')
    }
    /* 
       
    await api.get(`/${user}/repos`)
    .then(function (response) {
            console.log(response);
            
            setRepo(response.data);
            console.log(data)              
            dispatch(ReducerActions.changeRepo(repo))
            
        })
    .catch(function (error) {
        console.log(error)    
    }); */

   
}
