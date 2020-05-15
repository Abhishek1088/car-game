class Form {

    constructor(){

    }
  display(){
      var title = createElement('h2')
      title.html("Car racing")
      title.position(400,10)
      var name = createInput("Name")
      name.position(350,160)
      var button = createButton("Start")
      button.position(370,190)
      button.mousePressed(function(){

        name.hide()
        button.hide()
        var playername = name.value()
        playercount=playercount+1
        player.update(playername)
        player.updateCount(playercount)
        var greeting = createElement('h3')
        greeting.html('Hi '+playername)
        greeting.position(400,160)

      })
  }  

}