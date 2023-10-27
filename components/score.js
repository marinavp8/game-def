class Score {
    constructor(gameSize, gameScreen, scoreCounter) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.scoreCounter = scoreCounter



        this.scoreSize = {
            w: 100,
            h: 30
        }
        this.scorePos = {
            t: 20,
            l: gameSize.w - this.scoreSize.w
        }

        this.init()
    }

    init() {
        this.scoreElement = document.createElement("div")

        this.scoreElement.style.position = "absolute"
        this.scoreElement.style.width = `${this.scoreSize.w}px`
        this.scoreElement.style.height = `${this.scoreSize.h}px`
        this.scoreElement.style.left = `${this.scorePos.l}px`
        this.scoreElement.style.top = `${this.scorePos.t}px`

        this.scoreElement.style.backgroundColor = `pink`
        this.scoreElement.textContent = `Score: ${this.scoreCounter}`
        this.scoreElement.style.borderRadius = "10px"
        this.scoreElement.style.paddingLeft = "20px"

        this.gameScreen.appendChild(this.scoreElement)

    }
    updateStyle() {
        this.scoreElement.textContent = `Score: ${Game.scoreCounter}`
        console.log(this.scoreCounter)

    }
}
