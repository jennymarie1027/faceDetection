// const video = document.querySelector('.webcam');
// const canvas = document.querySelector('.video');
// const ctx = canvas.getContext('2d');
// const faceCanvas = document.querySelector('.face');
// const faceCtx = faceCanvas.getContext('2d');
// // make a new face detector
// const faceDetector = new window.FaceDetector();
// const optionsInputs = document.querySelectorAll(
//   '.controls input[type="range"]'
// );

// const options = {
//   SIZE: 10,
//   SCALE: 1.35,
// };

// function handleOption(e) {
//   const { value, name } = e.currentTarget;
//   options[name] = parseFloat(value);
// }

// optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// // write a function that will populate users video
// async function populateVideo() {
//   const stream = await navigator.mediaDevices.getUserMedia({
//     video: { width: 1920, height: 1080 },
//   });
//   video.srcObject = stream;
//   await video.play();
//   // size the canvases to be the same size as the video
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   faceCanvas.width = video.videoWidth;
//   faceCanvas.height = video.videoHeight;
// }

// async function detect() {
//   const faces = await faceDetector.detect(video);
//   // ask the browser when the next animanation frame and
//   faces.forEach(drawFace);
//   faces.forEach(censor);
//   requestAnimationFrame(detect);
// }

// function drawFace(face) {
//   const { width, height, top, left } = face.boundingBox;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.strokeStyle = '#ffc600';
//   ctx.lineWidth = 2;
//   ctx.strokeRect(left, top, width, height);
// }

// function censor({ boundingBox: face }) {
//   faceCtx.imageSmoothingEnabled = false;
//   faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
//   // draw the small face
//   faceCtx.drawImage(
//     // 5 source args
//     video, // where does the source come from?
//     face.x, // where do we start
//     face.y,
//     face.width, // how wide and how high do we need to go
//     face.height,
//     // 4 draw args
//     face.x, // where should we start drawing the x y
//     face.y,
//     options.SIZE,
//     options.SIZE
//   );
//   // take that face back out and draw it back at normal size
//   const width = face.width * options.SCALE;
//   const height = face.height * options.SCALE;
//   faceCtx.drawImage(
//     faceCanvas, // source
//     face.x,
//     face.y,
//     options.SIZE,
//     options.SIZE,
//     // drawing args
//     face.x - (width - face.width) / 2,
//     face.y - (height - face.height) / 2,
//     width,
//     height
//   );
// }

// populateVideo().then(detect);
