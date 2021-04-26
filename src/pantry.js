let key = "2f732038-3dea-4986-8888-6f31ffd8c927";

class PanTry{
    constructor(key=""){
        this.url = `https://getpantry.cloud/apiv1/pantry/${key}`;
    }
    async get(basket){
        const url = this.url+"/basket/"+basket;
        return await fetch(url).then(e=>e.json());
    }
    async set(basket,data){
        const url = this.url+"/basket/"+basket;
        return await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(e=>e.json());
    }
    async del(basket){
        const url = this.url+"/basket/"+basket;
        return await fetch(url,{method:"DELETE"}).then(e=>e.json());
    }
    async put(basket,data){
        const url = this.url+"/basket/"+basket;
        return await fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(e=>e.json());
    }
}

export const Control = new PanTry(key);