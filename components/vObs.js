class VObs {
    constructor(gameSize, gameScreen, playerPos, vobsPosL, vobsPosT, vObsPosBase) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.playerPos = playerPos
        this.vobsPosL = vobsPosL
        this.vobsPosT = vobsPosT
        this.vObsPosBase = vObsPosBase

        this.vObsSize = {
            w: 60,
            h: 80
        }
        this.vObsVel = {
            l: 0,
            t: 0

        }
        this.vObsPos = {
            l: this.vobsPosL,
            t: this.vobsPosT,
            base: this.vObsPosBase
        }

        // this.vObsPos = {
        //     l: 1000,
        //     t: this.gameSize.h - this.vObsSize.h - 100,
        //     base: this.playerPos.base
        // }

        this.init()
    }

    init() {
        this.vObsElement = document.createElement("div")

        this.vObsElement.style.position = "absolute"
        // this.vObsElement.style.backgroundColor = `blue`
        this.vObsElement.style.width = `${this.vObsSize.w}px`
        this.vObsElement.style.height = `${this.vObsSize.h}px`
        this.vObsElement.style.left = `${this.vObsPos.l}px`
        this.vObsElement.style.top = `${this.vObsPos.t}px`

        this.vObsElement.style.backgroundImage = `url(./img/cactus.png)`
        // this.vObsElement.style.backgroundSize = `${this.vObsSize}px`
        // this.vObsElement.style.backgroundSize = "100% 100%";
        this.vObsElement.style.backgroundSize = "cover";




        this.vObsElement.style.overflow = "hidden"
        this.vObsElement.style.backgroundRepeat = "no-repeat"
        this.vObsElement.style.backgroundPositionX = `-20px`

        this.gameScreen.appendChild(this.vObsElement)

    }

    goLeft(playerPos) {


        if (playerPos > this.gameSize.w / 2) {
            this.vObsPos.l -= 7

        } else {
            this.vObsPos.l = 0
        }
        this.updatePosition()
    }
    goRight(playerPos) {
        if (playerPos < 200) {
            this.vObsPos.l += 7

        } else {
            this.vObsPos.l = 0
        }
        this.updatePosition()
    }
    updatePosition() {
        this.vObsElement.style.left = `${this.vObsPos.l}px`
    }

}