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
        // this.backgroundSize2 = {
        //     w: gameSize.w,
        //     h: gameScreen.h
        // }
        this.backgroundVel = {
            l: 0
        }

        this.init()
    }

    init() {
        this.backgroundElement = document.createElement("img")
        this.backgroundElement.src = "./img/bg.jpg"

        this.backgroundElement.style.position = "relative"
        this.backgroundElement.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement.style.left = `${this.backgroundPos.l}px`
        this.backgroundElement.style.top = `${this.backgroundPos.t}px`

        this.gameScreen.appendChild(this.backgroundElement)

        /*this.backgroundElement2 = document.createElement("img")
        this.backgroundElement2.src = "./img/bg.jpg"

        this.backgroundElement2.style.position = "relative"
        this.backgroundElement2.style.width = `${this.backgroundSize2.w}px`
        this.backgroundElement2.style.height = `${this.backgroundSize2.h}px`
        this.backgroundElement2.style.left = `${this.backgroundPos.l}px`
        this.backgroundElement2.style.top = `${this.backgroundPos.t}px`

        this.gameScreen.appendChild(this.backgroundElement2)*/

    }

    updatePos(playerPos) {
        if (playerPos > this.gameSize.w / 2) {
            this.backgroundPos.l -= 7
        } else {
            this.backgroundPos.l = 0
        }
        this.updatePosition()
    }
    updatePosition() {
        this.backgroundElement.style.left = `${this.backgroundPos.l}px`
    }

}