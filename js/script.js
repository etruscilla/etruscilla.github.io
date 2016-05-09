(function(){  
var a = document.querySelector('#navigation'), b = null;  
window.addEventListener('scroll', scrolling, false);
document.body.addEventListener('scroll', Ascroll, false);  
function scrolling() {
  if (b == null) {  
    var aStyle = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < aStyle.length; i++) {  
      if (aStyle[i].indexOf('padding') == 0 || aStyle[i].indexOf('box-shadow') == 0 || aStyle[i].indexOf('background') == 0) {
        s += aStyle[i] + ': ' + aStyle.getPropertyValue(aStyle[i]) + '; '
      }
    }
    b = document.createElement('div'); 
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);  
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) { 
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';  
    a.style.padding = '0';
    a.style.border = '0'; 
  }
  if (a.getBoundingClientRect().top <= 0) { 
    b.className = 'sticky';
  } else {
    b.className = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);  
}
})()
