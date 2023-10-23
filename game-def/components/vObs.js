class VObs {
    constructor(gameSize, gameScreen, playerPos) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.playerPos = playerPos


        this.vObsSize = {
            w: 40,
            h: 80
        },
            this.vObsVel = {
                l: 0,
                t: 0

            }
        this.vObsPos = {
            l: 1000,
            t: this.gameSize.h - this.vObsSize.h - 100,
            base: this.playerPos.base
        }

        this.init()
    }

    init() {
        this.vObsElement = document.createElement("div")

        this.vObsElement.style.position = "absolute"
        this.vObsElement.style.backgroundColor = `blue`
        this.vObsElement.style.width = `${this.vObsSize.w}px`
        this.vObsElement.style.height = `${this.vObsSize.h}px`
        this.vObsElement.style.left = `${this.vObsPos.l}px`
        this.vObsElement.style.top = `${this.vObsPos.t}px`

        this.gameScreen.appendChild(this.vObsElement)

    }
    moveLeft() {
        this.vObsPos.l -= 20
        this.vObsVel.l -= 20

    }
}