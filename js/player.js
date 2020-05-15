class Player {

    constructor(){}

    getCount(){
        var pref = database.ref('playercount')
        pref.on("value",function(data){

            playercount = data.val()

        })
    }
    update(name){

        var playerindex = "player"+playercount
        database.ref(playerindex).set({

            name:name
        })
    }
    updateCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
}