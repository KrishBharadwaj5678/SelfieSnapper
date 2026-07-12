let video = document.querySelector("video");
let captureButton = document.querySelector("button");

// Creating a canvas element to capture the video frame
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Accessing the user's webcam and microphone
let vid = navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
  });

// Function to capture a screenshot from the video stream
function captureImage() {
  // Set the canvas dimensions to match the video element
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw the current frame of the video onto the canvas
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert the canvas content to a data URL representing a PNG image
  const dataURL = canvas.toDataURL("image/png");

  // Create an anchor element to download the screenshot
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `SelfieSnapper_${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
}

captureButton.addEventListener("click", captureImage);
