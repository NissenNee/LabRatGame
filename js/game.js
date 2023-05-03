const textElement = document.querySelector(`text`)
const optionbuttonsElement = document.querySelector(`optionbuttons`)

let inventory = {}

function startGame() {
    inventory = {}
    showStoryNote (1)
}

function showStoryNote(storyNoteIndex) {
    const storyNote = storyNote.find(storyNote => storyNote.id === storyNoteIndex)
    textElement.innerText = storyNote.text
    while(optionbuttonsElement.firstchild) {
        optionbuttonsElement.removeChild(optionsButtonsElement.firstChild)
    }

    storyNotes.options.foreach(option => {
        if (showOption(option)) {
            const button = document.createElement(`button`)
            button.innerText = option.text
            button.classList.add(`btn`)
            button.addEventListener(`click`, () => selectOption(option))
            optionbuttonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requredInventory == null || option.requredInventory(inventory)
}

function selectOption(option) {
    const nextStoryNote = option.nextText
    inventory = Object.assign(inventory, option.setInventory)
    showStoryNoteId(nextStoryNoteId)
}

const storyNote = [
    {
        id: 1,
        text: `Welcome to LabRat, a text-based game that put you in the shoes of an unvilling subject in a crazy experiment.
        your goal is to escape the lab, but it won´t be easy. The mad scientists running the experiment have put a series of bizarre and dangerous puzzles and cgallenges in yor way. you will have to use your wits and your problem-solving skills to solve these and make your way out the lab.
        along the way you will meet other participants trapped in the lab with yo. helping them might help you. but be careful! not everyone can be trusted.
        will you be able to escape? there is only one way to find out

        are you ready to begin?`,
        option: [
            {
                text: `yes`,
                nextText: 2
            },
            {
                text: `no`,
                nextText: 3
            },
            {
                text: `maybe`,
                nextText: 4
            }
        ]
    },
    {
        id: 2,
        text: `You find yourself lying on a metal gurney in a cold sterile room with semingly no windows or doors. the walls are made of large metal plates, and the only source of light comes from a single lightbulb dangling from the ceiling. you try to remember how you got here, but your memory is fuzzy.
        
        what do you do?`,
        option: [
            {
                text:`Inspect self`,
                nextText: 5
            },
            {
                text:`Inspect gurney`,
                nextText: 6
            },
            {
                text: `Inspect lightbulb`,
                nextText: 7
            },
            {
                text: `Inspect walls`,
                nextText: 8
            }
        ]
    },
    {
        id: 3,
        text: `Hmph! Alright the. If you don´t want to play, then why are you even here!? Go do something mere "valuable" with your time the!
        
        ...I´m sorry. I got a little grumpy there. Come back when you´re ready to play`,
        option: [
            {
                text:`Start game`,
                nextText: 1
            },
        ]
    },
    {
        id: 4,
        text: `What do you mean "Maybe"!? What kind of of answer is that!
        Are you perhaps scared? Then I guess you can just cower in fear like a pathethic rat!
        
        ...I apoligize. I promise, I´m working on my temper.`,
        option: [
            {
                text:`I´m not scared! Let´s begin!`,
                nextText: 2
            },
        ]
    }
]

startGame()