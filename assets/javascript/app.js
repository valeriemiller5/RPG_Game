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

// set stats for all characters
var mario = {
    health: 1000,
    attack: 150,
};
var luigi = {
    health: 800,
    attack: 120
};
var peach = {
    health: 2000,
    attack: 100
};
var bowser = {
    health: 1000,
    counter: 100
};
var wario = {
    health: 1000,
    counter: 100
};
var koopaTroopa = {
    health: 800,
    counter: 80
};
var paraTroopa = {
    health: 800,
    counter: 80
};
var goomba = {
    health: 800,
    counter: 80
};
var bigBoo = {
    health: 1000,
    counter: 100
};

// Reset the game if "RESET" button is clicked
$('#reset').click(function() {
    location.reload();
});

// Pick one of the three Hero characters.  Once character is clicked, the designated enemies for that character will appear and the other Heros will disappear. Selected Hero will fight enemies one at a time. Unselected enemies will disappear until it is their "turn".
$('#mario, #luigi, #peach').click(function() {
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

function startGame() {
    
}

})
