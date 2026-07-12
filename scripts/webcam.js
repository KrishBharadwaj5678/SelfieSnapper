export let webCam = async (videoElement) => {
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    videoElement.srcObject = stream;
    videoElement.addEventListener("loadedmetadata", () => {
      videoElement.play();
    });
  } catch (error) {
    console.log(`Error in accessing webcam: ${error}`);
  }
};
