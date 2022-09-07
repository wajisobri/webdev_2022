let animationEvent

const setCss = (element, style) => {
  for (const property in style)
      element.style[property] = style[property];
}

const randNum = (min = 0, max = 100) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;

  return rand;
}

const brand = document.getElementById("brand")
const wrapper = document.getElementsByClassName("wrapper")
const surfing_board = document.getElementById("surfing-board")
const beach = document.getElementById("beach")
const hill = document.getElementById("hill")

// Main Animation
const animatePage = () => {
  animateTitle()
  animateBall()
  animateBranch()
  animateBird()
  animateSun()
  animateParalayang()
  animateWater()
  animateBoat()
  animateShip()
  animateCloud()
  animationEvent = requestAnimationFrame(animatePage)
}

// Title Animation
const title = document.getElementById("title")

let titleIter = 0, titleSpeed = 0.1
let titleDirect = 'increase'

const animateTitle = () => {
  (titleDirect == 'increase') ? titleIter += titleSpeed : titleIter -= titleSpeed
  if(titleIter >= 10) titleDirect = 'decrease'
  if(titleIter <= 0) titleDirect = 'increase'
  setCss(title, {
    'scale': 100 + titleIter + '%'
  })
}

// Beach Ball Animation
const beach_ball = document.getElementById("ball")
let ballIter = 0, ballSpeed = 1.5, ballDirect = 'forward'
const animateBall = () => {
  (ballDirect == 'forward') ? ballIter += ballSpeed : ballIter -= ballSpeed
  if(ballIter >= 540) ballDirect = 'backward'
  if(ballIter <= -30) ballDirect = 'forward'

  setCss(beach_ball, {
    'transform': `translateX(${-ballIter}px) rotate(${-ballIter*3}deg)`
  })
}

// Coconut Tree Animation
const branch1 = document.getElementById("coconut-branch-1")
const branch2 = document.getElementById("coconut-branch-2")
const branch3 = document.getElementById("coconut-branch-3")
const branch4 = document.getElementById("coconut-branch-4")
const branch5 = document.getElementById("coconut-branch-5")

let branch1Iter = 0, branch1Speed = 0.3, branch1Direct = 'up'
let branch2Iter = 0, branch2Speed = 0.3, branch2Direct = 'up'
let branch3Iter = 0, branch3Speed = 0.3, branch3Direct = 'up'
let branch4Iter = 0, branch4Speed = 0.3, branch4Direct = 'up'
let branch5Iter = 0, branch5Speed = 0.3, branch5Direct = 'up'
const animateBranch = () => {
  // Branch 1
  (branch1Direct == 'up') ? branch1Iter += branch1Speed : branch1Iter -= branch1Speed
  if(branch1Iter >= 25) branch1Direct = 'down'
  if(branch1Iter <= 0) branch1Direct = 'up'
  
  setCss(branch1, {
    'transform-origin': 'top left',
    'transform': `rotate(${-branch1Iter}deg)`
  })

  // Branch 2
  if(branch2Direct == 'up')
    branch2Iter += branch2Speed
  else
    branch2Iter -= branch2Speed
  if(branch2Iter >= 25) branch2Direct = 'down'
  if(branch2Iter <= 0) branch2Direct = 'up'
  
  setCss(branch2, {
    'transform-origin': 'top left',
    'transform': `rotate(${-branch2Iter}deg)`
  })

  // Branch 3
  if(branch3Direct == 'up')
    branch3Iter += branch3Speed
  else
    branch3Iter -= branch3Speed
  if(branch3Iter >= 25) branch3Direct = 'down'
  if(branch3Iter <= 0) branch3Direct = 'up'
  
  setCss(branch3, {
    'transform-origin': 'bottom left',
    'transform': `rotate(${-branch3Iter}deg)`
  })

  // Branch 4
  if(branch4Direct == 'up')
    branch4Iter += branch4Speed
  else
    branch4Iter -= branch4Speed
  if(branch4Iter >= 25) branch4Direct = 'down'
  if(branch4Iter <= 0) branch4Direct = 'up'
  
  setCss(branch4, {
    'transform-origin': 'bottom right',
    'transform': `rotate(${branch4Iter}deg)`
  })

  // Branch 5
  if(branch5Direct == 'up')
    branch5Iter += branch5Speed
  else
    branch5Iter -= branch5Speed
  if(branch5Iter >= 25) branch5Direct = 'down'
  if(branch5Iter <= 0) branch5Direct = 'up'
  
  setCss(branch5, {
    'transform-origin': 'bottom right',
    'transform': `rotate(${branch5Iter}deg)`
  })
}

