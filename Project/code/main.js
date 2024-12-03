// SOGOMI

import kaboom from "kaboom"


// Inicializamos el contexto Kaboom
kaboom({
  background: [100, 100, 100]
})
let MAP_WIDTH = 440;
let SPEED = 240;
let BLAST_ANIM = false;
let BULLET_SPEED = 400;
let GOKU_HEART = 9;
let METOOL_HEALTH = 3;

let SPRITE = "cubo";

let ENEMYSPRITE = "sonicenemy";

let losehealthwait = false;
let isDying = false;
let KI = 0;

let timer
let levelText
let scoreText
let deathText
let music

let death = 0;
let score = 0;

let ACTION = "idle"

let JUMP_FORCE = 640;

let ENEMY_SPEED = 100;

let BACKGROUND = "background1";

let PICCOLO_HEALTH = 20;

let HAS_GOKUKI = false;

let HAS_DOUBLEJUMP = false;
let currentEsferaIndex = 0;  // Índice de la moneda actual


let CHECKPOINT_NUM = 0;
loadSprite("cubo", "sprites/cubo.png")
loadSprite("brick", "sprites/brick.png")
loadSprite("snowbrick", "sprites/snowbrick.png")
loadSprite("lava", "sprites/lava.png")
loadSprite("spike", "sprites/spike.png")
loadSprite("icicle", "sprites/icicle.png")
loadSprite("nubevoladora", "sprites/nubevoladora.png")
loadSprite("Gokuki", "sprites/Gokuki.png")
loadSprite("background1", "sprites/background1.jpg")
loadSprite("background2", "sprites/background2.gif")
loadSprite("background3", "sprites/background3.jpg")

loadSprite("button", "sprites/button.png")

loadSound("music", "sounds/music.mp3");
loadSound("blast_sound", "sounds/Blast_Sound_Effect.mp3");
loadSound("death_sound", "sounds/Death_Sound.mp3");
loadSound("teleport_sound", "sounds/Teleport_Sound_Effect.mp3");

loadSprite("esfera", "sprites/esfera.png", {
  sliceX: 7,
});


loadSprite("GokuHeart", "sprites/GokuHeart.png", {
  sliceX: 9,
});
loadSprite("Cargaki", "sprites/Cargaki.png", {
  sliceX: 9,
});

loadSprite("HealthPotion", "sprites/HealthPotion.png");
loadSprite("ki", "sprites/ki.png");

// Carga de assets
loadSprite("gokumove", "sprites/gokumove.png", {
  sliceX: 12,
  sliceY: 2.2,
  anims: {
    walk: {
      from: 1,
      to: 5,
      loop: true,
      speed: 8,
    },
    jump: {
      from: 6,
      to: 10,
      loop: false,
      speed: 6,
    },
    die: {
      from: 12,
      to: 15,
      loop: false,
      speed: 10,
    }
  }
});
loadSprite("sonicenemy", "sprites/sonicenemy.png", {
  sliceX: 5,
  anims: {
    move: {
      from: 0,
      to: 4,
      loop: true,
      speed: 2
    },
  }
});

loadSprite("lavaenemy", "sprites/lavaenemy.png", {
  sliceX: 6,
  anims: {
    move: {
      from: 4,
      to: 5,
      loop: true,
      speed: 2
    },
  }
});

loadSprite("iceenemy", "sprites/iceenemy.png", {
  sliceX: 6,
  anims: {
    move: {
      from: 4,
      to: 5,
      loop: true,
      speed: 2
    },
  }
});


loadSprite("ice", "sprites/ice.png", {
  sliceX: 3,
  anims: {
    destroy: {
      from: 0,
      to: 2,
      loop: false,
      speed: 7
    },
  }
});

loadSprite("piccolo", "sprites/piccolo.png", {
  sliceX: 3,
  anims: {
    move: {
      from: 0,
      to: 2,
      loop: true,
      speed: 1
    },
  }
});


loadSprite("column", "sprites/column.png", {
  sliceX: 4,
  anims: {
    explode: {
      from: 0,
      to: 3,
      loop: false,
      speed: 10
    },
  }
});
loadSprite("checkpointflag", "sprites/checkpointflag.png", {
  sliceX: 10,
  anims: {
    idle: {
      from: 0,
      to: 4,
      loop: true,
      speed: 10
    },
    collectflag: {
      from: 5,
      to: 9,
      loop: true,
      speed: 10
    },
  }
});

