export class Player{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = 100;
        this.image = document.getElementById('player');
        this.right = true
        this.up = true
    }

    update(){
        if(this.right == true){
            this.x++
        }
        else{
            this.x--
        }

        if(this.x <=0){
            this.right = true;
        }
        if (this.x >= 1000){
            this.right = false;
        }

        if(this.up == true){
            this.y+=2
        }
        else{
            this.y-=2
        }

        if(this.y <=0){
            this.up = true;
        }
        if (this.y >= 1000){
            this.up = false;
        }

    }

    draw(context){
        context.drawImage(this.image, this.x, this.y);
    }
}
