import originJSONP from 'jsonp'
//试用jsonp做前后端数据交互，封装promise
export default function jsonp(url, data, option){

  url+=(url.indexOf('?')<0?'?':'&')+param(data)

  return new Promise( (resolve,reject)=>{
    originJSONP(url, option,(error,data)=>{
      if(!error){
        resolve(data)
      }else{
        reject(err)
      }
    })
  } )
}

function params(data){
  let url = ''
  for(var k in data){
    let value = data[i]!==undefined ? data[k]:''
    url+=`&${k}=${encodeURIComponent(value)}`
  }
  return url?url.substring(1):''
}
