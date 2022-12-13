function setup() 
{
    Width = windowWidth
    Height = windowHeight
    createCanvas(Width, Height)
    // createCanvas(1080,1920)
    balls = [] 
    // for (var i=1; i<=10; i++)
        balls.push(new ball(width/2, height/2))
}

function draw() 
{
    background(100,200,200)

    for (var i=0; i<balls.length; i++)
    {
        balls[i].display()
        balls[i].move()
    }
    showText()
}

// -----------------------------------

function mousePressed()
{
    if  (isLooping() && 
        (mouseX > ball.max_radius) &&
        (mouseX < width-ball.max_radius) &&
        (mouseY > ball.max_radius) &&
        (mouseY < height-ball.max_radius))
        generate()
    else
        loop()
}

function showText()
{
    textFont(myfont)
    textAlign(CENTER, TOP)
    fill(0)
    textSize(35)
    // text(`Tap anywhere to play`, width/2, height/2-20)
    if (balls.length == 1)
        text(`${balls.length} ball`, width/2, height/2-20)
    else
        text(`${balls.length} balls`, width/2, height/2-20)
    textSize(15)
    text(`tap to create balls`, width/2, height/2+20)
    text(`Refresh to restart`, width/2, height/2+40)
}

function generate()
{
    balls.push(new ball())
}


// function doubleClicked()
// {
//     noLoop()
// }

function preload()
{
    myfont = loadFont('fonts/Press Start 2P Font.ttf')
    // myfont = loadFont('fonts/OldSchoolAdventures.ttf')
}

screen.orientation.lock("portrait")