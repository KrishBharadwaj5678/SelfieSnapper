import { captureImage } from "./captureImage.js";
import { webCam } from "./webcam.js";

let video = document.querySelector("video");
let captureButton = document.querySelector("button");

// Accessing the user's webcam and microphone
webCam(video);

// Function to capture a screenshot from the video stream
captureButton.addEventListener("click", () => captureImage(video));
