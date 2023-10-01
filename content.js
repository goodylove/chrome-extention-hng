// import { controlVideoCon, stopBtn } from "./recorder.js";

// console.log("Hi, I have been injected whoopie!!!");
// let help = document.createElement("div");
// help.className = "help";

// help.addEventListener("click", function () {
//   alert("Hi, I have been injected whoopie!!!");
// });

var recorder = null;
function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };
  let controlVideoCon = document.createElement("div");
  controlVideoCon.style.display = "flex";
  controlVideoCon.style.gap = "1rem";
  controlVideoCon.style.alignItems = "center";
  controlVideoCon.style.minWidth = "400px";
  controlVideoCon.style.backgroundColor = "#141414";
  controlVideoCon.style.borderRadius = "100vh";
  controlVideoCon.style.padding = "0.5rem";
  controlVideoCon.style.justifyContent = "space-evenly";
  controlVideoCon.style.position = "fixed";
  controlVideoCon.style.bottom = "5%";
  controlVideoCon.style.left = "5%";
  let timer = document.createElement("div");
  let timerP = document.createElement("p");
  let timerSpan = document.createElement("span");
  timer.style.display = "flex";
  timer.style.alignItems = "center";
  timer.style.gap = "1rem";
  timerP.style.fontWeight = "500";
  timerP.style.fontSize = "1.25rem";
  timerP.style.fontFamily = "Inter";
  timerP.style.color = "#fff";
  timerP.textContent = "00:03:35";
  timerSpan.style.height = "8px";
  timerSpan.style.width = "8px";
  timerSpan.style.backgroundColor = "red";
  timerSpan.style.borderRadius = "50%";
  timer.appendChild(timerP);
  timer.appendChild(timerSpan);
  controlVideoCon.appendChild(timer);
  let controlItemsContainer = document.createElement("div");
  controlItemsContainer.style.display = "flex";
  controlItemsContainer.style.alignItems = "center";
  controlItemsContainer.style.gap = "1rem";
  controlItemsContainer.style.borderLeft = "1px solid #E8E8E8";
  controlItemsContainer.style.paddingLeft = "1rem";
  document.body.appendChild(controlVideoCon);
  const pauseItem = document.createElement("div");
  pauseItem.style.display = "flex";
  pauseItem.style.alignItems = "center";
  pauseItem.style.gap = ".3rem";
  pauseItem.style.flexDirection = "column";
  const pauseBtn = document.createElement("button");
  pauseBtn.style.borderRadius = "50%";
  pauseBtn.style.display = "grid";
  pauseBtn.style.placeContent = "center";
  pauseBtn.style.backgroundColor = "#fff";
  pauseBtn.style.border = "none";
  pauseBtn.style.height = "30px";
  pauseBtn.style.width = "30px";
  const pauseImg = document.createElement("img");
  pauseImg.style.height = "15px";
  pauseImg.style.objectFit = "contain";
  pauseImg.src =
    "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166602/Icons/ae3ufl4s59dy7tvh0tsb.png";
  pauseBtn.appendChild(pauseImg);
  const pauseLabel = document.createElement("small");
  pauseLabel.style.fontFamily = "Work Sans";
  pauseLabel.style.fontWeight = "500";
  pauseLabel.style.fontSize = "0.75rem";
  pauseLabel.style.color = "#fff";
  pauseLabel.textContent = "Pause";
  pauseItem.appendChild(pauseBtn);
  pauseItem.appendChild(pauseLabel);
  const stopItem = document.createElement("div");
  stopItem.style.display = "flex";
  stopItem.style.alignItems = "center";
  stopItem.style.gap = ".3rem";
  stopItem.style.flexDirection = "column";
  const stopBtn = document.createElement("button");
  stopBtn.style.borderRadius = "50%";
  stopBtn.style.display = "grid";
  stopBtn.style.placeContent = "center";
  stopBtn.style.backgroundColor = "#fff";
  stopBtn.style.border = "none";
  stopBtn.style.height = "30px";
  stopBtn.style.width = "30px";
  const stopImg = document.createElement("img");
  stopImg.style.height = "15px";
  stopImg.style.objectFit = "contain";
  stopImg.src =
    "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166664/Icons/gj2gn1upqjimsgv2j8cz.png";
  stopBtn.appendChild(stopImg);
  const stopLabel = document.createElement("small");
  stopLabel.style.fontFamily = "Work Sans";
  stopLabel.style.fontWeight = "500";
  stopLabel.style.fontSize = "0.75rem";
  stopLabel.style.color = "#fff";
  stopLabel.textContent = "Stop";
  stopItem.appendChild(stopBtn);
  stopItem.appendChild(stopLabel);
  const cameraItem = document.createElement("div");
  cameraItem.style.display = "flex";
  cameraItem.style.alignItems = "center";
  cameraItem.style.gap = ".3rem";
  cameraItem.style.flexDirection = "column";
  const cameraBtn = document.createElement("button");
  cameraBtn.style.borderRadius = "50%";
  cameraBtn.style.display = "grid";
  cameraBtn.style.placeContent = "center";
  cameraBtn.style.backgroundColor = "#fff";
  cameraBtn.style.border = "none";
  cameraBtn.style.height = "30px";
  cameraBtn.style.width = "30px";
  const cameraImg = document.createElement("img");
  cameraImg.style.height = "15px";
  cameraImg.style.objectFit = "contain";
  cameraImg.src =
    "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166781/Icons/cawunk9gdd9yfnnvlnei.png";
  cameraBtn.appendChild(cameraImg);
  const cameraLabel = document.createElement("small");
  cameraLabel.style.fontFamily = "Work Sans";
  cameraLabel.style.fontWeight = "500";
  cameraLabel.style.fontSize = "0.75rem";
  cameraLabel.style.color = "#fff";
  cameraLabel.textContent = "Camera";
  cameraItem.appendChild(cameraBtn);
  cameraItem.appendChild(cameraLabel);
  controlItemsContainer.appendChild(pauseItem);
  controlItemsContainer.appendChild(stopItem);
  controlItemsContainer.appendChild(cameraItem);
  controlVideoCon.appendChild(controlItemsContainer);

  stopBtn.addEventListener("click", () => {
    if (!recorder) return;
    recorder.stop();
    let a = document.createElement("a");
    a.href = "http://localhost:5173/";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  recorder.ondataavailable = async function (event) {
    let recordedBlob = event.data;

    let url = URL.createObjectURL(recordedBlob);
    await sendVideoToBackend(url);
  };
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    const res = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: {
        width: 9999999999,
        height: 9999999999,
      },
    });

    onAccessApproved(res);
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();
  }
});
