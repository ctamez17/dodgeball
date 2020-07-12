// let assert = require("assert");

const arrOfPeople = [
    {
      id: 1,
      name: "Charles Young",
      age: 27,
      skillSet: "Dancing",
    },
    {
      id: 2,
      name: "Judy Twilight",
      age: 19,
      skillSet: "Fishing",
    },
    {
      id: 3,
      name: "Cynthia Doolittle",
      age: 17,
      skillSet: "Hiking",
    },
    {
      id: 4,
      name: "John Willouby",
      age: 18,
      skillSet: "Baking",
    },
    {
      id: 5,
      name: "Stan Honest",
      age: 16,
      skillSet: "Painting",
    },
    {
      id: 6,
      name: "Mia Watu",
      age: 31,
      skillSet: "Drawing",
    }
];

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

class BlueTeammate {
  constructor(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.color = "blue";
    this.mascot = "dolphin";
  }
}

class RedTeammate {
  constructor(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.color = "red";
    this.mascot = "bull";
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people');
  
  //Clear List (Refresh)
  listElement.innerHTML = '';
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " // Age: " + person.age + " // Skillset: " + person.skillSet))
    listElement.append(li)
    document.getElementById('listPeople').style.display = "none";
  })
}

//-----------------------------------------------------------
//-------------------- MAKE PLAYER --------------------------
//-----------------------------------------------------------

const makePlayer = (id) => {
  const listElement = document.getElementById('players');
  const li = document.createElement("li")
  const buttonRed = document.createElement("button")
  const buttonBlue = document.createElement("button")
  buttonRed.style.background='#f54242';
  buttonBlue.style.background='#4298f5';
  let index = 0;
  for(let i = 0; i < arrOfPeople.length; i++) {
    if(arrOfPeople[i].id == id){
      index = i;
    }
  }
  let person = arrOfPeople[index];
  const newPlayer = new player (
    person.id,
    person.name,
    person.age,
    person.skillSet,
    Math.random() >= 0.5,
    Math.random() >= 0.5,
    Math.random() >= 0.5,
    Math.random() >= 0.5,
    Math.floor(Math.random()* 10)
  )
  listOfPlayers.push(newPlayer);

  //Remove person from available List of People
  arrOfPeople.splice(index, 1);

  //refresh list of people
  listPeopleChoices();

  buttonRed.innerHTML = "Assign to Red"
  buttonBlue.innerHTML = "Assign to Blue"
  buttonRed.addEventListener('click', function() {addToRed(newPlayer.id)} );
  buttonBlue.addEventListener('click', function() {addToBlue(newPlayer.id)} );
  li.appendChild(buttonRed)
  li.appendChild(buttonBlue)
  li.appendChild(document.createTextNode(newPlayer.name + " // Can Throw Ball: " + newPlayer.canThrowBall + " // Can Dodge Ball: " + newPlayer.canDodgeBall + " // Has Paid: " + newPlayer.hasPaid + " // Is Healthy: " + newPlayer.isHealthy + " // Years Experience: " + newPlayer.yearsExperience))
  
  listElement.append(li)
  console.log(`li ${id} was clicked!`)
}

//1st test function
const testFunction = () => {
  if(arrOfPeople.length > 0){
    return true;
  }
}

//-----------------------------------------------------------
//-------------------- ADD TO RED TEAM ----------------------
//-----------------------------------------------------------

const addToRed = (id) => {
  const listElement = document.getElementById('red');
  const li = document.createElement("li")
  let index = 0;
  for(let i = 0; i < listOfPlayers.length; i++) {
    if(listOfPlayers[i].id == id){
      index = i;
    }
  }

  let player = listOfPlayers[index];
  const newRedPlayer = new RedTeammate (
    player.id,
    player.name,
    player.age,
    player.skillSet,
    player.canThrowBall,
    player.canDodgeBall,
    player.hasPaid,
    player.isHealthy,
    player.yearsExperience
  )

  redTeam.push(newRedPlayer);

  //remove player from Dodge Ball Players
  listOfPlayers.splice(index, 1)
  
  li.appendChild(document.createTextNode(newRedPlayer.name + " // Can Throw Ball: " + newRedPlayer.canThrowBall + " // Can Dodge Ball: " + newRedPlayer.canDodgeBall + " // Has Paid: " + newRedPlayer.hasPaid + " // Is Healthy: " + newRedPlayer.isHealthy + " // Years Experience: " + newRedPlayer.yearsExperience + " // Team: " + newRedPlayer.color + " // Mascot: " + newRedPlayer.mascot))

  listElement.append(li)
  
  const playerListElement = document.getElementById('players');
  playerListElement.childNodes[index].remove();
  console.log(`li ${id} was clicked!`)
}

//-----------------------------------------------------------
//-------------------- ADD TO BLUE TEAM ---------------------
//-----------------------------------------------------------

const addToBlue = (id) => {
  const listElement = document.getElementById('blue');
  const li = document.createElement("li")
  let index = 0;
  for(let i = 0; i < listOfPlayers.length; i++) {
    if(listOfPlayers[i].id == id){
      index = i;
    }
  }

  let player = listOfPlayers[index];
  const newBluePlayer = new BlueTeammate (
    player.id,
    player.name,
    player.age,
    player.skillSet,
    player.canThrowBall,
    player.canDodgeBall,
    player.hasPaid,
    player.isHealthy,
    player.yearsExperience
  )

  blueTeam.push(newBluePlayer);
  //remove player from Dodge Ball Players
  listOfPlayers.splice(index, 1)
  
  li.appendChild(document.createTextNode(newBluePlayer.name + " // Can Throw Ball: " + newBluePlayer.canThrowBall + " // Can Dodge Ball: " + newBluePlayer.canDodgeBall + " // Has Paid: " + newBluePlayer.hasPaid + " // Is Healthy: " + newBluePlayer.isHealthy + " // Years Experience: " + newBluePlayer.yearsExperience + " // Team: " + newBluePlayer.color + " // Mascot: " + newBluePlayer.mascot))

  listElement.append(li)
  
  const playerListElement = document.getElementById('players');
  playerListElement.childNodes[index].remove();
  console.log(`li ${id} was clicked!`)
}

//-----------------------------------------------------------
//-------------------- UNIT TESTS ---------------------------
//-----------------------------------------------------------

// You use them run the command: npm test main.js
// to close them ctrl + C
// most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.

describe('#testfunction()', () => {
  it('Show Valid Player', () => {
    assert.equal(testFunction(), true);
  });
});

// describe('#addToRedTeam()', () => {
//   it('Adds player to Red Team', () => {
//     assert.equal(addToRed(), true);
//   });
// });

if (typeof describe === "function") {
  describe("Red Team Member", function() {
    it("should have a id, name, age, skillset.", function() {
      var redTeammate = new RedTeammate(16, "Rick Martinez", 32, "Knitting");
      assert.equal(redTeammate.id, 16);
      assert.equal(redTeammate.name, "Rick Martinez");
      assert.equal(redTeammate.age, 32);
      assert.equal(redTeammate.skillSet, "Knitting");
    })
  })
}

if (typeof describe === "function") {
  describe("Blue Team Member", function() {
    it("should have a id, name, age, skillset.", function() {
      var blueTeammate = new BlueTeammate(16, "Rick Martinez", 32, "Knitting");
      assert.equal(blueTeammate.id, 16);
      assert.equal(blueTeammate.name, "Rick Martinez");
      assert.equal(blueTeammate.age, 32);
      assert.equal(blueTeammate.skillSet, "Knitting");
    })
  })
}