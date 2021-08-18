// Guardar cache dinamico

function actualizaCacheDinamico( dynamicChahe, req, res){


    if(res.ok){
        caches.open( dynamicChahe).then( cache => {

            cache.put( req, res.clone());
            return res.clone();
        })
    }
    else{
        return res;
    }
}