export const setFormatTime = (dateStr,formaTime) =>{
	let time = new Date(parseInt(dateStr))
	let format = formaTime ? formaTime : 'yyyy-MM-dd h:m:s'
	let date = {
              "M+": time.getMonth() + 1,
              "d+": time.getDate(),
              "h+": time.getHours(),
              "m+": time.getMinutes(),
              "s+": time.getSeconds(),
              "q+": Math.floor((time.getMonth() + 3) / 3),
              "S+": time.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (let k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}
export const getCurrentDay=()=>{
       let myDate=new Date();
       let CurrentDay=myDate.getFullYear()+'-'+(myDate.getMonth+1)+'-'+myDate.getDate;
}