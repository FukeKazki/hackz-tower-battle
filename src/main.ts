import "./style.css";
import Matter from "matter-js";
import Hackz from "./hackz.png";
import Hangyodon from "./hangyodon.png";
import Nakayubi from "./nakayubi.png";
import NagiIssei from "./nagiissei.png";
import KeisukesanHappy from "./keisukesanhappy.png";
import Keisukesan from "./keisukesan.png";
import Keisukesanreverse from "./keisukesanreverse.png";
import Keisukesanface from "./keisukesanface.png";
import Turuturu from "./turuturu.png";
import Nagi from "./nagi.png";
import { vertice } from "./constant";

const startButton = document.querySelector("#start_button")!;
const logo = document.querySelector("#logo")!;
const cover = document.querySelector("#cover")!;

const handleStart = () => {
  console.log("start");
  startButton.classList.add("hidden");
  logo.classList.add("hidden");
  cover.classList.add("hidden");
};

startButton.addEventListener("click", handleStart);
const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

const engine = Engine.create();

const render = Render.create({
  element: document.getElementById("app")!,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
  },
});

const canvas = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// 床 うごかないように
// x, y, width, height, options
const ground = Bodies.rectangle(canvas.width / 2, 950, 700, 60, {
  isStatic: true,
  friction: 1,
  mass: 100,
});
// ground の左側 についている壁
const leftWall = Bodies.rectangle(canvas.width / 2 - 350, 890, 60, 60, {
  isStatic: true,
});
const rightWall = Bodies.rectangle(canvas.width / 2 + 350, 890, 60, 60, {
  isStatic: true,
});
// add all of the bodies to the world
Composite.add(engine.world, [ground, leftWall, rightWall]);
var placeholderPosition: any = null;
// run the renderer
Render.run(render);
render.canvas.addEventListener("mousemove", function(event) {
  var rect = render.canvas.getBoundingClientRect();
  var scaleX = render.canvas.width / rect.width;
  var mouseX = (event.clientX - rect.left) * scaleX;

  placeholderPosition = { x: mouseX, y: 100 };
});
let isMouseDown = false;
let rotate = 0;
render.canvas.addEventListener("mousedown", function() {
  isMouseDown = true;
});

render.canvas.addEventListener("mouseup", function(event) {
  isMouseDown = false;
  var rect = render.canvas.getBoundingClientRect();
  var scaleX = render.canvas.width / rect.width;
  var mouseX = (event.clientX - rect.left) * scaleX;

  createBox(mouseX, 100);
});

function animate() {
  if (isMouseDown) {
    rotate += 0.05; // 0.05は増加させる値
  }
  requestAnimationFrame(animate);
}

animate();

Matter.Events.on(render, "afterRender", function() {
  if (placeholderPosition) {
    var context = render.context;
    const images = [
      Hackz,
      Hangyodon,
      Nakayubi,
      NagiIssei,
      KeisukesanHappy,
      Keisukesan,
      Keisukesanface,
      Keisukesanreverse,
      Nagi,
      Turuturu,
    ];
    const imageData = images[index % images.length];
    const image = new Image();
    image.src = imageData;

    context.drawImage(
      image,
      placeholderPosition.x - 40,
      placeholderPosition.y - 40,
      80,
      80,
    );
    // context.fillStyle = "rgba(255, 0, 0, 0.5)"; // 薄い赤色
    // context.fillRect(
    //   placeholderPosition.x - 40,
    //   placeholderPosition.y - 40,
    //   80,
    //   80,
    // );
  }
});

