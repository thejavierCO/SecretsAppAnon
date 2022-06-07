import { login , exit , user , storage } from "./stacks.js"
import { writable , derived } from "svelte/store";

export const auth = writable(false);

export const BtnAuth = derived(auth,auth=>{
    if(auth)return exit;
    else return login; 
})

export const BtnAuthText = derived(auth,auth=>{
    if(auth)return "cerrar sesion";
    else return "iniciar session"; 
})

export const AuthUser = derived(auth,auth=>{
    if(auth)return user().username;
    return "";
})

export const AuthStorage = derived(auth,auth=>{
    let files = [];
    if(auth)return storage
    .listFiles(e=>{console.log(e);files.push(e);return true;})
    .then(_=>files.map(name=>storage.getFile(name,{decrypt:false}).then(e=>({[name]:e}))));
    else return false
})