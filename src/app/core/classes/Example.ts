export default class Example {
    private example:string;
    constructor() {
        
    }

    setExample(ex:string){
        this.example = ex;
    }

   getExample():string{
       return this.example;
   }
}