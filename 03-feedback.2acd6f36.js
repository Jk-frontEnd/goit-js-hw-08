!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=NaN,a="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return v.Date.now()};function S(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=b();if(g(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&r?v(e):(r=o=void 0,u)}function h(){var e=b(),n=g(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(S,t),s?v(e):u}(l);if(d)return f=setTimeout(S,t),v(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=O(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:T(b())},h}function j(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&g.call(t)==a}(t))return o;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var i=l.test(t);return i||c.test(t)?s(t.slice(2),i?2:8):f.test(t)?o:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};document.querySelector(".feedback-form");var T="feedback-form-state",h={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),message:document.querySelector("textarea")};h.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(T),E.email=h.email.value,E.message=h.message.value,e.currentTarget.reset()})),h.form.addEventListener("input",e(t)((function(e){E[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(E))}),500));var w,x,E={email:"",message:""};w=localStorage.getItem(T),(x=JSON.parse(w))&&(E=x,h.email.value=x.email||"",h.message.value=x.message||"",E=x.email||"",E=x.message||"")}();
//# sourceMappingURL=03-feedback.2acd6f36.js.map