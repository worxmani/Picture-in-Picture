const vedioElement=document.getElementById('video');
const button=document.getElementById('button');
// Prompt to select media stream pass to vedio element and play
async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        vedioElement.srcObject=mediaStream;
        vedioElement.onloadedmetadata=()=>{
            vedioElement.play();
        }
    }catch(error){
        // Catch Error here
    }
} 
button.addEventListener('click',async ()=>{
    button.disabled=true;
    await vedioElement.requestPictureInPicture();
    button.disabled=false;
});
// On Load
selectMediaStream();