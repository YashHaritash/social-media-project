
const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]


function getRandomUsername(){
    let username = ADJECTIVES[Math.floor(Math.random()*7)]+'-'+OBJECTS[Math.floor(Math.random()*7)];
    return username;
}

module.exports = {
    getRandomUsername,
}