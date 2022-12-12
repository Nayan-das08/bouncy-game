dir = [-1,1]
class ball {
    constructor(x=mouseX,y=mouseY)
    {
        this.radius  = random(20,40),
        this.x       = x,
        this.y       = y,
        this.x_dir   = dir[Math.floor(random()*dir.length)],//1,
        this.y_dir   = dir[Math.floor(random()*dir.length)],//1,
        this.x_vel   = random(5,15),
        this.y_vel   = random(5,10),
        this.r       = random(1,200),
        this.g       = random(1,200),
        this.b       = random(1,200),
        this.history = []
        // trail properties
        this.trail_length = 20,
        this.trail_frame_skip = 2,
        this.trail_frames_skipped = 0
    }
    display()
    {
        fill(this.r, this.g, this.b)

        strokeWeight(0)
        for (var i=0; i<this.history.length; i++)
        {
            // point(this.history[i].x, this.history[i].y)
            circle(this.history[i].x, this.history[i].y, map(i, 0, this.history.length, 1, this.radius)*2)
        }
        strokeWeight(2)
        circle(this.x, this.y, this.radius*2)
    }
    move()
    {
        if (this.x < this.radius || this.x > Width-this.radius)
        {
            this.x_dir *= -1
            // fill(random(255), random(255), random(255))
        }
        if (this.y < this.radius || this.y > Height-this.radius)
        {
            this.y_dir *= -1
            // fill(random(255), random(255), random(255))
        }

        this.x += this.x_vel*this.x_dir
        this.y += this.y_vel*this.y_dir

        // if (this.capture)
        // {
        //     this.history.push(createVector(this.x, this.y))
        //     this.capture = false
        // }
        // else
        //     this.capture = true
        if (this.trail_frames_skipped >= this.trail_frame_skip)
        {
            this.history.push(createVector(this.x, this.y))
            this.trail_frames_skipped = 0;
        }
        else
        {
            this.trail_frames_skipped++
        }
        if (this.history.length > this.trail_length)
            this.history.splice(0,1)
    }

};
