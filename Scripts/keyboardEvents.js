document.addEventListener("DOMContentLoaded",
 function(event){
    var s=document.querySelector("body");
    s.addEventListener("keydown",
       function(event){
           console.log(event);
          if(event.key==="="){
              document.querySelector("#equals").focus();
              document.querySelector("#equals").click();
          }

          else if(event.key==="Backspace"){
            document.querySelector("#backspace").focus();
            document.querySelector("#backspace").click();
          }

          else if(event.key==="1"){
            document.querySelector("#one").focus();
            document.querySelector("#one").click();
          }

          else if(event.key==="2"){
            document.querySelector("#two").focus();
            document.querySelector("#two").click();
          }

          else if(event.key==="3"){
            document.querySelector("#three").focus();
            document.querySelector("#three").click();
          }
          else if(event.key==="4"){
            document.querySelector("#four").focus();
            document.querySelector("#four").click();
          }

          else if(event.key==="5"){
            document.querySelector("#five").focus();
            document.querySelector("#five").click();
          }

          else if(event.key==="6"){
            document.querySelector("#six").focus();
            document.querySelector("#six").click();
          }

          else if(event.key==="7"){
            document.querySelector("#seven").focus();
            document.querySelector("#seven").click();
          }

          else if(event.key==="8"&&event.shiftKey==false){
            document.querySelector("#eight").focus();
            document.querySelector("#eight").click();
          }

          else if(event.key==="9"){
            document.querySelector("#nine").focus();
            document.querySelector("#nine").click();
          }

          else if(event.key==="0"){
            document.querySelector("#zero").focus();
            document.querySelector("#zero").click();
          }

          else if(event.key=="."){
            document.querySelector("#dot").focus();
            document.querySelector("#dot").click();
          }

          else if(event.key==="+"){
            document.querySelector("#plus").focus();
            document.querySelector("#plus").click();
          }

          else if(event.key==="-"){
            document.querySelector("#minus").focus();
            document.querySelector("#minus").click();
          }
          else if(event.key==="*"&&event.shiftKey==true){
            document.querySelector("#multiply").focus();
            document.querySelector("#multiply").click();
          }
          else if(event.key==="/"){
            document.querySelector("#division").focus();
            document.querySelector("#division").click();
          }

          
       }
    );
 }

);