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
  return n[1] ? n : `0${n}`
}
//从url中获取参数
function getParamsFromUrl(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp(`[\\?&]${name}=([^&#]*)`),
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
	let nameEQ = `${name}=`
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





//DOM相关

//视口尺寸
function getViewportOffset() {
	if(window.innerWidth) {
		return {
			x: window.innerWidth,
			y: window.innerHeight
		}
	}
	if(document.compatMode == ' CSS1Compat') {
		return {
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight
		}
	}else if(document.compatMode == 'BackCompat') {
		return {
			w: document.body.clientWidth,
			h: document.body.clientHeight
		}
	}
}

//查看元素几何尺寸
function getElementOffset(ele) {
	let box = ele.getBoundingClientRect();
	let w = box.width || (box.right - box.left);
	let h = box.height || (box.bottom - box.top);
	return {
		w,
		h
	}
}
//获取元素相对于文档的坐标

function getElementPosition(ele) {
	let x = 0;
	let y = 0;
	while(ele != document.body) {
		x += ele.offsetLeft;
		y += ele.offsetTop;
		ele = ele.offsetParent;
	}
	return {
		x,
		y
	}
}

//查询样式
function getStyle(obj, styleProp) {
	if(obj.currentStyle) {
		return obj.currentStyle[styleProp];
	}else {
		return window.getComputedStyle(obj, null)[styleProp];
	}
}

//常用方法
export {
	formatDate,
	getParamsFromUrl,
	setCookie,
	eraseCookie
}

//DOM相关
export {
	getViewportOffset,//视口尺寸
	getElementOffset,//查看元素几何尺寸
	getElementPosition,//获取元素相对于文档的坐标
	getStyle,//查询样式

}










