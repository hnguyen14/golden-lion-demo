const canvas = document.getElementById("canvas");
var width = canvas.clientWidth;
var height = canvas.clientHeight;

let sq = 0;
let cost = 0;

const costPerSQ = 200;

function reset() {
  setSQ(0);
  setCost(0);
  stage.clear();
  stage.removeChildren();
}

function setSQ(value) {
  sq = value;
  document.getElementById("square-footage-value").innerText = `${value} sqft`;
}

function setCost(value) {
  cost = value;
  document.getElementById("cost-estimate").innerText = `$${value}`;
}

function addLivingRoom() {
  renderRoomComponent(120, 180, "#F26419");
  setSQ(sq + 216);
  setCost(cost + costPerSQ * 216);
}
function addLGLivingRoom() {
  renderRoomComponent(200, 200, "#F6AE2D");
  setSQ(sq + 400);
  setCost(cost + costPerSQ * 400);
}
function addBedroom() {
  renderRoomComponent(100, 120, "#758E4F");
  setSQ(sq + 120);
  setCost(cost + costPerSQ * 120);
}
function addBathroom() {
  renderRoomComponent(100, 100, "#33658A");
  setSQ(sq + 100);
  setCost(cost + costPerSQ * 100);
}

function renderRoom(stage, path, width, height) {
  var roomImgObj = new Image();
  roomImgObj.src = path;
  roomImgObj.onload = function () {
    var roomImg = new Konva.Image({
      image: roomImgObj,
      x: stage.width() / 2 - 200 / 2,
      y: stage.height() / 2 - 137 / 2,
      width,
      height,
      draggable: true,
    });

    roomImg.on("mouseover", function () {
      document.body.style.cursor = "pointer";
    });
    roomImg.on("mouseout", function () {
      document.body.style.cursor = "default";
    });
    var layer = new Konva.Layer();
    layer.add(roomImg);
    stage.add(layer);
  };
}

function renderRoomComponent(width, height, fill) {
  let roomComponent = new Konva.Rect({
    x: 10,
    y: 10,
    width,
    height,
    fill,
    stroke: "black",
    strokeWidth: 2,
    draggable: true,
  });

  roomComponent.on("mouseover", function () {
    document.body.style.cursor = "pointer";
  });
  roomComponent.on("mouseout", function () {
    document.body.style.cursor = "default";
  });
  var layer = new Konva.Layer();
  layer.add(roomComponent);

  var tr1 = new Konva.Transformer({
    nodes: [roomComponent],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
  });
  layer.add(tr1);

  stage.add(layer);
}

var stage = new Konva.Stage({
  container: "canvas",
  width: width,
  height: height,
});
setSQ(0);
setCost(0);
