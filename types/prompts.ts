export interface promptInterface {
    _id: string  ; 
    tag : string; 
    prompt : string ;
    __v ?: number ;
    creator : {
        email : string; 
        image : string ;
        username : string ;
        __v : string ; 
        _id : string
    }
}