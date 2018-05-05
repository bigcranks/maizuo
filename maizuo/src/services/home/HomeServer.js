import API from '../../api'
import axios from 'axios'

//轮播图
export function getBannerList(){
return new Promise((resolve,reject)=>{
    axios.get(API.IMG_HOST,{
        params: {
            __t: 1524816182875
        }    
    })
    .then(response=>{
		let NewData = response.data.data.billboards.map(item=>{
            return {
                imageUrl:item.imageUrl
            }
        })
        resolve(NewData)
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//首页热映
export function getMainTopList(){
return new Promise((resolve,reject)=>{
    axios.get(API.HOME_MOVIES,{
        params: {
            __t: 1524816182875,
            page:1,
            count:5
        }    
    })
    .then(response=>{
        let NewData = response.data.data.films.map(item=>{
            return {
                cinemaCount:item.cinemaCount,
                cover:item.cover,
                grade:item.grade,
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

//首页即将上映
function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)+'月';
    var D = date.getDate()+'日';
    return M+D;
}
export function getMainBottomList(){
return new Promise((resolve,reject)=>{
    axios.get(API.HOME_CINEMA,{
        params: {
            __t: 1524816182875,
            page:1,
            count:3
        }    
    })
    .then(response=>{
        let NewData = response.data.data.films.map(item=>{
            return {
                cover:item.cover,
                name:item.name,
                premiereAt:timestampToTime(item.premiereAt)
            }
        })
        resolve(NewData)
    })
    .catch(error=>{
        console.log(error)
    })
})
}