// Bird Animation
bird1 = document.getElementById("bird-1")
bird2 = document.getElementById("bird-2")
bird3 = document.getElementById("bird-3")
bird4 = document.getElementById("bird-4")
bird5 = document.getElementById("bird-5")
bird6 = document.getElementById("bird-6")
bird7 = document.getElementById("bird-7")
bird8 = document.getElementById("bird-8")
let birdLIter = 0, birdLSpeed = 0.2, birdLDirect = 'up'
let birdRIter = 0, birdRSpeed = 0.2, birdRDirect = 'down'

const animateBird = () => {
  if(birdLDirect == 'up')
    birdLIter += birdLSpeed
  else
    birdLIter -= birdLSpeed
  if(birdLIter >= 10) birdLDirect = 'down'
  if(birdLIter <= -10) birdLDirect = 'up'

  setCss(bird6, {
    'transform': `translateY(${birdLIter}px) skewX(${4*birdLIter}deg)`
  })
  setCss(bird7, {
    'transform': `translateY(${birdLIter}px) skewX(${4*birdLIter}deg)`
  })
  setCss(bird8, {
    'transform': `translateY(${birdLIter}px) skewX(${4*birdLIter}deg)`
  })

  if(birdRDirect == 'up')
    birdRIter += birdRSpeed
  else
    birdRIter -= birdRSpeed
  if(birdRIter >= 10) birdRDirect = 'down'
  if(birdRIter <= -10) birdRDirect = 'up'

  setCss(bird1, {
    'transform': `translateY(${birdRIter}px) skewX(${4*birdRIter}deg)`
  })
  setCss(bird2, {
    'transform': `translateY(${birdRIter}px) skewX(${4*birdRIter}deg)`
  })
  setCss(bird3, {
    'transform': `translateY(${birdRIter}px) skewX(${4*birdRIter}deg)`
  })
  setCss(bird4, {
    'transform': `translateY(${birdRIter}px) skewX(${4*birdRIter}deg)`
  })
  setCss(bird5, {
    'transform': `translateY(${birdRIter}px) skewX(${4*birdRIter}deg)`
  })
}

// Sun Animation
const sun = document.getElementById("sun")
let sunIter = 0, sunSpeed = 0.5
const animateSun = () => {
  sunIter += sunSpeed
  if(sunIter == 100) changeDay("night")
  if(sunIter == 330) changeDay("noon")
  if(sunIter >= 360) sunIter = 0
  setCss(sun, {
    'transform-origin': '300% 400%',
    'transform': `rotate(${sunIter}deg)`
  })
}

const changeDay = (day) => {
  if(day == 'noon') {
    wrapper[0].style.removeProperty('background-image')
    beach.style.removeProperty('filter')
    hill.style.removeProperty('filter')
    water.style.removeProperty('filter')
  } else if(day == 'night') {
    setCss(wrapper[0],{
      'background-image': 'linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3) )'
    })
    setCss(beach,{
      'filter': 'brightness(60%)'
    })
    setCss(hill,{
      'filter': 'brightness(60%)'
    })
    setCss(water,{
      'filter': 'brightness(60%)'
    })
  }
}

// Paralayang Animation
const paralayang = document.getElementById("paralayang")
let paralayangIter = 0, paralayangSpeed = 0.5
let paralayangDirect = 'increase'

const animateParalayang = () => {
  (paralayangDirect == 'increase') ? paralayangIter += paralayangSpeed : paralayangIter -= paralayangSpeed
  if(paralayangIter >= 15) paralayangDirect = 'decrease'
  if(paralayangIter <= -20) paralayangDirect = 'increase'

  setCss(paralayang, {
    'transform': `translateY(${paralayangIter}px)`
  })
}

// Water Effect Animation
const water = document.getElementById("water-effect")
let waterIter = 0, waterSpeed = 0.1
let waterDirect = 'increase'

const animateWater = () => {
  (waterDirect == 'increase') ? waterIter += waterSpeed : waterIter -= waterSpeed
  if(waterIter >= 2) waterDirect = 'decrease'
  if(waterIter <= -5) waterDirect = 'increase'

  setCss(water, {
    'transform': `translateY(${waterIter}px) skewX(${5*waterIter}deg)`
  })
}

// Boat Animation
const boat1 = document.getElementById("boat-1")
let boatIterX = 0, boatSpeedX = 0.4
let boatIterY = 0, boatSpeedY = 0.1
let boatDirect = 'increase'

