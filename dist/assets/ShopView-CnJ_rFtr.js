import{r as o,u as N,f as j,j as c}from"./index-CjE8HMBi.js";import{S}from"./shield-check-YeFxrUIr.js";/*!
 * react-paypal-js v9.1.0 (2026-03-25T13:36:23.878Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"})(x||(x={}));var v;(function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"})(v||(v={}));var C;(function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"})(C||(C={}));var l=function(e,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&(r[p]=n[p])},l(e,t)};function k(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");l(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}o.createContext(null);o.createContext({});(function(e){k(t,e);function t(r){var n=e.call(this,r)||this;return n.state={hasError:!1},n}return t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.componentDidCatch=function(r,n){console.error("Error in PayPalButtons component:",r,n),typeof this.props.onError=="function"&&this.props.onError({message:r.message,name:r.name,stack:r.stack,componentStack:n.componentStack})},t.prototype.render=function(){return this.state.hasError?null:this.props.children},t})(o.Component);function g(){}o.createContext({cardFieldsForm:null,fields:{},registerField:g,unregisterField:g});function P(){const{coins:e,addCoins:t,isPremium:r,setPremium:n,forceSync:p,isSaving:R}=N(),{notifySuccess:m,notifyError:b}=j(),[a,w]=o.useState(!1),[u,h]=o.useState(30),E=o.useRef(null);return o.useEffect(()=>{let s;return a&&u>0?s=setInterval(()=>{h(d=>d-1)},1e3):a&&u===0&&(w(!1),t(5e4),m("Reward Claimed! +50,000 Coins"),h(30)),()=>clearInterval(s)},[a,u,e,t,m]),o.useEffect(()=>{if(a&&E.current){const s=E.current;s.innerHTML="";const d="adsterra-reward-ad-ca59b0dcdd453b6300a8f085b2df6f47",y=document.createElement("div");y.id=d,s.appendChild(y);const f=document.createElement("script");f.type="text/javascript",f.text=`
        atOptions = {
          'key' : 'ca59b0dcdd453b6300a8f085b2df6f47',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;const i=document.createElement("script");i.type="text/javascript",i.src="https://www.highperformanceformat.com/ca59b0dcdd453b6300a8f085b2df6f47/invoke.js",i.async=!0,i.defer=!0,s.appendChild(f),s.appendChild(i)}},[a]),c.jsx("div",{className:"h-full w-full flex items-center justify-center bg-black text-zinc-500 p-8 text-center",children:c.jsxs("div",{children:[c.jsx(S,{size:48,className:"mx-auto mb-4 opacity-20"}),c.jsx("p",{className:"text-sm font-black uppercase tracking-widest",children:"PayPal Not Configured"}),c.jsx("p",{className:"text-[10px] mt-2 uppercase tracking-widest opacity-60",children:"Please set VITE_PAYPAL_CLIENT_ID in environment variables"})]})})}export{P as default};
