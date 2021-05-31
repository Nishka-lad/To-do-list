var arr=[]
function preload(){
    li1=loadImage("line.png")
}
function setup(){
    createCanvas(800,500)
    input = createInput("Task");
    input.style('width','250px');
    input.style('height','25px');
    input.style('background','Orange ');
    input.style('font-size','20px');
    //input.style('font-type','monotype corsiva')b10
    b1=createButton("Add");
    b1.style('width', '50px');
    b1.style('height', '30px');
    b1.style('background','DeepSkyBlue');
    b2=createButton("Task Done");
    b2.style('background','DeepSkyBlue');
    b3=createButton("Task Done");
    b3.style('background','Orange');
    b4=createButton("Task Done");
    b4.style('background','DeepSkyBlue');
    b5=createButton("Task Done");
    b5.style('background','Orange');
    b6=createButton("Task Done");
    b6.style('background','DeepSkyBlue');
    b7=createButton("Task Done");
    b7.style('background','Orange');
    b8=createButton("Task Done");
    b8.style('background','DeepSkyBlue');
    b9=createButton("Task Done");
    b9.style('background','Orange');
    l1=createSprite(420,115);
    l1.addImage("l", li1);
    l1.visible=false;
    l2=createSprite(420,165);
    l2.addImage("l", li1);
    l2.visible=false;
    l3=createSprite(420,215);
    l3.addImage("l", li1);
    l3.visible=false;
    l4=createSprite(420,265);
    l4.addImage("l", li1);
    l4.visible=false;
    l5=createSprite(420,315);
    l5.addImage("l", li1);
    l5.visible=false;
    l6=createSprite(420,365);
    l6.addImage("l", li1);
    l6.visible=false;
    l7=createSprite(420,415);
    l7.addImage("l", li1);
    l7.visible=false;
    l8=createSprite(420,465);
    l8.addImage("l", li1);
    l8.visible=false;
}

function draw(){
    background(0);
    input.position(250,10);
    b1.position(550,10);
    b2.position(550,80);
    b3.position(550,130);
    b4.position(550,180);
    b5.position(550,230);
    b6.position(550,280);
    b7.position(550,330);
    b8.position(550,380);
    b9.position(550,430);
    textSize(45);
    fill("DarkOrange");
    textFont("monotype corsiva")
    //fontWeight('bold');
    //fontWeight("bold")
    text("1. ", 30,100);
    text("3. ", 30,200);
    text("5. ", 30,300);
    text("7. ", 30,400);
    //fill("DeepSkyBlue");
    text("2. ", 30,150);
    text("4. ", 30,250);
    text("6. ", 30,350);
    text("8. ", 30,450);

    b1.mousePressed(function(){
        arr.push(input.value())
    })
    text(arr[0],65,100);
    text(arr[1],65,150);
    text(arr[2],65,200);
    text(arr[3],65,250);
    text(arr[4],65,300);
    text(arr[5],65,350);
    text(arr[6],65,400);
    text(arr[7],65,450);
    b2.mousePressed(function(){
        l1.visible=true
    })
    b3.mousePressed(function(){
        l2.visible=true
    })
    b4.mousePressed(function(){
        l3.visible=true
    })
    b5.mousePressed(function(){
        l4.visible=true
    })
    b6.mousePressed(function(){
        l5.visible=true
    })
    b7.mousePressed(function(){
        l6.visible=true
    })
    b8.mousePressed(function(){
        l7.visible=true
    })
    b9.mousePressed(function(){
        l8.visible=true
    })
    drawSprites();
}