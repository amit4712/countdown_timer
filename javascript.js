<!DOCTYPE html>
<html>
    <head>
        <title>Countdown timer</title>
       
    </head>
    <body>
    <style>
      
        body {
        
           background-image: url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg);
            
            animation:spin 10s linear alternate infinite;
}

       @keyframes spin{
            100%{background-position:150%;}
        }
        


    
h2 {
    text-align:center ;
    color:darkred;
    background-color: darkgrey;
}
        
        header {
        margin-top:15%;
        margin-bottom:5%;
        text-align:center ;
        background-color:grey;
        color:blue;
        font-size:160%;
       
    }

        
        #pqr {
            background-color: darkgray;
        }
   
   
    </style>
   
   
   
    <h2> All the best for mid sem exams!</h2>
   
        <header id="a">
       
        </header>
       
   <script>
  
  // setInterval(func(),1000) ;
  
  
   function func() {
      
      var now = new Date().getTime() ;
     
       var dest = new Date("Sep 29, 2019  8:00:00").getTime();
      
      
       var diff = dest - now ;
      
       var days = diff /(1000*60*60*24) ;
      
       days = Math.floor(days);
      
              //  alert(days);
   
   
    var hours = diff % (1000*60*60*24) ;
   
    hours = hours /(1000*60*60) ;
   
    var hour = Math.floor (hours) ;
   
          //  alert (hour);
           
  
   var mins = diff % (1000*60*60) ;
  
       mins = mins / (1000*60) ;
  
   var min = Math.floor(mins) ;
  
             //  alert (min) ;
   
   
    var secs = diff % (1000*60) ;
  
       secs /= (1000) ;
  
   var sec = Math.floor(secs) ;
  
           //    alert (sec) ;
       
document.getElementById("a").innerHTML = days + " days ! " + "<br/>"+  "<br/>"+ hour +" hours : "+ min +" mins : " +sec + " sec ";

     }

setInterval(func,1000) ;

      
   </script>    
  
  <footer>
        <div id="pqr"> </div>
        </footer>

       
    </body>
</html>