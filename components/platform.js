class Platform {
    constructor(gameSize, gameScreen) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.platformSize = {
            w: 200,
            h: 70
        }

        this.platformPos = {
            l: 1200,
            t: 500
        }

        this.init()
    }

    init() {
        this.platformElement = document.createElement("div")

        this.platformElement.style.position = "absolute"
        this.platformElement.style.backgroundColor = `blue`
        this.platformElement.style.width = `${this.platformSize.w}px`
        this.platformElement.style.height = `${this.platformSize.h}px`
        this.platformElement.style.left = `${this.platformPos.l}px`
        this.platformElement.style.top = `${this.platformPos.t}px`

        this.gameScreen.appendChild(this.platformElement)
    }
    updatePos(playerPos) {
        console.log("entro con player pos", playerPos)
        if (playerPos > this.gameSize.w / 2) {
            this.platformPos.l -= 20
        } else {
            this.platformPos.l = 0
        }
        this.updatePosition()
    }
    updatePosition() {
        this.platformElement.style.left = `${this.platformPos.l}px`
    }

}