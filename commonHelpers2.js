import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},a="feedback-form-state",o=document.querySelector(".feedback-form");m();o.addEventListener("input",s);o.addEventListener("submit",n);function s(e){t.email=e.currentTarget.elements.email.value.trim(),t.message=e.currentTarget.elements.message.value.trim();try{localStorage.setItem(a,JSON.stringify(t))}catch{console.log(err);return}}function n(e){e.preventDefault();const r=e.currentTarget.elements.email.value.trim(),l=e.currentTarget.elements.message.value.trim();if(!r||!l)return alert("Fill please all fields");console.dir(t),localStorage.removeItem(a),e.currentTarget.reset()}function m(){let e={};try{e=JSON.parse(localStorage.getItem(a))}catch{console.log(err);return}if(e)for(const r in e)o.elements[r].value=e[r]}
//# sourceMappingURL=commonHelpers2.js.map