const animateBoat = () => {
  // X Axis
  if(boatIterX >= -130) {
    boatIterX -= boatSpeedX
  }

  // Y Axis
  (boatDirect == 'increase') ? boatIterY += boatSpeedY : boatIterY -= boatSpeedY
  if(boatIterY >= 2) boatDirect = 'decrease'
  if(boatIterY <= -5) boatDirect = 'increase'

  setCss(boat1, {
    'transform': `translateX(${boatIterX}px) translateY(${boatIterY}px)`
  })
}

// Ship Animation
const ship1 = document.getElementById("ship-1")
const ship2 = document.getElementById("ship-2")
let shipIterX = 0, shipSpeedX = 0.3
let shipIterY = 0, shipSpeedY = 0.1
let shipDirect = 'increase'

const animateShip = () => {
  // X Axis
  if(shipIterX <= 70) {
    shipIterX += shipSpeedX
  }

  // Y Axis
  (shipDirect == 'increase') ? shipIterY += shipSpeedY : shipIterY -= shipSpeedY
  if(shipIterY >= 7) shipDirect = 'decrease'
  if(shipIterY <= -5) shipDirect = 'increase'

  setCss(ship1, {
    'transform': `translateX(${shipIterX}px) translateY(${shipIterY}px)`
  })
  setCss(ship2, {
    'transform': `translateX(${shipIterX}px) translateY(${shipIterY}px)`
  })
}

// Cloud Animation
const cloud1 = document.getElementById("cloud-1")
const cloud2 = document.getElementById("cloud-2")
const cloud3 = document.getElementById("cloud-3")
const cloud4 = document.getElementById("cloud-4")
const cloud5 = document.getElementById("cloud-5")

let cloud1Iter = 0, cloud1Speed = 0.7
let cloud2Iter = 0, cloud2Speed = 0.7
let cloud3Iter = 0, cloud3Speed = 0.7
let cloud4Iter = 0, cloud4Speed = 0.7
let cloud5Iter = 0, cloud5Speed = 0.7
const animateCloud = () => {
  // Cloud 1
  if(cloud1.getBoundingClientRect().x <= document.body.getBoundingClientRect().right) {
    cloud1Iter += cloud1Speed
    setCss(cloud1, {
      'transform': `translateX(${cloud1Iter}px)`
    })
  } else {
    cloud1.style.removeProperty('transform')
    setCss(cloud1, {
      'left': `-20%`
    })
    cloud1Iter = 0
  }

  // Cloud 1
  if(cloud2.getBoundingClientRect().x <= document.body.getBoundingClientRect().right) {
    cloud2Iter += cloud2Speed
    setCss(cloud2, {
      'transform': `translateX(${cloud2Iter}px)`
    })
  } else {
    cloud2.style.removeProperty('transform')
    setCss(cloud2, {
      'left': `-30%`
    })
    cloud2Iter = 0
  }

  // Cloud 3
  if(cloud3.getBoundingClientRect().x <= document.body.getBoundingClientRect().right) {
    cloud3Iter += cloud3Speed
    setCss(cloud3, {
      'transform': `translateX(${cloud3Iter}px)`
    })
  } else {
    cloud3.style.removeProperty('transform')
    setCss(cloud3, {
      'left': `-10%`
    })
    cloud3Iter = 0
  }

  // Cloud 4
  if(cloud4.getBoundingClientRect().x <= document.body.getBoundingClientRect().right) {
    cloud4Iter += cloud4Speed
    setCss(cloud4, {
      'transform': `translateX(${cloud4Iter}px)`
    })
  } else {
    cloud4.style.removeProperty('transform')
    setCss(cloud4, {
      'left': `-30%`
    })
    cloud4Iter = 0
  }

  // Cloud 5
  if(cloud5.getBoundingClientRect().x <= document.body.getBoundingClientRect().right) {
    cloud5Iter += cloud5Speed
    setCss(cloud5, {
      'transform': `translateX(${cloud5Iter}px)`
    })
  } else {
    cloud5.style.removeProperty('transform')
    setCss(cloud5, {
      'left': `-10%`
    })
    cloud5Iter = 0
  }
}

animationEvent = requestAnimationFrame(animatePage)

// // Event Listener
// brand.addEventListener("click", () => {
//   animationEvent = requestAnimationFrame(animatePage)
// })

// surfing_board.addEventListener("click", () => {
//   cancelAnimationFrame(animationEvent)
// })