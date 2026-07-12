export let webCam = async (videoElement, loaderElement) => {
  try {
    // Show loader while accessing camera
    if (loaderElement) {
      loaderElement.classList.remove("hidden");
    }

    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    videoElement.srcObject = stream;
    videoElement.addEventListener("loadedmetadata", () => {
      // Hide loader once video is ready
      if (loaderElement) {
        loaderElement.classList.add("hidden");
      }
      videoElement.play();
    });
  } catch (error) {
    console.log(`Error in accessing webcam: ${error}`);
    // Hide loader if there's an error
    if (loaderElement) {
      loaderElement.classList.add("hidden");
    }
  }
};
