class Player
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.standing = loadImage("IMAGES/PLAYER/playerStanding.png")

        this.body = createSprite(this.x,this.y,50,50);
    }

    display()
    {
        this.body.addImage(this.standing);
    }
}