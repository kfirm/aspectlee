const State={BEFORE:"BEFORE",AFTER:"AFTER"};class Executor{constructor(t,e){this.name=e,this.reference=t,this.setState(State.BEFORE)}getName(){return this.name}setName(t){this.name=t}getParams(){return this.params}setParams(t){this.params=t}getResult(){return this.result}setResult(t){this.result=t,this.setState(State.AFTER)}getState(){return this.state}setState(t){this.state=t}getContext(){return{name:this.name,state:this.getState(),params:this.getParams(),result:this.result}}toString(){this.reference.toString()}}class Utils{stringifyArgs(t){let e=[];for(let s=0;s<t.length;s++)switch(e.push(t[s]),typeof t[s]){case"object":e[s]=JSON.stringify(e[s])}return e}}class Interceptor{constructor(t,e,s){this.execution=new Executor(t,e),this.setInterception(t),s&&(this.printCallBack=s),this.before(this.printCallBack),this.after(this.printCallBack)}setInterception(t){this.interceptor=((...e)=>{const s=(new Utils).stringifyArgs(e);this.execution.setParams(s),this.beforeCallback(this.execution.getContext()),this.execution.setResult(t.apply(this,e)),this.afterCallback(this.execution.getContext())})}before(t){return t&&"function"==typeof t&&(this.beforeCallback=t),this}after(t){return t&&"function"==typeof t&&(this.afterCallback=t),this}getInterceptor(){return this.interceptor}printCallBack(t){switch(t.state){case State.BEFORE:console.log(`Executing function '${t.name}' with parameters: ${t.params}.`);break;case State.AFTER:const e=t.result;console.log(`Finished executing '${t.name}' with parameters: ${t.params}. Result: ${"object"==typeof e?JSON.stringify(e):e}`)}}}class AspectleeClass{constructor(t,e){const s=Object.getPrototypeOf(t);Object.getOwnPropertyNames(s).forEach(s=>{if("function"==typeof t[s]){const r=new Interceptor(t[s],s,e);t[s]=r.getInterceptor()}})}}function Aspectlee(t,e){return new AspectleeClass(t,e)}export{Aspectlee,State};