loadSprite("portal", "sprites/portal.png", {
  sliceX: 4,
  anims: {
    idle: {
      from: 0,
      to: 3,
      loop: true,
      speed: 10
    },
  }
});


function patrol(distance = 100, speed = 100, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area",],
    startingPos: vec2(0, 0),
    add() {
      this.startingPos = this.pos;
      this.on("collide", (obj, side) => {
        if (side === "left" || side === "right") {
          dir = -dir;
          if (dir < 0) {
            this.flipX(false);
          } else {
            this.flipX(true);
          }
        }
      });
    },
    update() {
      if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
        dir = -dir;
        if (dir < 0) {
          this.flipX(false);
        } else {
          this.flipX(true);
        }
      }
      this.move(speed * dir, 0);
    },
  };
}


function addButton(txt, p, f) {

  const btn = add([
    sprite("button", { width: 500, height: 100 }),
    text(txt, {
      size: 50,
      font: "sink",
    }),
    pos(p),
    area({ width: 500, height: 100 }, { cursor: "pointer", }),
    scale(1.25),
    origin("center"),
  ])
  btn.onClick(f)
}


function enemy() {
  return {
    id: "enemy",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update() {

    },
    die() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 0;
      this.area.width = 16;
      this.area.height = 8;
      this.use(lifespan(0.5, { fade: 0.1 }));
    }
  }
}





const LEVELS = [

  // Nivel 1
  [

    "      3  =               j   |                                   u",
    "    ======^^^^==^^=^^=^^=   ==   ==   ==   ==   =====^^^=^^  =^===",
    "=                                                     ",
    "                                       p        s         ",
    " =      c            =                             b           ",
    "   =                 =   e         |       a   2             ",
    "==  ==  ==  ==  =========================  ====================       ",
    "=                                                              ",
    "=  t                                                              =    ",
    "=m                                                              ",
    "=  y  1         q          q                      w             =       ",
    "==========^^=======================^^=^^=^^=^^================",
    "           ",


  ],
  // Nivel 2
  [

    "      3  =          c                 a        |                u",
    "    =====~~~==~~=~~===  =   ==   ==   ==   ==   ===~~~==~  =~=~=",
    "=                                                     ",
    "                      a                                   ",
    " = |                  =                                         ",
    "   =              r   ~   e         |           2      a      ",
    "=   ==  ==  ==  ================~~~===~~~=  =====~=~=~====       ",
    "=                                                              ",
    "=                                                           =     ",
    "=m                                                        =       ",
    "=  y 1 a                  q                    w                ",
    "=========~===~~==~~==~~~========~~==~~===~===============",
    "           ",


  ],
  // Jefe


  [

    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~===========================================~",
    "~=                                         =~",
    "~=                f                        =~",
    "~=                                         =~",
    "~=                                         =~",
    "~=                                         =~",
    "~=                                         =~",
    "~=m    @       c     F                  u  =~",
    "~=  y1    ~                     a      ~   =~",
    "~===========================================~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",


  ],
  // Nivel 4

  [

    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "~===========================================~",
    "~=                                         =~",
    "~=                                         =~",
    "~=                                         =~",
    "~=   -           c    g                    =~",
    "~=     -            -          -         - =~",
    "~=           -           -          -      =~",
    "~=m    @                                u  =~",
    "~=  y1    ~  ~  ~  ~  ~  ~  ~  ~  ~    ~   =~",
    "~===========================================~",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",


  ],
  //La nube voladora te permite dar un doble salto

  //Nivel 5
  [

    "      3  =                    a         c       |                u",
    "    =====!!!==!!=!!===  =   +   +   ==   ==   ===!!!+    !=!=",
    "=                                                     ",
    "                                                          ",
    " = |                                                            ",
    "   =              r   a   e         |           2    a        ",
    "=   == c==  ==  ==!=============!!!===!!!=  ==============       ",
    "=                                                              ",
    "=                                                           =     ",
    "=m                                                        =       ",
    "=  y1              a       q          c      a      w                ",
    "=======+   !!====+   !===========!==+   !!!!+   ==============",
    "                  ",


  ],

];

