class Question{
constructor(){
this.title = createElement( 'h1')
this.input1 = createInput( "Enter Your Name ")
this.input2 = createInput("Enter your Answer")
this.button = createButton("Submit The Answer")
this.question = createElement("h3")
this.option1 = createElement("h4")
this.option2 = createElement("h4")
this.option3 = createElement("h4")
this.option4 = createElement("h4")

    }

 hide(){
 this.title.hide()
 this.input1.hide()
 this.input2.hide()
 this.button.hide()    
 }   

 display(){
    this.title.html("Nathan's quiz game")
     this.title.position(width/2,20)

     this.question.html("what is Nathan's favorite color ?" )
     this.question.position(140,80)

     this.option1.html("1. Yellow")
     this.option1.position(140,100)

     this.option2.html("2. Blue")
     this.option2.position(140,120)

     this.option3.html("3. Black")
     this.option3.position(140,140)

     this.option4.html("4. Red")
     this.option4.position(140,160)

     this.input1.position(130,200)
     this.input2.position(300,200)
     this.button.position(230,250)

     this.button.mousePressed(()=>{
     this.title.hide() 
     this.input1.hide()
     this.input2.hide()
     this.button.hide()
     contestant.name  =   this.input1.value()
     contestant.answer = this.input2.value()
     contestantCount = contestantCount +1
     contestant.index = contestantCount
     contestant.update()
     contestant.updateCount(contestantCount)

     })
     }

}