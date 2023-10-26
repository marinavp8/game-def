class Platform {
    constructor(gameSize, gameScreen, platformPosL, platformPosT) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.platformPosL = platformPosL
        this.platformPosT = platformPosT

        this.platformSize = {
            w: 200,
            h: 80
        }
        this.platformPos = {
            l: platformPosL,
            t: platformPosT
        }


        // this.platformPos = {
        //     l: 1200,
        //     t: 500
        // }

        this.init()
    }

    init() {
        this.platformElement = document.createElement("div")

        this.platformElement.style.position = "absolute"
        this.platformElement.style.width = `${this.platformSize.w}px`
        this.platformElement.style.height = `${this.platformSize.h}px`
        this.platformElement.style.left = `${this.platformPos.l}px`
        this.platformElement.style.top = `${this.platformPos.t}px`

        this.platformElement.style.backgroundImage = `url(./img/grass.png)`

        this.platformElement.style.backgroundSize = "cover";


        this.platformElement.style.overflow = "hidden"
        this.platformElement.style.backgroundRepeat = "no-repeat"
        this.platformElement.style.backgroundPositionX = `-20px`

        this.gameScreen.appendChild(this.platformElement)


        this.gameScreen.appendChild(this.platformElement)
    }
    updatePos(playerPos) {


        if (playerPos > this.gameSize.w / 2) {
            this.platformPos.l -= 7
        } else {
            this.platformPos.l = 0
        }
        this.updatePosition()
    }
    updatePosition() {
        this.platformElement.style.left = `${this.platformPos.l}px`
    }

}