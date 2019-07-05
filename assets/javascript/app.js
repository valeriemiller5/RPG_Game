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
    mario = {
        name: 'Mario',
        health: 1000,
        attack: 150,
        clicked: false
    },
    luigi = {
        name: "Luigi",
        health: 800,
        attack: 120,
        clicked: false
    },
    peach = {
        name: "Peach",
        health: 2000,
        attack: 100,
        clicked: false
    }
]

var villain = [
    bowser = {
        name: "Bowser",
        health: 1000,
        counter: 100,
        clicked: false
    },
    wario = {
        name: "Wario",
        health: 1000,
        counter: 100,
        clicked: false
    },
    koopaTroopa = {
        name: "Koopatroopa",
        health: 800,
        counter: 80,
        clicked: false
    },
    paraTroopa = {
        name: "Paratroopa",
        health: 800,
        counter: 80,
        clicked: false
    },
    goomba = {
        name: 'Goomba',
        health: 800,
        counter: 80,
        clicked: false
    },
    bigBoo = {
        name: "Big Boo",
        health: 1000,
        counter: 100,
        clicked: false
    }
]

// reusable variables for keeping score
var heroName = []
var heroHealth = []
var heroAttack = []
var villainName = []
var villainHealth = []
var villainCounter = []

// Reset the game if "RESET" button is clicked
$('#reset').on('click', function() {
    location.reload();
});

// Pick one of the three Hero characters.  Once character is clicked, the designated enemies for that character will appear and the other Heros will disappear. Selected Hero will fight enemies one at a time. Unselected enemies will disappear until it is their "turn".
$('#mario, #luigi, #peach').on('click', function() {
    if(this.id == 'mario') {
        hero[0].clicked = true;
        $('.marioEnemies').show();
        $("#marioHealth").show();
        $('#luigi').hide();
        $('#peach').hide();
        $('#goomba, #paratroopa, #wario').click(function() {
            if(this.id == 'goomba') {
                villain[4].clicked = true;
                $('#paratroopa').hide();
                $('#wario').hide();
                $('#goombaHealth').show();
                // $('#goombaDiv').animate({left: "+=500", top: "-=300"}, 2000);
            } else if(this.id == 'paratroopa') {
                villain[3].clicked = true;
                $('#goomba').hide();
                $('#wario').hide();
                $('#ptHealth').show();
                // $('#paraDiv').animate({left: "+=300", top: "-=350"}, 2000);
            } else if(this.id == 'wario') {
                villain[1].clicked = true;
                $('#goomba').hide();
                $('#paratroopa').hide();
                $('#warioHealth').show();
            }
            var villainName = this.alt.charAt(0).toUpperCase() + this.alt.slice(1);
            $('#marioDiv').animate({left: "+=200"}, 2000);
            $('#attack').show();
            $('#hero').text(`Mario vs. ${villainName}!`)
            $('.villain').hide();
            startGame();
        })
    } else if(this.id == 'luigi') {
        hero[1].clicked = true;
        $('.luigiEnemies').show();
        $("#luigiHealth").show();
        $('#mario').hide();
        $('#peach').hide();
        $('#koopaTroopa, #paraTroopa, #bigBoo').on('click', function() {
            if(this.id == 'koopaTroopa') {
                villain[2].clicked = true;
                $('#paraTroopa').hide();
                $('#bigBoo').hide();
            } else if(this.id == 'paraTroopa') {
                villain[3].clicked = true;
                $('#koopaTroopa').hide();
                $('#bigBoo').hide();
            } else if(this.id == 'bigBoo') {
                villain[5].clicked = true;
                $('#koopaTroopa').hide();
                $('#paraTroopa').hide();
            }
            var villainName = this.alt.charAt(0).toUpperCase() + this.alt.slice(1);
            $('#attack').show();
            $('#hero').text(`Luigi vs. ${villainName}`);
            $('.villain').hide();
            startGame();
        })
    } else if (this.id == 'peach') {
        hero[2].clicked = true;
        $('.peachEnemies').show();
        $("#peachHealth").show();
        $('#mario').hide();
        $('#luigi').hide();
        $('#KoopaTroopa, #Goomba, #bowser').on('click', function() {
            if(this.id == 'KoopaTroopa') {
                villain[2].clicked = true;
                $('#Goomba').hide();
                $('#bowser').hide();
            } else if(this.id == 'Goomba') {
                villain[4].clicked = true;
                $('#KoopaTroopa').hide();
                $('#bowser').hide();
            } else if(this.id == 'bowser') {
                villain[0].clicked = true;
                $('#KoopaTroopa').hide();
                $('#Goomba').hide();
            }
            var villainName = this.alt.charAt(0).toUpperCase() + this.alt.slice(1);
            $('#attack').show();
            $('#hero').text(`Peach vs. ${villainName}`);
            $('.villain').hide();
            startGame();
        })
    }
})

$('#attack').on('click', function() {
    $("#action").show();
    $("#actionText").css("margin-left", "15px")
    $("#actionText").css("margin-top", "10px");
    $("#actionText").html("<h3>" + "The fight has begun!" + "</h3>");
    heroHealth = heroHealth - villainCounter;
    villainHealth = villainHealth - (heroAttack * 2.5);
    $('.marioHealth').css("width", Math.floor(100/heroHealth * heroHealth));
    $('#actionText').append(`
    ${heroName} attacked ${villainName}!
    <div>${villainName} has countered!</div>
    ${heroName}'s health is ${heroHealth}, ${villainName}'s health is ${villainHealth}`)
    if(heroHealth <= 0) {
        $('#action').html("<img id='gameOver' src='./assets/images/game_over.png'/>");
        console.log("Game Over");
    } else if(villainHealth <= 0) {
        $('#action').html("<img id='winner' src='./assets/images/winner.jpg'/>");
        console.log("You Win!!");
    }
})

function startGame() {
    for(var i = 0;  i < hero.length; i++) {
        // console.log(hero[i]);
        if(hero[i].clicked === true) {
            heroName.push(hero[i].name);
            heroHealth.push(hero[i].health);
            heroAttack.push(hero[i].attack);
            console.log(`You chose Hero: ${heroName}, Health: ${heroHealth}, Attack: ${heroAttack}`)
            for(var j = 0; j < villain.length; j++) {
                // console.log(villain[j]);
                if(villain[j].clicked === true) {
                    villainName.push(villain[j].name);
                    villainHealth.push(villain[j].health);
                    villainCounter.push(villain[j].counter);
                    console.log(`You chose Villain: ${villainName}, Health: ${villainHealth}, Counter: ${villainCounter}`)
                }
            }
        }
    }
}

})