const levelConf = {
  width: 60,
  height: 60,
  "=": () => [
    sprite(SPRITE, { width: 60, height: 60 }),
    area(),
    solid(),
    origin("botleft"),
    "ground",
  ],
  "~": () => [
    sprite("lava", { width: 60, height: 60 }),
    area(),
    solid(),
    origin("botleft"),
    "lava",
  ],
  "+": () => [
    sprite("ice", { width: 240, height: 60 }),
    area(),
    solid(),
    origin("botleft"),
    "ice",
  ],
  "^": () => [
    sprite("spike"),
    area(),
    solid(),
    origin("botleft"),
    "spike",
  ],
  "@": () => [
    sprite("HealthPotion", { width: 50, height: 80 }),
    area(),
    this.frame = 1,
    origin("botleft"),
    "potion",
  ],
  "y": () => [
    sprite("checkpointflag", { anim: 'idle' }),
    area(),
    scale(0.5),
    origin("botleft"),
    "checkpointflag",
  ],
  "!": () => [
    sprite("icicle", { width: 60, height: 60 }),
    area(),
    solid(),
    origin("botleft"),
    "spike",
  ],
  "m": () => [
    sprite("gokumove", { width: 80, height: 90 }),
    area({ width: 60, height: 90 }),
    solid(),
    goku(),
    body({ jumpForce: JUMP_FORCE }),
    origin("botleft"),
    "player",
  ],
  "q": () => [
    sprite(ENEMYSPRITE, { anim: 'move' }),
    area(scale(0.8)),
    scale(0.2),
    body(),
    enemy(),
    patrol(300, ENEMY_SPEED),
    origin("botleft"),
    "ENEMY",
  ],
  "F": () => [
    sprite("piccolo", { anim: 'move' }),
    area(),
    scale(0.3),
    body(),
    enemy(),
    patrol(300),
    origin("botleft"),
    "piccolo",
  ],
  "w": () => [
    sprite(ENEMYSPRITE, { anim: 'move' }),
    area(scale(0.8)),
    scale(0.2),
    body(),
    enemy(),
    patrol(130, ENEMY_SPEED),
    origin("botleft"),
    "enemy1",
  ],
  "e": () => [
    sprite(ENEMYSPRITE, { anim: 'move' }),
    area(scale(0.8)),
    scale(0.2),
    body(),
    enemy(),
    patrol(130, ENEMY_SPEED),
    origin("botleft"),
    "enemy2",
  ],
  "r": () => [
    sprite(ENEMYSPRITE, { anim: 'move' }),
    area(scale(0.8)),
    body(),
    scale(0.2),
    enemy(),
    patrol(130, ENEMY_SPEED),
    origin("botleft"),
    "enemy3",
  ],
  "t": () => [
    sprite(ENEMYSPRITE, { anim: 'move' }),
    area(scale(0.8)),
    scale(0.2),
    body(),
    enemy(),
    patrol(130, ENEMY_SPEED),
    origin("botleft"),
    "enemy4",
  ],
  "|": () => [
    sprite("column", { width: 120, height: 240 }),
    scale(1),
    area(),
    solid(),
    origin("botleft"),
    "column",
  ],
  "a": () => [
    sprite("ki", { width: 60, height: 40 }),
    scale(1),
    area(),
    solid(),
    origin("botleft"),
    "ki",
  ],
  "b": () => [
    sprite("Gokuki", { width: 60, height: 50 }),
    area(),
    origin("botleft"),
    "Gokuki",
  ],
  "c": () => [
    sprite("esfera", { width: 70, height: 70, frame: currentEsferaIndex }), // Usa el frame correspondiente
    area(),
    origin("botleft"),
    "esfera",
  ],

  "j": () => [
    sprite("nubevoladora", { width: 70, height: 70 }),
    area(),
    origin("botleft"),
    "nubevoladora",
  ],
  "u": () => [
    sprite("portal", { anim: 'idle' }),
    scale(0.5),
    area(),
    origin("botleft"),
    "portal",
  ],
  "t": () => [
    text("Arrow Keys to move"),
    scale(0.5)
  ],
  "s": () => [
    text("Grab the Goku ki"),
    scale(0.5)
  ],
  "f": () => [
    text("Boss Battle: Piccolo"),
    scale(0.8)
  ],
  "p": () => [
    text("Space to Shoot ki"),
    scale(0.5)
  ],
  "g": () => [
    text("Grab the hermit seed"),
    scale(0.5)
  ],

};

