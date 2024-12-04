const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = 48;
canvas.height = 96;

console.log('Canvas dimensions:', canvas.width, canvas.height);

const spriteSheet = new Image();
spriteSheet.src = '/img/Kyle_Spritesheet.png';

spriteSheet.onload = function () {
  //   console.log('Image loaded successfully');
  animate(0); // Start the animation with an initial timestamp
};

spriteSheet.onerror = function () {
  console.error('Failed to load image');
};

const frameWidth = 48;
const frameHeight = 96;
const startFrame = 18; // Starting frame index
const totalFrames = 6; // Number of frames to animate
let currentFrame = 0;
const frameDuration = 275; // Duration of each frame in milliseconds
let lastFrameTime = 0;

function drawFrame() {
  //   console.log('Drawing frame:', currentFrame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const frameIndex = startFrame + currentFrame;
  const row = 1; // Second row (index 1)
  const col = frameIndex % (spriteSheet.width / frameWidth);

  //   console.log('Frame index:', frameIndex, 'Row:', row, 'Col:', col);
  //   console.log('Drawing at:', col * frameWidth, row * frameHeight);

  ctx.drawImage(
    spriteSheet,
    col * frameWidth,
    row * frameHeight,
    frameWidth,
    frameHeight,
    0,
    0,
    frameWidth,
    frameHeight
  );
}

function animate(timestamp) {
  if (timestamp - lastFrameTime >= frameDuration) {
    // console.log('Animating frame:', currentFrame);
    drawFrame();
    currentFrame = (currentFrame + 1) % totalFrames;
    lastFrameTime = timestamp;
  }
  requestAnimationFrame(animate);
}

export { canvas, ctx, animate, drawFrame, spriteSheet };
