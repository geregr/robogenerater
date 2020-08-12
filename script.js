var button=document.getElementById('num')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recongition= new window.SpeechRecognition()
recongition.start()
recongition.addEventListener('result',(e)=>{
button.innerHTML += e.results[0][0].transcript
console.log(e.results[0][0].transcript)
})
recongition.addEventListener('end',()=>{
    button.innerHTML +=" "
recongition.start()
    })
function clean(){
    button.innerHTML=" "
}
function generate(){
var inputnumber=document.getElementById('num').value
var inputwidth=document.getElementById('dum').value
var inputheight=document.getElementById('uum').value
 inputnumber=parseInt(inputnumber)
 inputheight=parseInt(inputheight)
 inputwidth=parseInt(inputwidth)
 var html=''
 for( let i=0;i<inputnumber;i++){
var random=Math.random()

var URL="https://robohash.org/"+random
html=html+`<img src="${URL}" alt="" width="${inputwidth}" height="${inputheight}">`
 document.getElementById('glallery').innerHTML=html
}
}