add([
  sprite("background1", { width: width(), height: height() })
])
add([
  text("SOGOMI\n", {
    font: "sink", // Hay 4 fuentes disponibles: "apl386", "apl386o", "sink", y "sinko"
  }),
  color(0, 174, 239),
  scale(17),
  pos(width() / 2, 250),
  origin("center"),
]);
add([
  sprite("gokumove", { width: 80, height: 90 }),
  pos(width() / 2 + 5, height() / 2 - 25),
  origin("center"),
]);
add([
  sprite("brick", { width: 60, height: 60 }),
  pos(width() / 2, height() / 2 + 50),
  origin("center"),
]);
add([
  sprite("lava", { width: 60, height: 60 }),
  pos(width() / 2 + 100, height() / 2),
  origin("center"),
]);
add([
  sprite("cubo", { width: 60, height: 60 }),
  pos(width() / 2 - 100, height() / 2),
  origin("center"),
]);
add([
  sprite("spike", { width: 60, height: 60 }),
  pos(width() / 2 - 160, height() / 2),
  origin("center"),
]);

const Music = add([
  play("music", {
    volume: 0.03,
    loop: true,
  })
])

addButton("Empezar Juego", vec2(width() / 2, height() - 100), () => go("game"), Music.play());









scene("game", ({ levelId } = { levelId: 0 }) => {
  KI = 0;
  const label = add([
    layer("ui"),
    origin("topleft"),
    text(),
    pos(width() - 900, 50),
    scale(0.6),
    fixed(),
  ])
  add([
    layer("ui"),
    origin("topleft"),
    text("Time:"),
    scale(0.6),
    pos(width() - 1050, 50),
    fixed(),
  ])

  function updateText() {
    label.text = time().toFixed(1)

  }
  updateText()
  onUpdate(updateText)


  layers([
    "bg",
    "game",
    "ui",
  ], "game");

  const gokuHeart = add([
    layer("ui"),
    sprite("GokuHeart", { width: 60, height: 250 }),
    pos(50, 50),
    fixed()
  ])
  const Cargaki = add([
    layer("ui"),
    sprite("Cargaki", { width: 60, height: 250 }),
    pos(120, 50),
    fixed()
  ])


  GOKU_HEART++;
  loseHealth();
  losehealthwait == false;




  add([
    sprite(BACKGROUND, { width: width(), height: height() }),
    layer("bg"),
    fixed()
  ]);


  keyDown("o", () => {
    timer = label.text;
    wait(0.2, () => {
      if (levelId + 1 < LEVELS.length) {
        go("game", {
          levelId: levelId + 1,
        });
      } else {
        go("win");
      }
      levelShow();
      CHECKPOINT_NUM = 0;
      if (levelId == 0) {
        ENEMYSPRITE = "lavaenemy";
        SPRITE = "brick"
      } else if (levelId == 1) {
        ENEMYSPRITE = "lavaenemy";
        SPRITE = "brick"
        ball.enterState("move")
      } else if (levelId == 1) {
        ENEMYSPRITE = "lavaenemy";
        SPRITE = "brick"
      } else if (levelId == 3) {
        ENEMYSPRITE = "iceenemy";
        SPRITE = "snowbrick"
      }
      if (levelId < 3) {
        BACKGROUND = "background2"
      } else {
        BACKGROUND = "background3"
      }
    })
  });
  keyDown("p", () => {
    if (levelId - 1 > -1) {
      wait(0.2, () => {
        go("game", {
          levelId: levelId - 1,
        });
      });
    }
  });



  const levelShow = () => {

    destroy(levelText)
    levelText = add([
      outline(1),
      text("Nivel:" + (levelId + 1)),
      scale(0.6),
      origin('topleft'),
      layer("ui"),
      pos(width() - 200, 50),
      fixed(),

    ])
  }
  levelShow();

  const scoreShow = () => {

    destroy(scoreText)
    scoreText = add([
      outline(1),
      text("Score:" + (score)),
      scale(0.6),
      layer("ui"),
      origin('topleft'),
      pos(width() - 450, 50),
      fixed(),

    ])
  }
  scoreShow();


  const deathShow = () => {

    destroy(deathText)
    deathText = add([
      outline(1),
      text("Muertes:" + (death)),
      scale(0.6),
      layer("ui"),
      origin('topright'),
      pos(width() - 550, 50),
      fixed(),

    ])
  }
  deathShow();

  function loseHealth() {
    if (losehealthwait == false) {
      isDying = true;
      GOKU_HEART--;

      if (GOKU_HEART < 9) {
        if (GOKU_HEART< 8) {
          if (GOKU_HEART < 7) {
            if (GOKU_HEART < 6) {
              if (GOKU_HEART < 5) {
                if (GOKU_HEART < 4) {
                  if (GOKU_HEART < 3) {
                    if (GOKU_HEART< 2) {
                      if (GOKU_HEART < 1) {
                          gokuHeart.frame = 8;
                      }
                    } else {
                        gokuHeart.frame = 7;
                    }
                  } else {
                      gokuHeart.frame = 6;
                  }
                } else {
                    gokuHeart.frame = 5;
                }
              } else {
                  gokuHeart.frame = 4;
              }
            } else {
                gokuHeart.frame = 3;
            }
          } else {
              gokuHeart.frame = 2;
          }
        } else {
            gokuHeart.frame = 1;
        }
      } else {
        gokuHeart.frame = 0;
      }
      losehealthwait = true;
    }
  }
  function changeKi() {

    if (KI < 9) {
      if (KI < 8) {
        if (KI < 7) {
          if (KI < 6) {
            if (KI < 5) {
              if (KI < 4) {
                if (KI < 3) {
                  if (KI < 2) {
                    if (KI < 1) {
                      Cargaki.frame = 8;
                    }
                  } else {
                    Cargaki.frame = 7;
                  }
                } else {
                  Cargaki.frame = 6;
                }
              } else {
                Cargaki.frame = 5;
              }
            } else {
              Cargaki.frame = 4;
            }
          } else {
            Cargaki.frame = 3;
          }
        } else {
          Cargaki.frame = 2;
        }
      } else {
        Cargaki.frame = 1;
      }
    } else {
      Cargaki.frame = 0;
    }
  }
  changeKi();
  function checkpointDie() {

    death++;
    play("death_sound", {
      volume: 0.1,
      loop: false,
    });
    deathShow();
    go("game", {
      levelId: levelId,
    });
    GOKU_HEART = 9;
  }
  const level = addLevel(LEVELS[levelId ?? 0], levelConf);


  const directions = {
    LEFT: "left",
    RIGHT: "right"
  }

  let current_direction = directions.RIGHT;

  camPos(640, 350)
  onUpdate(() => {
    camPos(player.pos);
    if (player.pos.y > 800) {
      checkpointDie();
    }
    if (GOKU_HEART < 1) {
      checkpointDie();
    }
    if (losehealthwait == true) {
      player.frame = 12,
        wait(0.1, () => {
          player.frame = 13,
            wait(0.1, () => {
              player.frame = 14,
                wait(0.1, () => {
                  player.frame = 15
                })
            })
        })
      wait(0.1, () => {
        losehealthwait = false;
        isDying = false;
      })
    }
    if (keyIsPressed("f")) fullscreen(!fullscreen());

  });

  const laser = get("laser")[0]
  const player = get("player")[0]

  const enemy = get("enemy")[0]
  const piccolo = get("piccolo")[0]

  keyDown("right", () => {
    player.flipX(false);
    player.move(SPEED, 0);
    current_direction = directions.RIGHT;
  });
  keyDown("left", () => {
    player.flipX(true);
    current_direction = directions.LEFT;
    player.move(-SPEED, 0);
  });
  onKeyPress("up", () => {
    if (HAS_DOUBLEJUMP == false) {
      if (player.grounded()) {
        player.jump()
      }
    } else {
      player.doubleJump()
    };
  });


  keyPress("space", () => {
    if (HAS_GOKUKI == true) {
      if (KI > 0) {
        play("blast_sound", {
          volume: 0.03,
          loop: false,
        });
        spawnBullet(player.pos);
        KI--;
        changeKi();
      }
    }
  });
  onKeyPress("r", () => {
    go("game", {
      levelId: levelId,
    });
    GOKU_HEART = 9;
  });

  const ball = add([
    circle(0.1, 0.1),
    // Este enemigo pasa por 3 estados, y comienza desde el estado "idle".
    state("move", ["idle", "attack", "move",]),
  ])

  // Ejecutamos el callback una vez cada vez que entramos en estado "idle".
  // Aquí permanecemos "inactivos" durante 0.5 segundos, luego entramos en estado "ataque".
  ball.onStateEnter("idle", async () => {
    await wait(0.5)
    ball.enterState("attack")
  })

  // Cuando entramos en estado "ataque", disparamos una bala, y entramos en estado "movimiento" después de 1 seg.
  ball.onStateEnter("attack", async () => {

    // No hacer nada si el jugador ya no existe
    if (player.exists()) {

      const ball_dir = player.pos.sub(piccolo.pos).unit()

      add([
        pos(piccolo.pos),
        move(ball_dir, 800),
        circle(20, 20),
        area({ width: 40, height: 40 }),
        cleanup(),
        origin("center"),
        color(BLUE),
        "bullet",
      ])

    }

    await wait(1)
    ball.enterState("move")

  })

  ball.onStateEnter("move", async () => {
    await wait(2)
    ball.enterState("idle")
  })

  // Es como .onUpdate() que se ejecuta cada frame, pero solo se ejecuta cuando el estado actual es "move"
  // Aquí nos movemos hacia el jugador cada frame si el estado actual es "move"


  // Tenemos que llamar manualmente a enterState() para disparar el evento onStateEnter("move") que definimos arriba.



  function spawnBullet(bulletpos) {
    if (current_direction == directions.LEFT) {
      bulletpos = bulletpos.sub(10, 40);
    } else if (current_direction == directions.RIGHT) {
      bulletpos = bulletpos.add(70, -40);
    }
    add([
      circle(10, 10),
      color(255, 235, 42),
      pos(bulletpos),
      origin("center"),
      area({ width: 20, height: 20 }),
      "bullet",
      {
        bulletSpeed: current_direction == directions.LEFT ? -1 * BULLET_SPEED : BULLET_SPEED
      }
    ]);
  };
  onUpdate("bullet", (b) => {
    b.move(b.bulletSpeed, 0);
    if ((b.pos.x < 0) || (b.pos.x > player.pos.x + 300)) {
      destroy(b);
    }

  });
  onCollide("column", "bullet", (column, bullet) => {
    column.play("explode");
    wait(1, () => {
      destroy(column);
      destroy(bullet);
    })
  });

  onCollide("ground", "bullet", (ground, bullet) => {
    destroy(bullet);
  });
  onCollide("enemy", "bullet", (enemy, bullet) => {
    if (enemy.isAlive == false) return;
    METOOL_HEALTH--;
    destroy(bullet);
    if (METOOL_HEALTH < 1) {
      destroy(enemy);
      score++;
      scoreShow();
      if (levelId == 0) {
        METOOL_HEALTH = 3;
      } else if (levelId == 1) {
        METOOL_HEALTH = 8;
      } else if (levelId == 4) {
        METOOL_HEALTH = 15;
        ENEMY_SPEED = 200;
      }
    }
  });

  onCollide("piccolo", "bullet", (piccolo, bullet) => {
    if (enemy.isAlive == false) return;
    PICCOLO_HEALTH--;
    destroy(bullet);
    if (PICCOLO_HEALTH < 1) {
      destroy(piccolo)
      score += 10;
      scoreShow();
    }
  });


  player.collides("enemy", () => {
    if (enemy.isAlive == true) {
      loseHealth();
    }
  })
  player.collides("lava", () => {
    loseHealth();
  })
  player.collides("ki", (a) => {
    destroy(a),
      KI = 9;
    changeKi();
  })
  player.collides("ice", (i) => {
    i.play("destroy")
    wait(0.7, () => {
      destroy(i)
    })
  })
  player.collides("portal", () => {
    timer = label.text;
    play("teleport_sound", {
      volume: 0.03,
      loop: false,
    });
    if (levelId + 1 < LEVELS.length) {
      go("game", {
        levelId: levelId + 1,
      });
    } else {
      go("win");
    }
    levelShow();
    CHECKPOINT_NUM = 0;
    if (levelId == 0) {
      ENEMYSPRITE = "lavaenemy";
      SPRITE = "brick"
    } else if (levelId == 1) {
      ENEMYSPRITE = "lavaenemy";
      SPRITE = "brick"
    } else if (levelId == 2) {
      ENEMYSPRITE = "lavaenemy";
      SPRITE = "brick"
      ball.enterState("move")
    } else if (levelId == 3) {
      ENEMYSPRITE = "iceenemy";
      SPRITE = "snowbrick"

    }
    if (levelId < 3) {
      BACKGROUND = "background2"
    } else {
      BACKGROUND = "background3"
    }
  })





  player.collides("Gokuki", (b) => {
    HAS_GOKUKI = true;
    destroy(b)
  })
  player.collides("esfera", (c) => {
    destroy(c);          // Destruye la moneda recogida

    // Incrementa el índice de la moneda actual
    currentEsferaIndex++;

    // Si el índice supera el número de monedas, reinicia el índice
    if (currentEsferaIndex >= 7) {
      currentEsferaIndex = 0;
    }

    // Actualiza el frame de las próximas monedas
    get("esfera").forEach((esfera) => {
      esfera.frame = currentEsferaIndex;
    });
  });


  player.collides("nubevoladora", (j) => {
    HAS_DOUBLEJUMP = true;
    destroy(j)
  })
  player.collides("checkpointflag", (c) => {
    c.play('collectflag');
  })

  player.collides("potion", (p) => {
    GOKU_HEART = 10;
    loseHealth();
    destroy(p)
  })

  player.collides("spike", (s) => {
    loseHealth();
  })

});


