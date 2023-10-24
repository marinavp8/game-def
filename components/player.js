class Player {
    constructor(gameSize, gameScreen) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen,
            this.isMoving = false

        this.playerSize = {
            w: 60,
            h: 60
        },
            this.playerPos = {
                l: 50,
                t: this.gameSize.h - this.playerSize.h - 100,
                base: this.gameSize.h - this.playerSize.h - 100
            }

        this.playerVel = {
            l: 0,
            t: 0,
            g: 0.5
        }

        this.init()

    }

    init() {
        this.playerElement = document.createElement("div")

        this.playerElement.style.position = "absolute"
        this.playerElement.style.backgroundColor = `black`
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.l}px`
        this.playerElement.style.top = `${this.playerPos.t}px`
        this.playerElement.style.zIndex = `1`


        this.gameScreen.appendChild(this.playerElement)

    }

    move(keys) {
        if (this.playerPos.t < this.playerPos.base) {
            this.playerPos.t += this.playerVel.t
            this.playerVel.t += this.playerVel.g
        } else {
            this.playerPos.t = this.playerPos.base
            this.playerVel.t = 1
        }
        keys.moveR.pressed && this.moveRight()
        keys.moveL.pressed && this.moveLeft()
        this.updatePosition()

    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.l}px`
        this.playerElement.style.top = `${this.playerPos.t}px`
    }
    jump() {
        if (this.playerPos.t >= this.playerPos.base) {
            this.playerPos.t -= 10
            this.playerVel.t -= 20
        }
    }
    moveRight() {
        if (this.playerPos.l < this.gameSize.w / 2) {
            this.playerPos.l += 10
            this.playerVel.l += 20
        }

    }
    moveLeft() {
        if (this.playerPos.l >= 0) {
            this.playerPos.l -= 10
            this.playerVel.l -= 20
        }
    }
    getPosition() {
        return this.playerPos.l
    }
    startMoving() {
        this.isMoving = true
    }
    stopMoving() {
        this.isMoving = false
    }
}

