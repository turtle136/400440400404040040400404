class Inventory {
    constructor() {
        this.button1 = createButton('__');
        this.button2 = createButton('__');
        this.button3 = createButton('__');
        this.title = createElement('h2');
        
        
    }
    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.title.hide();
      }
      show(){
        this.button1.show();
        this.button2.show();
        this.button3.show();
        this.title.show();
      }
    display(){
        this.title.html("The Inventory");
        this.title.position(displayWidth/2 - 5, 0);
    
        this.button1.position(displayWidth/2 + -20, displayHeight/13);
        this.button2.position(displayWidth/2 + 55, displayHeight/13);
        this.button3.position(displayWidth/2 + 130, displayHeight/13);
        //tint(235,100);

        /*if(keyIsDown(69)){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.title.hide();

        }*/
    }

  }