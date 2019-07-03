$(document).ready(function() {
// hide images until ready
$('.marioEnemies').hide();
$('#marioHealth').hide();
$('.luigiEnemies').hide();
$('#luigiHealth').hide();
$('.peachEnemies').hide();
$('#peachHealth').hide();
$('#goombaHealth').hide();
$('#ptHealth').hide();
$('#warioHealth').hide();
$('#attack').hide();
$('#action').hide();

// set stats for all characters
var hero = [
    playerMario = {
        name: "mario",
        health: 1000,
        attack: 150,
    },
    playerLuigi = {
        name: "luigi",
        health: 800,
        attack: 120
    },
    playerPeach = {
        name: "peach",
        health: 2000,
        attack: 100
    }
]

var villain = [
    autoBowser = {
        name: "bowser",
        health: 1000,
        counter: 100
    },
    autoWario = {
        name: "wario",
        health: 1000,
        counter: 100
    },
    autoKoopaTroopa = {
        name: "koopatroopa",
        health: 800,
        counter: 80
    },
    autoParaTroopa = {
        name: "paratroopa",
        health: 800,
        counter: 80
    },
    autoGoomba = {
        name:"goomba",
        health: 800,
        counter: 80
    },
    autoBigBoo = {
        name: "bigboo",
        health: 1000,
        counter: 100
    }
]

// Reset the game if "RESET" button is clicked
$('#reset').on('click', function() {
    location.reload();
});

// Pick one of the three Hero characters.  Once character is clicked, the designated enemies for that character will appear and the other Heros will disappear. Selected Hero will fight enemies one at a time. Unselected enemies will disappear until it is their "turn".
$('#mario, #luigi, #peach').on('click', function() {
    if(this.id == 'mario') {
        $('.marioEnemies').show();
        $("#marioHealth").show();
        $('#luigi').hide();
        $('#peach').hide();
        $('#goomba, #paratroopa, #wario').click(function() {
            if(this.id == 'goomba') {
                $('#paratroopa').hide();
                $('#wario').hide();
                $('#goombaHealth').show();
                // $('#goombaDiv').animate({left: "+=500", top: "-=300"}, 2000);
            } else if(this.id == 'paratroopa') {
                $('#goomba').hide();
                $('#wario').hide();
                $('#ptHealth').show();
                // $('#paraDiv').animate({left: "+=300", top: "-=350"}, 2000);
            } else if(this.id == 'wario') {
                $('#goomba').hide();
                $('#paratroopa').hide();
                $('#warioHealth').show();
            }
            var villainName = this.alt.charAt(0).toUpperCase() + this.alt.slice(1);
            $('#marioDiv').animate({left: "+=200"}, 2000);
            $('#attack').show();
            $('#hero').text(`Mario vs. ${villainName}!`)
            $('.villain').hide();
        })
    } else if(this.id == 'luigi') {
        $('.luigiEnemies').show();
        $("#luigiHealth").show();
        $('#mario').hide();
        $('#peach').hide();
        $('#koopaTroopa, #paraTroopa, #bigBoo').on('click', function() {
            if(this.id == 'koopaTroopa') {
                $('#paraTroopa').hide();
                $('#bigBoo').hide();
            } else if(this.id == 'paraTroopa') {
                $('#koopaTroopa').hide();
                $('#bigBoo').hide();
            } else if(this.id == 'bigBoo') {
                $('#koopaTroopa').hide();
                $('#paraTroopa').hide();
            }
            var villainName = this.alt.charAt(0).toUpperCase() + this.alt.slice(1);
            $('#attack').show();
            $('#hero').text(`Luigi vs. ${villainName}`);
            $('.villain').hide();
        })
    } else if (this.id == 'peach') {
        $('.peachEnemies').show();
        $("#peachHealth").show();
        $('#mario').hide();
        $('#luigi').hide();
        $('#KoopaTroopa, #Goomba, #bowser').on('click', function() {
            if(this.id == 'KoopaTroopa') {
                $('#Goomba').hide();
                $('#bowser').hide();
            } else if(this.id == 'Goomba') {
                $('#KoopaTroopa').hide();
                $('#bowser').hide();
            } else if(this.id == 'bowser') {
                $('#KoopaTroopa').hide();
                $('#Goomba').hide();
            }
            var villainName = this.alt.charAt(0).toUpperCase() + this.alt.slice(1);
            $('#attack').show();
            $('#hero').text(`Peach vs. ${villainName}`);
            $('.villain').hide();
        })
    }
})

$('#attack').on('click', function() {
    $("#action").show();
    $("#actionText").css("margin-left", "15px")
    $("#actionText").css("margin-top", "10px");
    $("#actionText").html("<h3>" + "The fight has begun!" + "</h3>");
    // console.log(hero[0].health);
    // console.log(villain[4].health);
    startGame();
})

function startGame() {
    for(var i = 0;  i < hero.length; i++) {
        console.log(hero[i]);
        if(hero.name === "mario") {
            console.log("You chose Mario.");
            for(var j = 0; j < villain.length; j++) {
                console.log(villain[j]);
            }
        }
    }
}

})
