class S13{
    constructor (){
       this.title = createElement('h1');
       
      
    }

    display(){
        gs=13;
        this.title.position(displayWidth/2+200,30);
        this.title.html("MADHYA PRADESH");
        this.opt1 = createElement('h1.5');
        this.opt1.position(displayWidth/2+10,150);
        this.opt1.html("MADHYA PRADESH'S CAPITAL IS BHOPAL");
        this.opt2 = createElement('h1.5');
        this.opt2.position(displayWidth/2+10,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE IS HINDI");
        this.opt3 = createElement('h1.5');
        this.opt3.position(displayWidth/2+10,350);
        this.opt3.html("ITS AREA IS 308,000 km²");
        this.opt4 = createElement('h1.5');
        this.opt4.position(displayWidth/2+10,450);
        this.opt4.html("ITS POPULATION IS ABOUT 7.25 CRORES");
        this.opt5 = createElement('h1.5');
        this.opt5.position(displayWidth/2+10,550);
        this.opt5.html("FESTIVAL CELEBRATED IS LOKRANG");
        this.opt6 = createElement('h1.5');
        this.opt6.position(displayWidth/2+10,650);
        this.opt6.html("TERTALI IS FAMOUS DANCE FORM AT MADHYA PRADESH");
        back.show();
        
        
    }
}