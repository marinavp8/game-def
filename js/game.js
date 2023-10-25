const Game = {
    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    framesCounter: 0,

    background: undefined,
    player: undefined,
    vObs: [],
    platforms: [],
    foods: [],



    keys: {
        jump: { code: "KeyW", pressed: false },
        moveR: { code: "KeyD", pressed: false },
        moveL: { code: "KeyA", pressed: false },
    },

    init() {
        let audioInicio = document.getElementById('audioInicio')
        audioInicio.play()

        // let btnIniciar = document.getElementById('btnIniciar');
        // btnIniciar.addEventListener('click', iniciarJuego);

        // btnIniciar.style.display = 'none';

        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    start() {
        this.createElements()
        this.gameLoop()
    },

    createElements() {
        this.player = new Player(this.gameSize, this.gameScreen)
        this.background = new Background(this.gameSize, this.gameScreen, this.player.playerPos)
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 800, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 1200, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 1300, 420, 500))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 1600, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 1900, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 1900, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2200, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2600, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2650, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2700, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2750, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2800, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2850, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2900, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 2950, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 3000, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 3050, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 3100, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4000, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4075, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4150, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4225, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4300, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4375, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4450, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4525, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4600, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4675, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4750, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4825, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4975, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 4900, 645, 645))
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos, 5050, 645, 645))




        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 1200, 500))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 2050, 500))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 2300, 350))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 2700, 400))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 3000, 250))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 3900, 500))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 4300, 300))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 4600, 100))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen, 4900, 550))




        this.foods.push(new Food(this.gameSize, this.gameScreen, 300, 200))

    },
    // 1000, this.gameSize.h - this.vObs[0].vObsSize.h - 100, this.player.playerPos.base
    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },
    gameLoop() {
        this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
        this.drawAll()

        if (this.player.isMoving && this.player.playerPos.l > this.gameSize.w / 2) {

            const positionPlayer = this.player.getPosition()
            this.background.updatePos(positionPlayer)

            this.vObs.forEach((e) => {
                e.updatePos(positionPlayer)
            })
            this.platforms.forEach((e) => {
                e.updatePos(positionPlayer)
            })

        }
        window.requestAnimationFrame(() => this.gameLoop())
        this.isCollision()


    },
    setEventListeners() {
        document.onkeydown = (e) => {
            console.log(e)
            switch (e.code) {
                case this.keys.moveR.code:
                    this.keys.moveR.pressed = true
                    this.player.startMoving()
                    break;
                case this.keys.moveL.code:
                    this.keys.moveL.pressed = true
                    break;
                case this.keys.jump.code:
                    this.player.jump()
                    break;
            }
        }
        document.onkeyup = (e) => {
            switch (e.code) {
                case this.keys.moveR.code:
                    this.keys.moveR.pressed = false
                    this.player.stopMoving()
                    break;
                case this.keys.moveL.code:
                    this.keys.moveL.pressed = false
                    break;
            }

        }
    },

    drawAll() {
        this.player.move(this.keys)
        this.background.move()
        this.player.moveFrames(this.framesIndex)

    },

    isCollision() {
        let onPlatform = false
        this.vObs.forEach((elm) => {
            if (this.player.playerPos.l + this.player.playerSize.w >= elm.vObsPos.l &&
                //this.this.player.platformPos.t >= elm.vObsPos.base &&z
                this.player.playerPos.t + this.player.playerSize.h >= elm.vObsSize.h &&
                this.player.playerPos.l <= elm.vObsPos.l + elm.vObsSize.w &&
                this.player.playerPos.t + this.player.playerSize.h >= elm.vObsPos.t + elm.vObsSize.w
            ) {
                return this.gameOver()
            }
        }),



            this.platforms.forEach((e) => {
                if (this.player.playerPos.l + this.player.playerSize.w >= e.platformPos.l &&
                    this.player.playerPos.l <= e.platformPos.l + e.platformSize.w &&
                    this.player.playerPos.t + this.player.playerSize.h + this.player.playerSize.w < e.platformPos.t + e.platformSize.h
                ) {
                    onPlatform = true
                    if (onPlatform) {
                        this.player.playerPos.base = e.platformPos.t - this.player.playerSize.h
                    }
                } else if (!onPlatform) {
                    this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h - 100
                }
            }
            )
    },

    gameOver() {
        alert("moriste wey")
    }

}


