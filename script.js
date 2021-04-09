const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
        }
    } catch (error) {
        console.log('Oops! Error', error);
    }
}

button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true; 

    //Request Picture in Picture to start
    await videoElement.requestPictureInPicture();

    //Reset Button
    button.disabled = false;
});


 
selectMediaStream();