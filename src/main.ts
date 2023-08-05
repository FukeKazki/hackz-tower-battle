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
    width: 800,
    height: 1000,
    wireframes: false,
  },
});

const canvas = {
  width: 800,
  height: 1000,
};
// create two boxes and a ground
// const boxA = Bodies.rectangle(400, 200, 80, 80);
// const boxB = Bodies.rectangle(450, 50, 80, 80);
// 床 うごかないように
// x, y, width, height, options
const ground = Bodies.rectangle(canvas.width / 2, 950, 700, 60, {
  isStatic: true,
  friction: 10,
});

// add all of the bodies to the world
Composite.add(engine.world, [ground]);
var placeholderPosition: any = null;
// run the renderer
Render.run(render);
render.canvas.addEventListener("mousemove", function(event) {
  var rect = render.canvas.getBoundingClientRect();
  var scaleX = render.canvas.width / rect.width;
  var mouseX = (event.clientX - rect.left) * scaleX;

  placeholderPosition = { x: mouseX, y: 100 };
});
render.canvas.addEventListener("mousedown", function(event) {
  var rect = render.canvas.getBoundingClientRect();
  var scaleX = render.canvas.width / rect.width;
  var mouseX = (event.clientX - rect.left) * scaleX;

  createBox(mouseX, 100);
});

Matter.Events.on(render, "afterRender", function() {
  if (placeholderPosition) {
    var context = render.context;
    context.fillStyle = "rgba(255, 0, 0, 0.5)"; // 薄い赤色
    context.fillRect(
      placeholderPosition.x - 40,
      placeholderPosition.y - 40,
      80,
      80,
    );
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
        friction: 5, // 摩擦係数を1に設定
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
        friction: 5, // 摩擦係数を1に設定
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
        friction: 5, // 摩擦係数を1に設定
      });
      data = nakayubi;
      break;
    case "nagiissei":
      const nagiissei = Bodies.fromVertices(x, y, [vertice.NagiIssei], {
        render: {
          sprite: {
            texture: NagiIssei,
            xScale: 1,
            yScale: 1,
          },
        },
        friction: 5, // 摩擦係数を1に設定
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
          friction: 5, // 摩擦係数を1に設定
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
        friction: 5, // 摩擦係数を1に設定
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
        friction: 5, // 摩擦係数を1に設定
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
          friction: 5, // 摩擦係数を1に設定
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
          friction: 5, // 摩擦係数を1に設定
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
        friction: 5, // 摩擦係数を1に設定
      });
      data = turuturu;
      break;
    default:
      const box2 = Bodies.rectangle(x, y, 50, 50, {});
      data = box2;
  }
  index++;
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
      console.log("A box has fallen off the ground!");
      window.alert("A box has fallen off the ground!");

      // 必要に応じて、ボックスを世界から削除
      Matter.Composite.remove(engine.world, body);
    }
  });
}
