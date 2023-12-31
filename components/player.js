class Player {
    constructor(gameSize, gameScreen) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.isMoving = false

        this.playerSize = {
            w: 60,
            h: 60
        }
        this.playerPos = {
            l: 210,
            t: this.gameSize.h - this.playerSize.h - 100,
            //base: this.gameSize.h - this.playerSize.h - 130
        }

        this.playerVel = {
            l: 0,
            t: 0,
            g: 0.5
        }
        this.playerSprite = {
            backgroundPositionX: 0,
            totalFrames: 6,
            currentFrame: 1,
            frameSpeed: 7
        }
        this.init()

    }

    init() {
        this.playerElement = document.createElement("div")

        this.playerElement.style.position = "absolute"

        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.l}px`
        this.playerElement.style.top = `${this.playerPos.t}px`
        this.playerElement.style.zIndex = `1`

        this.playerElement.style.backgroundImage = `url(./img/monster.png)`
        this.playerElement.style.backgroundSize = "360px 60px ";

        // this.playerElement.style.backgroundSize = `${this.playerSize.t} ${this.playerSize.h}`;


        this.playerElement.style.overflow = "hidden"
        this.playerElement.style.backgroundRepeat = "no-repeat"
        this.playerElement.style.backgroundPositionX = `0px`


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
    moveFrames(framesCounter) {
        this.animateSprite(framesCounter)
        this.updateSprite()
    }
    animateSprite(framesCounter) {


        if (framesCounter % this.playerSprite.frameSpeed == 0) {
            this.playerSprite.currentFrame++
        }
        if (this.playerSprite.currentFrame >= this.playerSprite.totalFrames) {
            this.playerSprite.currentFrame = 0
        }


        this.playerSprite.backgroundPositionX = -this.playerSize.h * this.playerSprite.currentFrame
        this.updateSprite()
    }
    updateSprite() {
        this.playerElement.style.backgroundPositionX = `${this.playerSprite.backgroundPositionX}px`
    }

    updatePosition() {

        this.playerElement.style.left = `${this.playerPos.l}px`
        this.playerElement.style.top = `${this.playerPos.t}px`
    }
    jump() {
        if (this.playerPos.t >= this.playerPos.base) {
            this.playerPos.t -= 10
            this.playerVel.t -= 15
        }
    }
    moveRight() {
        if (this.playerPos.l < this.gameSize.w / 2) {
            this.playerPos.l += 5
            this.playerVel.l += 15
        }

    }
    moveLeft() {
        if (this.playerPos.l > 190) {
            this.playerPos.l -= 5
            this.playerVel.l -= 15
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

