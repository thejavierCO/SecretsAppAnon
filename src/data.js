import {isSingIn,login,exit,user,storage} from "./stacks.js"
import {readable,writable,get,derived} from "svelte/store";

export const Auth = ()=>{
    const {subscribe} = readable(false,set=>set(isSingIn()));
    return {subscribe}
}

export const BtnAuth = derived(Auth(),Auth=>{
    if(Auth)return exit;
    else return login; 
})

export const BtnAuthText = derived(Auth(),Auth=>{
    if(Auth)return "cerrar sesion";
    else return "iniciar session"; 
})

export const AuthUser = derived(Auth(),Auth=>{
    if(Auth)return user().username;
    return "";
})

export const AuthStorage = derived(Auth(),Auth=>{
    let files = [];
    if(Auth)return storage
    .listFiles(e=>{console.log(e);files.push(e);return true;})
    .then(_=>files.map(e=>storage.getFile(e,{decrypt:false})));
    else return false
})