scene("win", () => {
  HAS_GOKUKI = false;

  HAS_DOUBLEJUMP = false;
  add([
    sprite("background1", { width: width(), height: height() })
  ])
  add([
    text("Ganaste!\n"),
    scale(2),
    pos(width() / 2, 200),
    origin("center"),
  ]);
  add([
    sprite("gokumove", { width: 80, height: 90 }),
    pos(width() / 2 + 5, height() / 2 - 25),
    origin("center"),
  ]);
  add([
    sprite("brick", { width: 60, height: 60 }),
    pos(width() / 2, height() / 2 + 50),
    origin("center"),
  ]);
  add([
    sprite("lava", { width: 60, height: 60 }),
    pos(width() / 2 + 100, height() / 2),
    origin("center"),
  ]);
  add([
    sprite("cubo", { width: 60, height: 60 }),
    pos(width() / 2 - 100, height() / 2),
    origin("center"),
  ]);
  add([
    sprite("spike", { width: 60, height: 60 }),
    pos(width() / 2 - 160, height() / 2),
    origin("center"),
  ]);
  add([
    text(score, 32),
    scale(0.8),
    origin("center"),
    pos(width() / 2 - 330, height() / 2),
  ]);
  add([
    text(death, 32),
    scale(0.8),
    origin("center"),
    pos(width() / 2 + 590, height() / 2),
  ]);
  add([
    text("Puntuación:"),
    scale(0.8),
    origin("center"),
    pos(width() / 2 - 450, height() / 2),
  ]);
  add([
    text("Tiempo:"),
    scale(0.8),
    origin("center"),
    pos(width() / 2 - 100, height() / 2 - 100),
  ]);
  add([
    text(timer, 32),
    scale(0.8),
    origin("left"),
    pos(width() / 2, height() / 2 - 100),
  ]);
  add([
    text("Muertes:"),
    scale(0.8),
    origin("center"),
    pos(width() / 2 + 450, height() / 2),
  ]);

  addButton("Jugar de nuevo", vec2(width() / 2, height() - 100), () => go("game"), BACKGROUND = 'background1', SPRITE = 'cubo', ENEMYSPRITE = 'enemy', GOKU_HEART = 9)
});


function goku() {
  return {
    id: "goku",
    require: ["body", "area", "sprite"],
    Animation: "walk",
    jumpAnimation: "jump",
    dieanimation: "die",
    StopFrame: 0,
    BlastFrame: 11,
    update() {
      if (losehealthwait == false) {
        if (!this.grounded()) {
          this.jumping();
        }
        else {
          if (keyIsDown("left") || keyIsDown("right")) {
            this.running();
          } else if (keyIsDown("space")) {
            this.blasting();
          } else {
            this.standing();
          }
        }
      }

    },
    standing() {
      this.stop();
      this.frame = this.StopFrame;
    },
    jumping() {
      const JumpAnimation = this.jumpAnimation;
      if (this.curAnim() !== JumpAnimation) {
        this.play(JumpAnimation);
      }
    },
    blasting() {
      this.stop();
      this.frame = this.BlastFrame;
    },
    running() {
      const animation = this.Animation;
      if (this.curAnim() !== animation) {
        this.play(animation);
      }
    },
    die() {
      const DieAnimation = this.dieanimation;
      if (this.curAnim() !== DieAnimation) {
        this.play(DieAnimation);
      }
    },
  }
}