// Variables
const inputField = document.querySelector(`#userInput`);
const main = document.querySelector(`main`);
const square = document.querySelector(`.fa-square`);
let userInput = [];
const items = [`nametag`, `metal piece`]

let player = {
    playerName: [],
    playerAge: [],
    playerGender: [] 
}

let inventory = {
    spaceUsed: 1,
    availableSpace: 4,
    items: [`nametag`]
}

const hints = {
    hint1: `*To use a command: Type the command using the keyboard and press enter.`,
    hint2: `*Use the command "help" if you need instructions`,
    hint3: `*You can use the command "start" to go to the start of the game`,
    hint4: `*You can use the command "inspect" to get more information.`,
    hint5: `*To use the command "inspect": Type "inspect" and the thing you want to inspect.`,
    hint6: `*You can use the command "use" to utilize an item.`,
    hint7: `*To use the command "use": Type "use" and the thing you want to use.`,
    hint8: `*items can be used to solve puzzles, unlock locations and solve dangerous situations`
}

const commands = [
    `start`,
    `yes`, 
    `no`, 
    `maybe`, 
    `help`, 
    `inspect`, 
    `inspect self`, 
    `inspect gurney`, 
    `inspect ceiling`, 
    `inspect lightbulb`, 
    `inspect walls`, 
    `inspect nametag`, 
    `inspect pockets`,
    `keep it`, 
    `leave it`, 
    `keep metal piece`, 
    `leave metal piece`,
    `turn off the light`,
    `turn on the light`,
    `use violence`,
    `use piece of metal`,
    `use nametag`
];


const txt = {
    introTxt: 
        `Welcome to "LabRat", a text-based game that puts you in the shoes of an unwilling subject in a crazy experiment. Your goal is to escape the lab, but it won´t be easy. The mad scientists running the experiment have put a series of bizarre and dangerous puzzles and challenges in your way. You'll have to use your wits and your problem-solving skills to solve these and make your way out of the lab. Along the way you will meet other participants trapped in the lab with you. Helping them might help you. But be careful! Not everyone can be trusted. Will you be able to outsmart the challenges and escape? There´s only one way to find out. Are you ready to start?`,
    startTxt:
        `You find yourself lying on a metal gurney in a cold, sterile room with seemingly no windows or doors. The walls are made of large metal plates, and the only source of light comes from a single fluorescent lightbulb dangling from the ceiling. You try to remember how you got here, but your memory is fuzzy. What do you do?`,
    noTxt:
        `Hmph! Alright then. If you don’t want to play, then why are you even here!? Go do something more “valuable” with your time then!...I´m sorry! I got a little grumpy there. Come back when you’re ready to start.`,
    maybeTxt: 
        `What do you mean maybe! What kind of answer is that! Are you perhaps scared? Well, it is going to be a real challenge solving those mind-bending puzzles. So, if you’re not ready, then I guess you can just cower in fear like a pathetic lab rat! ...I apologize. I promise I’m working on my temper. Perhaps you need some instructions?`,
    inspectTxt: 
        `Inspecting...inspecting...inspecting...Inspect what? You’ll have to be more specific.`,
    selfTxt:
        `You take a closer look at yourself and what you are wearing. You´re wearing a blue hospital gown. There´s a nametag clipped onto the chest pocket and the trousers has pockets.`,
    nametag: 
        `You look at the nametag. On the front is your name, your age and your gender. On the back is a barcode`,
    pockets: 
        `you´re pockets are empty`,
    gurneyTxt: 
        `The gurney looks old. It has small spots of rust on the legs and the leather mattress on top looks worn. You notice a metal piece sticking out from under the mattress.`,
    metalTxt: 
        `You pick up the metal piece. It is flat but pointed in one end, about a centimeter’s width and the length of your middle finger. Do you keep it or leave it?`,
    keepTxt: 
        `You put the piece of metal in your pockets. What will you do next?`,
    leaveTxt:
         `Okay. That’s your choice. But you never know if it might come in handy later. Objects you find along the way could prove useful later. Of course, you only have so much space in your pockets so it’s up to you asses what you think you might need. What will you do next?`,
    ceilingTxt: 
        `You look op at the ceiling. In the middle of the ceiling is the fluorescent lightbulb. The ceiling is a cold white color.  You almost miss the tiny camera in the corner. Someone must be watching you.`,
    lightbulbTxt:
        `The fluorescent lightbulb flickers gently. A lost fly flies lazily around the lightbulb. You don’t see any light switches, but if you wanted to turn of the light, then you could probably use the gurney to reach the lightbulb and turn it.`,
    turnOffTxt: 
        `You push the gurney to right under the lightbulb and step up on it. You hesitate a second, but then turn the lightbulb. It gets completely dark. Well, not completely. You notice a small outline of light on one of the walls.`,
    wallsTxt: {
        wTxt1:`You go over to the walls. The metal plates feels cold to touch. They seem to be bolted together. Some of the bolts look newer indicating, that the walls might have been modified or replaced at some point. There seems to be a pattern with the new bolts outlining a rectangle the size of a door. You look closer and there se that there´s a very thin uninterrupted line. There might actually be a door. But you dont se a door handle anywhere.Y ou continue inspecting the walls and notice small scratch marks on the surface a couple places. Around a smaller metal plate there is thin crack full of scratches. It looks like someone else has tried to get the plate loose. The crack is to small for your fingers but maybe if you had something thin and flat, you could get it in there. What will you do next?`,
        wTxt2:`Auch! while you get down from the gurney, you trip in the dark and hurt yourself. Perhaps you should have turned on the light before you stepped down. You grope your way through the dark over to the walls. The walls feel cold and some places, it feels scratchy. Touching the outline of light. You feel lots of small scrathes and a more defined crack. The crack is too small for your fingers, but maybe if you had something thin and flat, you could get it in there.`,
    }
}


