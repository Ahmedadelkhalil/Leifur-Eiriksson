(self.webpackChunkleifur_eiriksson=self.webpackChunkleifur_eiriksson||[]).push([[87],{7087:(e,t,r)=>{(()=>{var t={296:(e,t,r)=>{var o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,a=s||l||Function("return this")(),f=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return a.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=i.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var o,n,i,c,u,s,l=0,a=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=o,i=n;return o=n=void 0,l=t,c=e.apply(i,r)}function O(e){var r=e-s;return void 0===s||r>=t||r<0||f&&e-l>=i}function w(){var e=b();if(O(e))return g(e);u=setTimeout(w,function(e){var r=t-(e-s);return f?y(r,i-(e-l)):r}(e))}function g(e){return u=void 0,v&&o?m(e):(o=n=void 0,c)}function P(){var e=b(),r=O(e);if(o=arguments,n=this,s=e,r){if(void 0===u)return function(e){return l=e,u=setTimeout(w,t),a?m(e):c}(s);if(f)return u=setTimeout(w,t),m(s)}return void 0===u&&(u=setTimeout(w,t)),c}return t=h(t)||0,d(r)&&(a=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),P.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=s=n=u=void 0},P.flush=function(){return void 0===u?c:g(b())},P}},96:(e,t,r)=>{var o="Expected a function",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,a="object"==typeof self&&self&&self.Object===Object&&self,f=l||a||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,d=function(){return f.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=c.test(e);return r||u.test(e)?s(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return h(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),function(e,t,r){var n,i,c,u,s,l,a=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function O(t){var r=n,o=i;return n=i=void 0,a=t,u=e.apply(o,r)}function w(e){var r=e-l;return void 0===l||r>=t||r<0||p&&e-a>=c}function g(){var e=d();if(w(e))return P(e);s=setTimeout(g,function(e){var r=t-(e-l);return p?b(r,c-(e-a)):r}(e))}function P(e){return s=void 0,m&&n?O(e):(n=i=void 0,u)}function j(){var e=d(),r=w(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return a=e,s=setTimeout(g,t),f?O(e):u}(l);if(p)return s=setTimeout(g,t),O(l)}return void 0===s&&(s=setTimeout(g,t)),u}return t=v(t)||0,h(r)&&(f=!!r.leading,c=(p="maxWait"in r)?y(v(r.maxWait)||0,t):c,m="trailing"in r?!!r.trailing:m),j.cancel=function(){void 0!==s&&clearTimeout(s),a=0,n=l=i=s=void 0},j.flush=function(){return void 0===s?u:P(d())},j}(e,t,{leading:n,maxWait:t,trailing:i})}},703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,c){if(c!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{LazyLoadComponent:()=>Y,LazyLoadImage:()=>oe,trackWindowScroll:()=>N});const e=r(2791);var t=n.n(e),o=n(697);const c=r(4164);var u=n.n(c);function s(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,y(o.key),o)}}function y(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},v={},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(y,e);var r,o,n,i,c=(n=y,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(i){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function y(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=c.call(this,e)).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&s(),t.supportsObserver){var r=e.threshold;t.observer=function(e){return v[e]=v[e]||new IntersectionObserver(h,{rootMargin:e+"px"}),v[e]}(r)}return t}return r=y,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=u().findDOMNode(this.placeholder).style,o=parseInt(r.getPropertyValue("margin-left"),10)||0,n=parseInt(r.getPropertyValue("margin-top"),10)||0;return{bottom:e.y+t.bottom+n,left:e.x+t.left+o,right:e.x+t.right+o,top:e.y+t.top+n}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,o=this.getPlaceholderBoundingBox(t),n=t.y+window.innerHeight,i=t.x,c=t.x+window.innerWidth,u=t.y;return Boolean(u-r<=o.bottom&&n+r>=o.top&&i-r<=o.right&&c+r>=o.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,r=this.props,o=r.className,n=r.height,i=r.placeholder,c=r.style,u=r.width;if(i&&"function"!=typeof i.type)return t().cloneElement(i,{ref:function(t){return e.placeholder=t}});var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"inline-block"},c);return void 0!==u&&(s.width=u),void 0!==n&&(s.height=n),t().createElement("span",{className:o,ref:function(t){return e.placeholder=t},style:s},i)}}],o&&p(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),y}(t().Component);m.propTypes={onVisible:o.PropTypes.func.isRequired,className:o.PropTypes.string,height:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string]),placeholder:o.PropTypes.element,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,scrollPosition:o.PropTypes.shape({x:o.PropTypes.number.isRequired,y:o.PropTypes.number.isRequired}),width:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string])},m.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const O=m;var w=n(296),g=n.n(w),P=n(96),j=n.n(P),T=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")};const S=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(T(t)))return t;t=t.parentNode}return window};function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}var _=["delayMethod","delayTime"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},L.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function I(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var D=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},C=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};const N=function(e){var r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,r);var o,n,i,c,l=(i=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(i);if(c){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=l.call(this,e)).useIntersectionObserver=e.useIntersectionObserver&&s(),r.useIntersectionObserver)return I(r);var o=r.onChangeScroll.bind(x(r));return"debounce"===e.delayMethod?r.delayedScroll=g()(o,e.delayTime):"throttle"===e.delayMethod&&(r.delayedScroll=j()(o,e.delayTime)),r.state={scrollPosition:{x:D(),y:C()}},r.baseComponentRef=t().createRef(),r}return o=a,(n=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||S(u().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=S(u().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:D(),y:C()}})}},{key:"render",value:function(){var r=this.props,o=(r.delayMethod,r.delayTime,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(r,_)),n=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,L({forwardRef:this.baseComponentRef,scrollPosition:n},o))}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(n=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==E(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===E(n)?n:String(n)),o)}var n}(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),a}(t().Component);return r.propTypes={delayMethod:o.PropTypes.oneOf(["debounce","throttle"]),delayTime:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool},r.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},r};function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var r,o,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(n);if(i){var r=V(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c.call(this,e)}return r=u,(o=[{key:"render",value:function(){return t().createElement(O,this.props)}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(n=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==M(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===M(n)?n:String(n)),o)}var n}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),u}(t().Component);const z=N(W);function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var r,o,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(i){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}(this,e)});function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),t=c.call(this,e);var r=e.afterLoad,o=e.beforeLoad,n=e.scrollPosition,i=e.visibleByDefault;return t.state={visible:i},i&&(o(),r()),t.onVisible=t.onVisible.bind(F(t)),t.isScrollTracked=Boolean(n&&Number.isFinite(n.x)&&n.x>=0&&Number.isFinite(n.y)&&n.y>=0),t}return r=u,(o=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,r=e.className,o=e.delayMethod,n=e.delayTime,i=e.height,c=e.placeholder,u=e.scrollPosition,l=e.style,a=e.threshold,f=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||f&&s()?t().createElement(O,{className:r,height:i,onVisible:this.onVisible,placeholder:c,scrollPosition:u,style:l,threshold:a,useIntersectionObserver:f,width:p}):t().createElement(z,{className:r,delayMethod:o,delayTime:n,height:i,onVisible:this.onVisible,placeholder:c,style:l,threshold:a,width:p})}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(n=function(e,t){if("object"!==$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==$(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===$(n)?n:String(n)),o)}var n}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),u}(t().Component);H.propTypes={afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool},H.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Y=H;function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}var A=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return(t=Z(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Q.apply(this,arguments)}function Z(e){var t=function(e,t){if("object"!==X(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==X(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===X(t)?t:String(t)}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},te(e)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(u,e);var r,o,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=te(n);if(i){var r=te(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===X(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={loaded:!1},t}return r=u,(o=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(t){e.props.onLoad(t),e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,r=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,A));return t().createElement("img",Q({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var e=this.props,r=e.beforeLoad,o=e.className,n=e.delayMethod,i=e.delayTime,c=e.height,u=e.placeholder,s=e.scrollPosition,l=e.style,a=e.threshold,f=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return t().createElement(Y,{beforeLoad:r,className:o,delayMethod:n,delayTime:i,height:c,placeholder:u,scrollPosition:s,style:l,threshold:a,useIntersectionObserver:f,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var r=this.props,o=r.effect,n=r.height,i=r.placeholderSrc,c=r.width,u=r.wrapperClassName,s=r.wrapperProps,l=this.state.loaded,a=l?" lazy-load-image-loaded":"",f=l||!i?{}:{backgroundImage:"url(".concat(i,")"),backgroundSize:"100% 100%"};return t().createElement("span",Q({className:u+" lazy-load-image-background "+o+a,style:J(J({},f),{},{color:"transparent",display:"inline-block",height:n,width:c})},s),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,o=e.visibleByDefault,n=e.wrapperClassName,i=e.wrapperProps,c=this.getLazyLoadImage();return(t||r)&&!o||n||i?this.getWrappedLazyLoadImage(c):c}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Z(o.key),o)}}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),u}(t().Component);re.propTypes={onLoad:o.PropTypes.func,afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,delayMethod:o.PropTypes.string,delayTime:o.PropTypes.number,effect:o.PropTypes.string,placeholderSrc:o.PropTypes.string,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool,wrapperClassName:o.PropTypes.string,wrapperProps:o.PropTypes.object},re.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const oe=re})(),e.exports=i})()}}]);
//# sourceMappingURL=87.f5d48ff3.chunk.js.map