class Background {
    constructor(gameSize, gameScreen, playerPos) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.playerPos = playerPos

        this.backgroundSize = {
            w: gameSize.w,
            h: gameScreen.h,
        }
        this.backgroundPos = {
            l: 0,
            t: 0
        }
        this.backgroundVel = {
            l: 5
        }

        this.init()
    }

    init() {
        this.backgroundElement = document.createElement("img")
        this.backgroundElement.src = "./img/bg.jpg"

        this.backgroundElement.style.position = "absolute"
        this.backgroundElement.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement.style.left = `${this.backgroundPos.l}px`
        this.backgroundElement.style.top = `${this.backgroundPos.t}px`

        this.gameScreen.appendChild(this.backgroundElement)

    }
    moveRigth() {

        this.backgroundPos.l -= 20
        this.backgroundVel.l -= 20


    }
}