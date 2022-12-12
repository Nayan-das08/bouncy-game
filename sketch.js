function setup() 
{
    Width = windowWidth
    Height = windowHeight
    createCanvas(Width, Height)
    // createCanvas(1080,1920)
    balls = [] 
    balls.push(new ball(width/2, height/2))
}

function draw() 
{
    // image(trail_canvas,0,0)
    background(100,200,200)
    // image(trail_canvas,0,0)
    

    for (var i=0; i<balls.length; i++)
    {
        balls[i].display()
        balls[i].move()
    }
    showText()
}

// -----------------------------------

function showText()
{
    textFont(myfont)
    textAlign(CENTER, TOP)
    fill(0)
    // text(`Tap to generate balls`, width/2, 10)
    // text(`Double tap to pause`, width/2, 10)
    textSize(35)
    text(`Tap anywhere to play`, width/2, height/2-20)
    textSize(25)
    text(`Refresh to restart`, width/2, height/2+20)
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

function preload()
{
    myfont = loadFont('fonts/Press Start 2P Font.ttf')
    // myfont = loadFont('fonts/OldSchoolAdventures.ttf')
}

screen.orientation.lock("portrait")