// se pockets function

// Functions
const help = {
    displayHints: () => {
      Object.values(hints).forEach((hint, index) => {
        addText(`Hint ${index + 1}: ${hint}`);
      });
    },
    displayCommands: () => {
      addText("Available Commands:");
      commands.forEach((command) => {
        addText(`- ${command}`);
      });
    }
  };

const whatToDo = (input) => {
    switch (input) {
        case 'help':
            help.displayHints();
            help.displayCommands();
        break;
        case `start`:
            addText(txt.introTxt)
        break;
        case 'yes':
            addText(txt.startTxt);  
        break;
        case 'maybe':
            if(txt.introTxt = true) {  
                addText(txt.maybeTxt);
            }
            else {
                addtext(`Maybe? What are you saying maybe to? You can´t say maybe to that`)
                addText(hints.hint2)
            }
        break;
        case 'no':
            if (txt.introTxt = true) { 
                addText(txt.noTxt);
            }
            else {
                addtext(`No? What are you saying no to? You can´t say no to that.`)
                addText(hints.hint2)
            }
        break;
        case 'inspect':
            addText(txt.inspectTxt);
            addText(hints.hint5)
        break;
        case 'inspect self':
            addText(story.selfTxt);
        break;
        case 'inspect nametag':
            addText(story.nametag);
            addText(hints.hint8)
        break;
        // case 'inspect pockets':
        //     displayInventory();
        // break;
        case 'inspect gurney':
            addText(story.gurneyTxt);
        break;
        case 'keep metal piece':
            if (inventory.availableSpace > 0) {
                addText(story.keepTxt);
                inventory.items.push('metal piece');
                inventory.spaceUsed++;
                inventory.availableSpace--;
            } 
            else {
                addText("Your pockets are full. You can't carry any more items.");
            }
        break;
        case 'leave metal piece':
            addText(story.leaveTxt);
        break;
        case 'inspect ceiling':
            addText(story.ceilingTxt);
            break;
        case 'inspect lightbulb':
            addText(story.lightbulbTxt);
            break;
        case 'turn off the light':
        case `turn off light`:
            if(txt.lightbulbTxt = true) {
                addText(txt.turnOffTxt)
            }
            else if(txt.turnOffTxt = true) {
                addText(`You dummy! The light is already turned off. You can´t turn it off twice!`);
            }
            else {
                addText(`What light are you turning off? That command isn´t currently available`)
            }
        break;
        case `inspect walls`:
            if(txt.turnOffTxt = true) {
                addText(txt.wallsTxt.wTxt2)
            }
            else {
                addText(txt.wallsTxt.wTxt1)
            }
        break;
        default:
            addText('sorry, I dont understand? Do you need help?.');
            addText(hints.hint2)
    }
  };

// Blinking square
setInterval(function() {
    square.classList.toggle(`blink`);
}, 600);

// Insert text
const addText = (text) => {
    let paragraph = document.createElement(`p`);
    paragraph.innerText = text;
    main.appendChild(paragraph);
    main.lastChild.scrollIntoView();
}

// Keyboard event
document.addEventListener(`keydown`, (e) => {
    switch(true) {
        case e.code.startsWith(`Key`):
        case e.code === `Space`:
            userInput.push(e.key);
            inputField.innerHTML = userInput.join(``);
        break;
        case e.code === `Backspace`:
            userInput.pop();
            inputField.innerHTML = userInput.join(``);
        break;
        case e.code === `Enter`:
            addText(userInput.join(``));
            whatToDo(userInput.join(``).toLowerCase()); // Send userInput.join('') til den funktion, der skal håndtere det.
            userInput = []; // Nulstil userInput arrayet.
            inputField.innerHTML = ``; // Ryd tekstfeltet.
        break;
        default:
            // Do nothing
    }
})