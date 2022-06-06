// fill in javascript code here

    document.querySelector("form").addEventListener("submit",myFunction);

    function myFunction(event){
        event.preventDefault();
        console.log("inside")
        let name=document.querySelector("#name").value;

        let empid=document.querySelector("#employeeID").value;

        let dep=document.querySelector("#department").value;

        let exp=document.querySelector("#exp").value

        let email=document.querySelector("#email").value

        let mobl=document.querySelector("#mbl").value

        let td1=document.querySelector("#th")
        let td2=document.querySelector("#th")
        let td3=document.querySelector("#th")
        let td4=document.querySelector("#th")
        let td5=document.querySelector("#th")
        let td6=document.querySelector("#th")
        let td7=document.querySelector("#th")
        let td8=document.querySelector("#th")
       

        if(exp>5)
        {
            td1.innerText="name"
            td2.innerText="empid"
            td3.innerText="dep"
            td4.innerText="exp"
            td6.innerText="mobl"
            td5.innerText="email"
            td7.innerText="Senior"
            td8.innerText="DELETE"
            td8.style.backgroundColor="red";
           

        }
       
           if(exp>2&&exp<5) {
        td1.innerText=name
        td2.innerText=empid
        td3.innerText=dep
        td4.innerText=exp
        td5.innerText=email
        td6.innerText=mobl
        td7.innerText="Junior"
        td8.innerText="DELETE"
        td8.style.backgroundColor="red";
       } 
         if(exp<=1)
         {
            td1.innerText=name
            td2.innerText=empid
            td3.innerText=dep
            td4.innerText=Fresher
            td5.innerText=email
            td6.innerText=mobl
            td7.innerText="Fresher"
            td8.innerText="DELETE"
            td8.style.backgroundColor="red";  
         }
             document.querySelector("tbody").append(td1,td2,td3,td4,td5,td6,td7,td8);
              td8.addEventListener("click" , just);
              function just(){
                 tr.remove();
              }
           
    }
