function Player(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 10;
    this.width = 50;
    this.height = 100;
    this.active = true;
    this.isJumping = false;
    // this.deltax = 5;

    this.step = function() {
        //Movement
        if (this.active) {
            //Horizontal Movement
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //Slow Down
                this.xspeed *= this.friction;
            } else if (rightKey) {
                //Move right
                this.xspeed++;
            } else if (leftKey) {
                //Move left
                this.xspeed--;
            }

            //Veritcal Movement
            if (upKey) {
                //Check if on ground
                if (!this.isJumping){
                    this.yspeed -= 20;
                    this.isJumping = true;
                }

            }

            //Apply gravity
            this.yspeed += 1; 

            //Correct Speed
            if (this.xspeed > this.maxSpeed) {
                this.xspeed = this.maxSpeed
            } 
            else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed
            } 
            this.x += this.xspeed;
            this.y += this.yspeed; 
            if (this.yspeed > this.maxSpeed) {
                this.yspeed = this.maxSpeed
            } 
            else if (this.yspeed < -this.maxSpeed) {
                this.yspeed = -this.maxSpeed
            } 

            //Collision with window borders
            if (this.y > screenHeight - this.height) {
                this.y = screenHeight - this.height
                this.isJumping = false;
                this.yspeed = 0;
            }
            if (this.x - this.xspeed < 0){
                this.x -= this.x;
                this.xspeed = 0
            } else if (this.x + this.xspeed > screenWidth - this.width) {
                this.x += (screenWidth - this.width) - this.x;
                this.xspeed = 0;
            } else {
                this.x += this.xspeed;
            }
            this.y += this.yspeed; 
        }
    }
    
    this.draw = function() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}