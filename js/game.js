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
        jump: { code: "ArrowUp", pressed: false },
        moveR: { code: "ArrowRight", pressed: false },
        moveL: { code: "ArrowLeft", pressed: false },
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

        if (this.player.isMoving && this.player.playerPos.l > this.gameSize.w / 2) {

            const positionPlayer = this.player.getPosition()
            this.background.updatePos(positionPlayer)

            this.vObs[0].updatePos(positionPlayer)

            this.platforms[0].updatePos(positionPlayer)

        }

        window.requestAnimationFrame(() => this.gameLoop())
        this.isCollision()


    },
    setEventListeners() {
        document.onkeydown = (e) => {
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

    },

    isCollision() {


        let onplatform = false



        this.vObs.forEach((elm) => {
            if (this.player.playerPos.l + this.player.playerSize.w >= elm.vObsPos.l &&
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
                    onplatform = true
                    console.log("estoy arriba")
                    if (onplatform) {
                        this.player.playerPos.base = e.platformPos.t - this.player.playerSize.h
                    }
                } else if (!onplatform) {
                    this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h - 100
                    console.log("NO estoy arriba")
                }
            }



            )
    },

    gameOver() {
        alert("moriste wey")
    }

}


