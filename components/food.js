class Food {
    constructor(gameSize, gameScreen, foodPosL, foodPosT) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.foodPosL = foodPosL
        this.foodPosT = foodPosT

        this.foodSize = {
            w: 50,
            h: 80
        }

        this.foodPos = {
            l: foodPosL,
            t: foodPosT
        }

        this.init()
    }

    init() {
        this.foodElement = document.createElement("div")

        this.foodElement.style.position = "absolute"
        this.foodElement.style.width = `${this.foodSize.w}px`
        this.foodElement.style.height = `${this.foodSize.h}px`
        this.foodElement.style.left = `${this.foodPos.l}px`
        this.foodElement.style.top = `${this.foodPos.t}px`

        this.foodElement.style.backgroundImage = `url(./img/flower.png)`

        // this.foodElement.style.backgroundSize = "cover";
        // this.foodElement.style.backgroundSize = "100% 100%";
        this.foodElement.style.backgroundSize = "contain";



        this.foodElement.style.overflow = "hidden"
        this.foodElement.style.backgroundRepeat = "no-repeat"
        this.foodElement.style.backgroundPositionX = `0`

        this.gameScreen.appendChild(this.foodElement)
    }
}