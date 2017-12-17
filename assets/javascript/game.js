var dogeClicked = false
var sosijClicked = false
var russiaClicked = false
var moonClicked = false
var sosijCounterClicked = false
var moonCounterClicked = false
var russiaCounterClicked = false
var dogeCounterClicked = false
var killCount = 0
var doge = {
	name: "Dr. Doge", 
	attack: 8,
	healthPoints: 120,
	counterAttackPower: 20 
}

var sosijDoggo = {
	name: "Sosij Doggo",
	attack: 14,
	healthPoints: 100,
	counterAttackPower: 17
}

var moonMoon = {
	name: "Moon Moon",
	attack: 8,
	healthPoints: 150,
	counterAttackPower: 7
}

var comradeDoggo = {
	name: "Comrade Doggo",
	attack: 7,
	healthPoints: 192,
	counterAttackPower: 6
}

$(document).ready(function(){
	$("#dogedefendbox").hide();
	$("#russiadefendbox").hide();
	$("#sosijdefendbox").hide();
	$("#moondefendbox").hide();
	$("#dogecharbox").hide();
	$("#mooncharbox").hide();
	$("#russiacharbox").hide();
	$("#sosijshowbox").hide();
	$("#dogeshowbox").hide();
	$("#sosijcharbox").hide();
	$("#moonshowbox").hide();
	$("#russiashowbox").hide();

	$("#doge").click(function(){
		$("#moon").hide();
		$("#russia").hide();
		$("#sosij").hide();
		$("#moonshow").show();
		$("#russiashow").show();
		$("#sosijshow").show();
		$("#dogechar").show();
		$("#doge").hide();
		$("#dogehealth1").html(doge.healthPoints);
		$("#dogename1").html(doge.name);
		$("#dogecharbox").show();
		$("#russiahealth2").html(comradeDoggo.healthPoints);
		$("#russianame2").html(comradeDoggo.name);
		$("#moonshowbox").show();
		$("#russiashowbox").show();
		$("#sosijshowbox").show();
		$("#moonhealth2").html(moonMoon.healthPoints);
		$("#moonname2").html(moonMoon.name);
		$("#sosijhealth2").html(sosijDoggo.healthPoints);
		$("#sosijname2").html(sosijDoggo.name);
		dogeClicked = true;
				$("#sosijshow").click(function(){
				$("#sosijdefend").show();
				$("#sosijshow").hide();
				$("#sosijname").html(sosijDoggo.name)
				$("#sosijhealth").html(sosijDoggo.healthPoints)
				$("#sosijdefendbox").show();
				$("#sosijshowbox").hide();
				sosijCounterClicked = true;
			
			if (dogeClicked == true && sosijCounterClicked == true) {
					$('.enableOnInput').prop('disabled', false);
				$("#attackbutton").click(function(){
					var newSDHP = sosijDoggo.healthPoints -= doge.attack
					var newdHP = doge.healthPoints -= sosijDoggo.counterAttackPower
					$("#sosijhealth").html(newSDHP)
					$("#dogehealth1").html(newdHP)
					$("#message").html("you have attacked for " + doge.attack + " health")
					$("#message2").html("You were attacked for " + sosijDoggo.counterAttackPower + " health")
					doge.attack += 8 

						if (newSDHP <= 0) {
							$("#sosijdefendbox").hide();
							$("#sosijdefend").hide();
							$("#message").html("you have defeated sosij Doggo. Please pick another character to fight.")
							$("#message2").html("")
							killCount++
							sosijDoggo.healthPoints = 10000
							var sosijhide = true
						} if (newdHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (sosijhide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
					})
				}
			})
				$("#moonshow").click(function(){
				$("#moondefend").show();
				$("#moonshow").hide();
				$("#moonname").html(moonMoon.name)
				$("#moonhealth").html(moonMoon.healthPoints)
				$("#moondefendbox").show();
				$("#moonshowbox").hide();
				moonCounterClicked = true;

					if (dogeClicked == true && moonCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newMHP = moonMoon.healthPoints -= doge.attack
							var newdHP = doge.healthPoints -= moonMoon.counterAttackPower
							$("#moonhealth").html(newMHP)
							$("#dogehealth1").html(newdHP)
							$("#message").html("you have attacked for " + doge.attack + " health")
							$("#message2").html("You were attacked for " + moonMoon.counterAttackPower + " health")
							doge.attack += 8

								if (newMHP <= 0) {
								killCount++
								$("#moondefendbox").hide();
								$("#moondefend").hide();
								$("#message").html("you have defeated Moon Moon. Please pick another character to fight.")
								$("#message2").html("")
								moonMoon.healthPoints = 10000
								var moonhide = true
							} if (newdHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (moonhide == true) {
							$('.enableOnInput').prop('disabled', true);
							}
						})
					}
				})
					$("#russiashow").click(function(){
					$("#russiadefend").show();
					$("#russiashow").hide();
					$("#russianame").html(comradeDoggo.name)
					$("#russiahealth").html(comradeDoggo.healthPoints)
					$("#russiadefendbox").show();
					$("#russiashowbox").hide();
					russiaCounterClicked = true;

						if (dogeClicked == true && russiaCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newRHP = comradeDoggo.healthPoints -= doge.attack
							var newdHP = doge.healthPoints -= comradeDoggo.counterAttackPower
							$("#russiahealth").html(newRHP)
							$("#dogehealth1").html(newdHP)
							$("#message").html("you have attacked for " + doge.attack + " health")
							$("#message2").html("You were attacked for " + comradeDoggo.counterAttackPower + " health")
							doge.attack += 8
								if (newRHP <= 0) {
								killCount++
								$("#russiadefendbox").hide()
								$("#russiadefend").hide()
								$("#message").html("you have defeated Comrade Doggo. Please pick another character to fight.")
								$("#message2").html("")
								comradeDoggo.healthPoints = 10000
								var russiahide = true
							} if (newdHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (russiahide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
			})

	$("#moon").click(function(){
		$("#doge").hide();
		$("#russia").hide();
		$("#sosij").hide();
		$("#sosijshow").show();
		$("#russiashow").show();
		$("#dogeshow").show();
		$("#moonchar").show();
		$("#moon").hide();
		$("#mooncharbox").show();
		$("#moonhealth1").html(moonMoon.healthPoints);
		$("#moonname1").html(moonMoon.name);
		$("#russiahealth2").html(comradeDoggo.healthPoints);
		$("#russianame2").html(comradeDoggo.name);
		$("#dogeshowbox").show();
		$("#russiashowbox").show();
		$("#sosijshowbox").show();
		$("#dogehealth2").html(doge.healthPoints);
		$("#dogename2").html(doge.name);
		$("#sosijhealth2").html(sosijDoggo.healthPoints);
		$("#sosijname2").html(sosijDoggo.name);
		moonClicked = true;

				$("#sosijshow").click(function(){
				$("#sosijdefend").show();
				$("#sosijshow").hide();
				$("#sosijname").html(sosijDoggo.name)
				$("#sosijhealth").html(sosijDoggo.healthPoints)
				$("#sosijdefendbox").show();
				$("#sosijshowbox").hide();
				sosijCounterClicked = true;
				console.log(sosijCounterClicked)
			
			if (moonClicked == true && sosijCounterClicked == true) {
				$('.enableOnInput').prop('disabled', false);
				$("#attackbutton").click(function(){

					var newSDHP = sosijDoggo.healthPoints -= moonMoon.attack
					var newMHP = moonMoon.healthPoints -= sosijDoggo.counterAttackPower
					$("#sosijhealth").html(newSDHP)
					$("#moonhealth1").html(newMHP)
					$("#message").html("you have attacked for " + moonMoon.attack + " health")
					$("#message2").html("You were attacked for " + sosijDoggo.counterAttackPower + " health")
					moonMoon.attack += 8
						if (newSDHP <= 0) {
							$("#sosijdefendbox").hide();
							$("#sosijdefend").hide();
							$("#message").html("you have defeated sosij Doggo. Please pick another character to fight.")
							$("#message2").html("")
							killCount++
							sosijDoggo.healthPoints = 10000
							var sosijhide = true
						} if (newMHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (sosijhide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
					})
				}
			})
				$("#dogeshow").click(function(){
				$("#dogedefend").show();
				$("#dogeshow").hide();
				$("#dogename").html(doge.name)
				$("#dogehealth").html(doge.healthPoints)
				$("#dogedefendbox").show();
				$("#dogeshowbox").hide();
				dogeCounterClicked = true;
					if (moonClicked == true && dogeCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newDHP = doge.healthPoints -= moonMoon.attack
							var newMHP = moonMoon.healthPoints -= doge.counterAttackPower
							$("#dogehealth").html(newDHP)
							$("#moonhealth1").html(newMHP)
							$("#message").html("you have attacked for " + moonMoon.attack + " health")
							$("#message2").html("You were attacked for " + doge.counterAttackPower + " health")
							moonMoon.attack += 8
								if (newDHP <= 0) {
								$("#dogedefendbox").hide();
								$("#dogedefend").hide();
								$("#message").html("you have defeated Doge. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								doge.healthPoints = 10000
								var dogehide = true
							} if (newMHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (dogehide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
					$("#russiashow").click(function(){
					$("#russiadefend").show();
					$("#russiashow").hide();
					$("#russianame").html(comradeDoggo.name)
					$("#russiahealth").html(comradeDoggo.healthPoints)
					$("#russiadefendbox").show();
					$("#russiashowbox").hide();
					russiaCounterClicked = true;

						if (moonClicked == true && russiaCounterClicked == true) {
							$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newRHP = comradeDoggo.healthPoints -= moonMoon.attack
							var newMHP = moonMoon.healthPoints -= comradeDoggo.counterAttackPower
							$("#russiahealth").html(newRHP)
							$("#moonhealth1").html(newMHP)
							$("#message").html("you have attacked for " + moonMoon.attack + " health")
							$("#message2").html("You were attacked for " + comradeDoggo.counterAttackPower + " health")
							moonMoon.attack += 8
							console.log(sosijCounterClicked)
							console.log(dogeClicked)
								if (newRHP <= 0) {
								$("#russiadefendbox").hide();
								$("#russiadefend").hide()
								$("#message").html("you have defeated Comrade Doggo. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								comradeDoggo.healthPoints = 10000
								var russiahide = true
							} if (newMHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (russiahide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
			})
	
	$("#russia").click(function(){
		$("#moon").hide();
		$("#doge").hide();
		$("#sosij").hide();
		$("#moonshow").show();
		$("#sosijshow").show();
		$("#dogeshow").show();
		$("#russiachar").show();
		$("#russia").hide();
		$("#russiacharbox").show();
		$("#russiahealth1").html(comradeDoggo.healthPoints);
		$("#russianame1").html(comradeDoggo.name);
		$("#dogehealth2").html(doge.healthPoints);
		$("#dogename2").html(doge.name);
		$("#moonshowbox").show();
		$("#dogeshowbox").show();
		$("#sosijshowbox").show();
		$("#moonhealth2").html(moonMoon.healthPoints);
		$("#moonname2").html(moonMoon.name);
		$("#sosijhealth2").html(sosijDoggo.healthPoints);
		$("#sosijname2").html(sosijDoggo.name);
		russiaClicked = true;

				$("#sosijshow").click(function(){
				$("#sosijdefend").show();
				$("#sosijshow").hide();
				$("#sosijname").html(sosijDoggo.name)
				$("#sosijhealth").html(sosijDoggo.healthPoints)
				$("#sosijdefendbox").show();
				$("#sosijshowbox").hide();
				sosijCounterClicked = true;
			
			if (russiaClicked == true && sosijCounterClicked == true) {
				$('.enableOnInput').prop('disabled', false);
				$("#attackbutton").click(function(){

					var newSDHP = sosijDoggo.healthPoints -= comradeDoggo.attack
					var newCHP = comradeDoggo.healthPoints -= sosijDoggo.counterAttackPower
					$("#sosijhealth").html(newSDHP)
					$("#russiahealth1").html(newCHP)
					$("#message").html("you have attacked for " + comradeDoggo.attack + " health")
					$("#message2").html("You were attacked for " + sosijDoggo.counterAttackPower + " health")
					comradeDoggo.attack += 7
						if (newSDHP <= 0) {
							$("#sosijdefendbox").hide();
							$("#sosijdefend").hide();
							$("#message").html("you have defeated sosij Doggo. Please pick another character to fight.")
							$("#message2").html("")
							killCount++
							sosijDoggo.healthPoints = 10000
							var sosijhide = true
						} if (newCHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (sosijhide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
					})
				}
			})
				$("#dogeshow").click(function(){
				$("#dogedefend").show();
				$("#dogeshow").hide();
				$("#dogename").html(doge.name)
				$("#dogehealth").html(doge.healthPoints)
				$("#dogedefendbox").show();
				$("#dogeshowbox").hide();
				dogeCounterClicked = true;
					if (russiaClicked == true && dogeCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newDHP = doge.healthPoints -= comradeDoggo.attack
							var newCHP = comradeDoggo.healthPoints -= doge.counterAttackPower
							$("#dogehealth").html(newDHP)
							$("#russiahealth1").html(newCHP)
							$("#message").html("you have attacked for " + comradeDoggo.attack + " health")
							$("#message2").html("You were attacked for " + doge.counterAttackPower + " health")
							comradeDoggo.attack += 7
								if (newDHP <= 0) {
								$("#dogedefendbox").hide();
								$("#dogedefend").hide();
								$("#message").html("you have defeated Doge. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								doge.healthPoints = 10000
								var dogehide = true
							} if (newCHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (dogehide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
				$("#moonshow").click(function(){
				$("#moondefend").show();
				$("#moonshow").hide();
				$("#moonname").html(moonMoon.name)
				$("#moonhealth").html(moonMoon.healthPoints)
				$("#moondefendbox").show();
				$("#moonshowbox").hide();
				moonCounterClicked = true;

					if (russiaClicked == true && moonCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newMHP = moonMoon.healthPoints -= comradeDoggo.attack
							var newCHP = comradeDoggo.healthPoints -= moonMoon.counterAttackPower
							$("#moonhealth").html(newMHP)
							$("#russiahealth1").html(newCHP)
							$("#message").html("you have attacked for " + comradeDoggo.attack + " health")
							$("#message2").html("You were attacked for " + moonMoon.counterAttackPower + " health")
							comradeDoggo.attack += 7
								if (newMHP <= 0) {
								$("#moondefendbox").hide();
								$("#moondefend").hide();
								$("#message").html("you have defeated Moon Moon. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								moonMoon.healthPoints = 10000
								var moonhide = true
							} if (newCHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (moonhide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
			})

	$("#sosij").click(function(){
		$("#moon").hide();
		$("#russia").hide();
		$("#doge").hide();
		$("#moonshow").show();
		$("#russiashow").show();
		$("#dogeshow").show();
		$("#sosijchar").show();
		$("#sosij").hide();
		$("#sosijcharbox").show();
		$("#sosijhealth1").html(sosijDoggo.healthPoints);
		$("#sosijname1").html(sosijDoggo.name);
		$("#russiahealth2").html(comradeDoggo.healthPoints);
		$("#russianame2").html(comradeDoggo.name);
		$("#moonshowbox").show();
		$("#russiashowbox").show();
		$("#dogeshowbox").show();
		$("#moonhealth2").html(moonMoon.healthPoints);
		$("#moonname2").html(moonMoon.name);
		$("#dogehealth2").html(doge.healthPoints);
		$("#dogename2").html(doge.name);
		sosijClicked = true

					$("#russiashow").click(function(){
					$("#russiadefend").show();
					$("#russiashow").hide();
					$("#russianame").html(comradeDoggo.name)
					$("#russiahealth").html(comradeDoggo.healthPoints)
					$("#russiadefendbox").show();
					$("#russiashowbox").hide();
					russiaCounterClicked = true;

						if (sosijClicked == true && russiaCounterClicked == true) {
							$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newRHP = comradeDoggo.healthPoints -= sosijDoggo.attack
							var newSHP = sosijDoggo.healthPoints -= comradeDoggo.counterAttackPower
							$("#russiahealth").html(newRHP)
							$("#sosijhealth1").html(newSHP)
							$("#message").html("you have attacked for " + sosijDoggo.attack + " health")
							$("#message2").html("You were attacked for " + comradeDoggo.counterAttackPower + " health")
							sosijDoggo.attack += 14
								if (newRHP <= 0) {
								$("#russiadefendbox").hide()
								$("#russiadefend").hide()
								$("#message").html("you have defeated Comrade Doggo. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								comradeDoggo.healthPoints = 10000
								var russiahide = true
						} if (newSHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (russiahide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
					})
				}
			})
				$("#dogeshow").click(function(){
				$("#dogedefend").show();
				$("#dogeshow").hide();
				$("#dogename").html(doge.name)
				$("#dogehealth").html(doge.healthPoints)
				$("#dogedefendbox").show();
				$("#dogeshowbox").hide();
				dogeCounterClicked = true;
					if (sosijClicked == true && dogeCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newDHP = doge.healthPoints -= sosijDoggo.attack
							var newSHP = sosijDoggo.healthPoints -= doge.counterAttackPower
							$("#dogehealth").html(newDHP)
							$("#sosijhealth1").html(newSHP)
							$("#message").html("you have attacked for " + sosijDoggo.attack + " health")
							$("#message2").html("You were attacked for " + doge.counterAttackPower + " health")
							sosijDoggo.attack += 14
								if (newDHP <= 0) {
								$("#dogedefendbox").hide();
								$("#dogedefend").hide();
								$("#message").html("you have defeated Doge. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								doge.healthPoints = 10000
								var dogehide = true
							} if (newSHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (dogehide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
				$("#moonshow").click(function(){
				$("#moondefend").show();
				$("#moonshow").hide();
				$("#moonname").html(moonMoon.name)
				$("#moonhealth").html(moonMoon.healthPoints)
				$("#moondefendbox").show();
				$("#moonshowbox").hide();
				moonCounterClicked = true;

					if (sosijClicked == true && moonCounterClicked == true) {
						$('.enableOnInput').prop('disabled', false);
						$("#attackbutton").click(function(){
							var newMHP = moonMoon.healthPoints -= sosijDoggo.attack
							var newSHP = sosijDoggo.healthPoints -= moonMoon.counterAttackPower
							$("#moonhealth").html(newMHP)
							$("#sosijhealth1").html(newSHP)
							$("#message").html("you have attacked for " + sosijDoggo.attack + " health")
							$("#message2").html("You were attacked for " + moonMoon.counterAttackPower + " health")
							sosijDoggo.attack += 14
								if (newMHP <= 0) {
								$("#moondefendbox").hide();
								$("#moondefend").hide();
								$("#message").html("you have defeated Moon Moon. Please pick another character to fight.")
								$("#message2").html("")
								killCount++
								moonMoon.healthPoints = 10000
								var moonhide = true
							} if (newSHP <=0) {
							$("#message").html("YOU LOSE!! Press the Restart Button to try again!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
							})
						} if (killCount === 3) {
							$("#message").html("YOU WON!")
							$("#message2").html("<button type='button' id='restartbutton'>Restart</button>")
							$("#restartbutton").click(function(){
								location.reload(); 
								})
							} if (moonhide == true) {
							$('.enableOnInput').prop('disabled', true);
						}
						})
					}
				})
			}) 
		})

		





