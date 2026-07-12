import { captureImage } from "./captureImage.js";
import { webCam } from "./webcam.js";

let video = document.querySelector("video");
let captureButton = document.querySelector(".btn-wrapper");
let loaderOverlay = document.getElementById("loaderOverlay");

// Accessing the user's webcam and microphone
webCam(video, loaderOverlay);

// Function to capture a screenshot from the video stream
captureButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  captureImage(video);
});
