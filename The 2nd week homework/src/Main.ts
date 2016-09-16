console.log("Please give a number!");

void function BuildPyramid(n:number) {
    var i:number;
    var j:number;
    var k:number;
    var x:string=" ";
    var y:string="*";
    
    for(i=0;i<n;i++){
        
        for(j=0;j<n-(i+1);j++){
            console.log(x);
        }//画前空格
        
        for(k=0;k<i+1;k++){
            console.log(y);
            if(k<i){
                console.log(x);}
        }//画*串
        
        for(j=0;j<n-(i+1);j++){
            console.log(x);
        }//画后空格
            
        console.log("\n");
    }
}
