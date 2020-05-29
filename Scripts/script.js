var firstExp=0;
var operationCall=false;
var equalsCall=false;
var preOperator;
function insert(num){
    var s=document.querySelector(".lower-panel");
      if(operationCall==true){
        s.innerHTML="";
        operationCall=false;

   }
   if(equalsCall==true){
     s.innerHTML="";
     document.querySelector(".upper-panel").innerHTML="";
     firstExp=0;
     equalsCall=false;
   }
    s.innerHTML+=num;
}
function operation(operator){
       
        var exp=0;
        exp=document.querySelector(".lower-panel").textContent;
        exp=Number(exp);
         if(operator=="+"){
          if( document.querySelector(".upper-panel").textContent=="")
          {
           document.querySelector(".upper-panel").textContent+=exp;
          }
          else
          {
           document.querySelector(".upper-panel").textContent+="+"+exp;
          }
        document.querySelector(".lower-panel").textContent=Number(exp)+Number(firstExp);
        firstExp+=exp;
        operationCall=true;
        preOperator=operator;
    }

     else if (operator=="-"){
       if( document.querySelector(".upper-panel").textContent=="")
       {
        document.querySelector(".upper-panel").textContent+=exp;
       }
       else
       {
        document.querySelector(".upper-panel").textContent+="-"+exp;
       }
        
        document.querySelector(".lower-panel").textContent=Number(firstExp)-Number(exp);
        if(firstExp!=0){
            firstExp-=exp;
        }
        else
          firstExp+=exp;
          operationCall=true;
          preOperator=operator;
      }
     
       else if(operator=="CE"){
        document.querySelector(".lower-panel").textContent="";
        firstExp=0;
       }

       else if(operator=="C"){
        document.querySelector(".lower-panel").textContent="";
        document.querySelector(".upper-panel").textContent="";
        fiirstExp=0;
       }
        else if (operator=="*"){
          if( document.querySelector(".upper-panel").textContent=="")
          {
           document.querySelector(".upper-panel").textContent+=exp;
          }
          else
          {
           document.querySelector(".upper-panel").textContent+="*"+exp;
          }
           
          if(firstExp!=0){
            document.querySelector(".lower-panel").textContent=Number(firstExp)*Number(exp);
            firstExp*=exp;
          }
        else{
          document.querySelector(".lower-panel").textContent=Number(exp);
          firstExp+=exp;
        }
      
        operationCall=true;
        preOperator=operator;
         }

        else if(operator=="<"){
            var s=document.querySelector(".lower-panel").textContent;
             s=s.slice(0,s.length-1);
            document.querySelector(".lower-panel").textContent=s;

        }

        else if(operator=="/"){
          if( document.querySelector(".upper-panel").textContent=="")
          {
           document.querySelector(".upper-panel").textContent+=exp;
          }
          else
          {
           document.querySelector(".upper-panel").textContent+="/"+exp;
          }

          if(exp==0){
            document.querySelector(".lower-panel").textContent="ND"; 
          }
          
          else{
            document.querySelector(".lower-panel").textContent=Number(firstExp)/Number(exp);
            if(firstExp==0){
              firstExp+=exp;
            }
            else{
              firstExp/=exp;
            }
          
          }
            preOperator=operator;
            operationCall=true;
        }

        else if(operator=="="){
          var s=document.querySelector(".upper-panel").textContent;
          if(preOperator=="+"){
            var result=firstExp+Number(document.querySelector(".lower-panel").textContent);
          }
          else if(preOperator=="*"){
            var result=firstExp*Number(document.querySelector(".lower-panel").textContent);
          }
          else if(preOperator=="-"){
            var result=firstExp-Number(document.querySelector(".lower-panel").textContent);
          }
          else if(preOperator=="/"){
            var result=firstExp/Number(document.querySelector(".lower-panel").textContent);
          }
        
          document.querySelector(".upper-panel").textContent+=preOperator+document.querySelector(".lower-panel").textContent+"=";
          document.querySelector(".lower-panel").textContent=result;
        
          equalsCall=true;
        }
        
        console.log(preOperator);
 }
