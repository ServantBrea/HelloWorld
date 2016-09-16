console.log("Please give a number!");
var num:number=5;

B(5);    
    
function B(n:number){
    var i:number;
    var j:number;
    var k:number;
    var x:string=" ";
    var y:string="*";
    
    for(i=0;i<n;i++){
        var a:string="";
        
        for(j=0;j<n-(i+1);j++){
            a=a+x;
        }//画前空格
        
        for(k=0;k<i+1;k++){
            a=a+y;
            if(k<i){
                a=a+x;
            }
        }//画*串
        
        for(j=0;j<n-(i+1);j++){
            a=a+x;
        }//画后空格
            
        console.log(a);
    }
}
