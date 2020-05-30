var firstExp=0;
var operationCall=false;
var equalsCall=false;
var preOperator;
var e_flag=0;
var oper;
var oper_num;
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

function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}
function operation(operator){
       
        var exp=0;
       
        exp=document.querySelector(".lower-panel").textContent;
        exp=Number(exp);
         if(operator=="+"){
           var flag=0;
           if(equalsCall==true){
             var s=document.querySelector(".lower-panel");
             firstExp=Number(s.textContent);
             document.querySelector(".upper-panel").textContent="";
             document.querySelector(".upper-panel").textContent=s.textContent;
             flag=1;
             equalsCall=false;
           }
           else{
          if( document.querySelector(".upper-panel").textContent=="")
          {
           document.querySelector(".upper-panel").textContent+=exp;
          }
          else
          {
           document.querySelector(".upper-panel").textContent+="+"+exp;
          }
        
        document.querySelector(".lower-panel").textContent=Number(exp)+Number(firstExp);
           }
        if(flag==0){
          firstExp+=exp;
        }
        operationCall=true;
        preOperator=operator;
    }

     else if (operator=="-"){
      if(equalsCall==true){
        var s=document.querySelector(".lower-panel");
        firstExp=Number(s.textContent);
        document.querySelector(".upper-panel").textContent="";
        document.querySelector(".upper-panel").textContent=s.textContent;
        flag=1;
        equalsCall=false;
      }
      else{
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
      }
      
          operationCall=true;
          preOperator=operator;
      }
     
       else if(operator=="CE"){
        document.querySelector(".lower-panel").textContent="";
       }

       else if(operator=="C"){
        document.querySelector(".lower-panel").textContent="";
        document.querySelector(".upper-panel").textContent="";
        firstExp=0;
        oper_num=0;
        e_flag=0;
       }
        else if (operator=="*"){
          if(equalsCall==true){
            var s=document.querySelector(".lower-panel");
            firstExp=Number(s.textContent);
            document.querySelector(".upper-panel").textContent="";
            document.querySelector(".upper-panel").textContent=s.textContent;
            flag=1;
            equalsCall=false;
          }
          else{
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
          if(equalsCall==true){
            var s=document.querySelector(".lower-panel");
            firstExp=Number(s.textContent);
            document.querySelector(".upper-panel").textContent="";
            document.querySelector(".upper-panel").textContent=s.textContent;
            flag=1;
            equalsCall=false;
          }
          else{
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
          }
          
            preOperator=operator;
            operationCall=true;
        }
     
        else if(operator=="="){
          
          if(equalsCall==true)
             {
               console.log(e_flag);
               
                if(e_flag==0){
                  var u=document.querySelector(".upper-panel");
                  var l=document.querySelector(".lower-panel");
                  var n=u.textContent.length-2;
                  var s="";
              
                  while(isNaN(u.textContent.charAt(n))==false)
                  { 
                    s+=(u.textContent).charAt(n);
                    --n;
                  }
                  var o=u.textContent.charAt(n);
                  oper=o;
                  s=Number(s);
                  s=reverseNum(s);
                  oper_num=s;
                  // firstExp=s;
                  u.textContent="";
                  e_flag=1;
                }
                console.log(oper_num);
                console.log(oper);
                var str;
                str=document.querySelector(".lower-panel").textContent;
                firstExp=Number(str);
               
                if(oper=="+"){
                  
                  document.querySelector(".upper-panel").textContent=firstExp+"+"+oper_num+"=";
                  firstExp+=Number(oper_num);
                }
                else if(oper=="-"){
                 
                  document.querySelector(".upper-panel").textContent=firstExp+"-"+oper_num+"=";
                  firstExp-=Number(oper_num);
                }
                else if(oper=="*"){
                 
                  document.querySelector(".upper-panel").textContent=firstExp+"*"+oper_num+"=";
                  firstExp-=Number(oper_num);
                }
                else if(oper=="/"){
                 
                  document.querySelector(".upper-panel").textContent=firstExp+"*"+oper_num+"=";
                  firstExp-=Number(oper_num);
                }
                document.querySelector(".lower-panel").textContent=firstExp;
                  // u.textContent=l.textContent+"+"+s;
                  // firstExp+=Number(l.textContent);
             }
             else{
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
             }
          equalsCall=true;
        }
 }
