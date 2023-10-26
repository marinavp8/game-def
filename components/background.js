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
        this.backgroundPos2 = {
            l: gameSize.w,
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
        this.backgroundElement.src = "./img/bg2.jpg"

        this.backgroundElement.style.position = "absolute"
        this.backgroundElement.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement.style.left = `${this.backgroundPos.l}px`
        this.backgroundElement.style.top = `${this.backgroundPos.t}px`


        this.gameScreen.appendChild(this.backgroundElement)

        this.backgroundElement2 = document.createElement("img")
        this.backgroundElement2.src = "./img/bg2.jpg"

        this.backgroundElement2.style.position = "absolute"
        this.backgroundElement2.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement2.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement2.style.left = `${this.backgroundPos2.l}px`
        this.backgroundElement2.style.top = `${this.backgroundPos2.t}px`

        this.gameScreen.appendChild(this.backgroundElement2)
    }

    move() {
        if (this.backgroundPos.l <= -this.backgroundSize.w) {
            this.backgroundPos.l = 0
            this.backgroundPos2.l = this.backgroundSize.w
        }
        this.updatePosition()
    }

    updatePos(playerPos) {

        if (playerPos > this.gameSize.w / 2) {
            this.backgroundPos.l -= 3
            this.backgroundPos2.l -= 3
        } else {
            this.backgroundPos.l = 0
            this.backgroundPos2.l = 0
        }
        this.updatePosition()
    }
    updatePosition() {
        this.backgroundElement.style.left = `${this.backgroundPos.l}px`
        this.backgroundElement2.style.left = `${this.backgroundPos2.l}px`
    }

}