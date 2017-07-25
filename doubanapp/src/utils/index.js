function formatDate(time) {
	//传入时间戳
	let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//从url中获取参数
function getParamsFromUrl(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//setCookie
function setCookie(key, value, days) {
	let expires = '';
	if(days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = `; expires=${date.toGMTString()}`;
		document.cookie = `${key}=${value + expires}; path=/`;
	}
}
//readCookie
function readCookie(name) {
	let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
//clearCookie
function eraseCookie(key, isAll) {
	setCookie(key, "", -1);
}
// const setData
export {
	formatDate,
	getParamsFromUrl,
	setCookie,
	eraseCookie
}