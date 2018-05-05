import API from '../../api'
import axios from 'axios'


export function getNowplayingList(page){
return new Promise((resolve,reject)=>{
    axios.get(API.NOW_MOVIES,{
        params: {
            page:page,
            count:7
        }    
    })
    .then(response=>{
        let NewData = response.data.data.films.map(item=>{
            return {
                cinemaCount:item.cinemaCount,
                poster:item.poster,
                grade:item.grade,
                intro:item.intro,
                name:item.name,
                watchCount:item.watchCount
            }
        })
        resolve(NewData)
    })
    .catch(error=>{
        console.log(error)
    })
})
}