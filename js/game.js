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

    keys: {
        jump: "ArrowUp",
        moveR: "ArrowRight",
        moveL: "ArrowLeft"
    },

    init() {
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
        this.vObs.push(new VObs(this.gameSize, this.gameScreen, this.player.playerPos))
        this.platforms.push(new Platform(this.gameSize, this.gameScreen))


    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },
    gameLoop() {
        this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
        this.drawAll()

        if (this.player.isMoving) {
            const playerPos = this.player.getPosition()
            this.background.updatePos(playerPos)
            this.vObs.updatePos(playerPos)
        }

        window.requestAnimationFrame(() => this.gameLoop())
        this.isCollision()


    },
    setEventListeners() {
        document.addEventListener("keydown", e => {
            switch (e.code) {
                case this.keys.jump:
                    console.log("jump")
                    this.player.jump()
                    break;
                case this.keys.moveR:
                    console.log("memuevo a la derecha")
                    this.player.moveRight()
                    this.player.startMoving()
                    break
                case this.keys.moveL:
                    console.log("memuevo a la izquierda")
                    this.player.moveLeft()
                    this.player.startMoving()
                    console.log("me estoy empezando a mover")
                    break

            }
        })
        document.addEventListener("keyup", e => {
            switch (e.code) {
                case this.keys.moveR:
                    this.player.stopMoving()
                    console.log("ya no me muevo a la derecha")
                    break
                case this.keys.moveL:
                    this.player.stopMoving()
                    console.log("ya no me muevo a la izquierda")
                    break

            }
        })
    },

    drawAll() {
        this.player.move()
    },

    isCollision() {
        this.vObs.forEach((elm) => {
            if (this.player.playerPos.l + this.player.playerSize.w >= elm.vObsPos.l &&
                this.player.playerPos.t + this.player.playerSize.h >= elm.vObsSize.h &&
                this.player.playerPos.l <= elm.vObsPos.l + elm.vObsSize.w
            ) {
                return this.gameOver()
            }

        })
    },
    gameOver() {
        alert("moriste wey")
    }

}