const DATA = [
  "hackz",
  "hangyodon",
  "nakayubi",
  "nagiissei",
  "keisukesanhappy",
  "keisukesan",
  "keisukesanface",
  "keisukesanreverse",
  "nagi",
  "turuturu",
];
let index = 0;
function createBox(x: number, y: number) {
  const v = DATA[index % DATA.length];
  let data: Matter.Body;
  switch (v) {
    case "hackz":
      const box = Bodies.fromVertices(x, y, [vertice.Hackz], {
        render: {
          sprite: {
            texture: Hackz,
            xScale: 1,
            yScale: 1,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = box;
      break;
    case "hangyodon":
      const hangyodon = Bodies.fromVertices(x, y, [vertice.Hangyodon], {
        render: {
          sprite: {
            texture: Hangyodon,
            xScale: 1.2,
            yScale: 1.2,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = hangyodon;
      break;
    case "nakayubi":
      const nakayubi = Bodies.fromVertices(x, y, [vertice.Nakayubi], {
        render: {
          sprite: {
            texture: Nakayubi,
            xScale: 1,
            yScale: 1,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = nakayubi;
      break;
    case "nagiissei":
      const nagiissei = Bodies.fromVertices(x, y, [vertice.NagiIssei], {
        render: {
          sprite: {
            texture: NagiIssei,
            xScale: 0.8,
            yScale: 0.8,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = nagiissei;
      break;
    case "keisukesanhappy":
      const keisukesanhappy = Bodies.fromVertices(
        x,
        y,
        [vertice.KeisukesanHappy],
        {
          render: {
            sprite: {
              texture: KeisukesanHappy,
              xScale: 1,
              yScale: 1,
            },
          },
          friction: 1, // 摩擦係数を1に設定
          density: 1,
          mass: 30,
        },
      );
      data = keisukesanhappy;
      break;
    case "keisukesan":
      const keisukesan = Bodies.fromVertices(x, y, [vertice.Keisukesan], {
        render: {
          sprite: {
            texture: Keisukesan,
            xScale: 1,
            yScale: 1,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = keisukesan;
      break;
    case "nagi":
      const nagi = Bodies.fromVertices(x, y, [vertice.Nagi], {
        render: {
          sprite: {
            texture: Nagi,
            xScale: 1,
            yScale: 1,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = nagi;
      break;
    case "keisukesanreverse":
      const keisukesanreverse = Bodies.fromVertices(
        x,
        y,
        [vertice.Keisukesanreverse],
        {
          render: {
            sprite: {
              texture: Keisukesanreverse,
              xScale: 1.4,
              yScale: 1.4,
            },
          },
          friction: 1, // 摩擦係数を1に設定
          density: 1,
          mass: 30,
        },
      );
      data = keisukesanreverse;
      break;
    case "keisukesanface":
      const keisukesanface = Bodies.fromVertices(
        x,
        y,
        [vertice.Keisukesanface],
        {
          render: {
            sprite: {
              texture: Keisukesanface,
              xScale: 1.4,
              yScale: 1.4,
            },
          },
          friction: 1, // 摩擦係数を1に設定
          density: 1,
          mass: 30,
        },
      );
      data = keisukesanface;
      break;
    case "turuturu":
      const turuturu = Bodies.fromVertices(x, y, [vertice.Turuturu], {
        render: {
          sprite: {
            texture: Turuturu,
            xScale: 1.0,
            yScale: 1.0,
          },
        },
        friction: 1, // 摩擦係数を1に設定
        density: 1,
        mass: 30,
      });
      data = turuturu;
      break;
    default:
      const box2 = Bodies.rectangle(x, y, 50, 50, {});
      data = box2;
  }
  index++;
  Matter.Body.rotate(data, rotate);
  Composite.add(engine.world, [data]);
}
// create runner
const runner = Runner.create();

// run the engine
Runner.run(runner, engine);

Matter.Events.on(engine, "afterUpdate", function() {
  checkIfBoxesFell();
});

function checkIfBoxesFell() {
  // エンジンの世界にあるすべての物体を取得
  var bodies = Matter.Composite.allBodies(engine.world);

  bodies.forEach(function(body) {
    // 床のY座標よりも下にある場合
    if (body.position.y > ground.position.y) {
      // ボックスが床から落ちたと判定
      window.alert("GAME OVER");
      // 必要に応じて、ボックスを世界から削除
      Matter.Composite.remove(engine.world, body);
    }
  });
}
