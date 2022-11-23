/*elem = document.getElementById('selected')
elem.onclick = function(){
   if(document.getElementById('hidding').style.display == 'none'){
    document.getElementById('hidding').style.display = 'block'
    document.getElementById('lang').style.position = 'relative'
    document.getElementById('lang').style.top = '30px'
    

   }else{
    document.getElementById('hidding').style.display = 'none'
    document.getElementById('lang').style.top = '0px'
   }
}*/

//progress function
let progressCercles = document.querySelectorAll(".progress")
for(let progress of progressCercles){
   progressValue = progress.firstElementChild.innerHTML;
   value = parseInt(progressValue)*3.6
   console.log('hi'+ value + '' )


   progress.style.background = "conic-gradient(#6F38C5 "+ value +"deg, white 0deg)"
}

//translation

