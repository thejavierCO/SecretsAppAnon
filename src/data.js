import {isSingIn,login,exit} from "./stacks.js"
import {readable,writable,get,derived} from "svelte/store";

export const Auth = ()=>{
    const {subscribe} = readable(false,set=>{
        set(isSingIn())
    });
    return {subscribe}
}


export const auth = derived(Auth(),(Auth)=>{
    console.log(Auth);
    return Auth;
})