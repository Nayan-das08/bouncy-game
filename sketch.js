dir = [-1,1]
class ball {
    constructor(x=mouseX,y=mouseY)
    {
        this.radius = random(20,60),
        // this.x      = mouseX,//random(this.radius, width-this.radius),
        // this.y      = mouseY,//random(this.radius, height-this.radius),
        this.x      = x,
        this.y      = y,
        this.x_dir  = dir[Math.floor(random()*dir.length)],//1,
        this.y_dir  = dir[Math.floor(random()*dir.length)],//1,
        this.x_vel  = random(5,10),
        this.y_vel  = random(5,10),
        this.r      = random(1,200),
        this.g      = random(1,200),
        this.b      = random(1,200)
    }
    display()
    {
        strokeWeight(2)
        fill(this.r, this.g, this.b)
        circle(this.x, this.y, this.radius*2)
        trail_canvas.strokeWeight(5)
        // trail_canvas.point(this.x, this.y)
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
    }

};

function preload()
{
    myfont = loadFont('fonts/Press Start 2P Font.ttf')
    // myfont = loadFont('fonts/OldSchoolAdventures.ttf')
}
    
function setup() 
{
    Width = windowWidth
    Height = windowHeight
    createCanvas(Width, Height)
    trail_canvas = createGraphics(width, height)
    trail_canvas.clear()
    balls = [] 
    balls.push(new ball(width/2, height/2))
}

function draw() 
{
    // image(trail_canvas,0,0)
    background(100,200,200)
    image(trail_canvas,0,0)
    
    textSize(15)
    textFont(myfont)
    textAlign(CENTER, TOP)
    fill(0)
    // text(`Tap to generate balls`, width/2, 10)
    text(`Double tap to pause`, width/2, 10)
    text(`Refresh to restart`, width/2, 35)
    textSize(25)
    text(`Tap anywhere to play`, width/2, height/2)

    for (var i=0; i<balls.length; i++)
    {
        balls[i].display()
        balls[i].move()
    }
}

function generate()
{
    balls.push(new ball())
}

function mousePressed()
{
    if (isLooping())
        generate()
    else
        loop()
}

function doubleClicked()
{
    noLoop()
}


