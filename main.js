import { Player } from './player.js';


window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    class Game{
        constructor(width, height){
            this.width = width
            this.height = height
            this.player = new Player(this);
            this.image = document.getElementById('background');
        }
        update(){
            this.player.update();
            this.x++;
        }
        draw(context){
            context.drawImage(this.image, 0, 0, 1920, 1080);
            this.player.draw(context);
        }
    }


    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();

});