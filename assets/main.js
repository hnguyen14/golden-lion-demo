const canvas = document.getElementById("canvas");
var width = canvas.clientWidth;
var height = canvas.clientHeight;

let sq = 0;
let cost = 0;

function setSQ() {
  document.getElementById("square-footage-value").innerText = `${sq} sqft`;
}

function setCost() {
  document.getElementById("cost-estimate").innerText = `$${cost}`;
}

function addLivingRoom() {
  sq += 216;
  cost += 200 * 216;
  renderRoomComponent(120, 180, "#F26419");
  setSQ();
  setCost();
}
function addLGLivingRoom() {
  sq += 400;
  cost += 200 * 400;
  renderRoomComponent(200, 200, "#F6AE2D");
  setSQ();
  setCost();
}
function addBedroom() {
  sq += 120;
  cost += 200 * 120;
  renderRoomComponent(100, 120, "#758E4F");
  setSQ();
  setCost();
}
function addBathroom() {
  sq += 100;
  cost += 200 * 100;
  renderRoomComponent(100, 100, "#33658A");
  setSQ();
  setCost();
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
