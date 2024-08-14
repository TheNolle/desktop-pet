import AnimationManager from './animation.js'

const body = document.querySelector('body')

const tilesetImage = new Image()
tilesetImage.src = './cat.png'
tilesetImage.onload = () => {
  const animationManager = new AnimationManager()

  animationManager.loadAnimation('idle_sit_1', {
    frames: [
      { x: 0, y: 0, width: 32, height: 32 },
      { x: 32, y: 0, width: 32, height: 32 },
      { x: 64, y: 0, width: 32, height: 32 },
      { x: 96, y: 0, width: 32, height: 32 },
      { x: 128, y: 0, width: 32, height: 32 },
      { x: 160, y: 0, width: 32, height: 32 },
      { x: 192, y: 0, width: 32, height: 32 },
      { x: 224, y: 0, width: 32, height: 32 }
    ],
    weight: 15,
    prerequisites: []
  }, tilesetImage)

  animationManager.loadAnimation('idle_sit_2', {
    frames: [
      { x: 0, y: 32, width: 32, height: 32 },
      { x: 32, y: 32, width: 32, height: 32 },
      { x: 64, y: 32, width: 32, height: 32 },
      { x: 96, y: 32, width: 32, height: 32 },
      { x: 128, y: 32, width: 32, height: 32 },
      { x: 160, y: 32, width: 32, height: 32 },
      { x: 192, y: 32, width: 32, height: 32 },
      { x: 224, y: 32, width: 32, height: 32 }
    ],
    weight: 10,
    prerequisites: ['idle_sit_1']
  }, tilesetImage)

  animationManager.loadAnimation('idle_stand_1', {
    frames: [
      { x: 0, y: 64, width: 32, height: 32 },
      { x: 32, y: 64, width: 32, height: 32 },
      { x: 64, y: 64, width: 32, height: 32 },
      { x: 96, y: 64, width: 32, height: 32 },
      { x: 128, y: 64, width: 32, height: 32 },
      { x: 160, y: 64, width: 32, height: 32 },
      { x: 192, y: 64, width: 32, height: 32 },
      { x: 224, y: 64, width: 32, height: 32 }
    ],
    weight: 7,
    prerequisites: []
  }, tilesetImage)

  animationManager.loadAnimation('idle_stand_2', {
    frames: [
      { x: 0, y: 96, width: 32, height: 32 },
      { x: 32, y: 96, width: 32, height: 32 },
      { x: 64, y: 96, width: 32, height: 32 },
      { x: 96, y: 96, width: 32, height: 32 },
      { x: 128, y: 96, width: 32, height: 32 },
      { x: 160, y: 96, width: 32, height: 32 },
      { x: 192, y: 96, width: 32, height: 32 },
      { x: 224, y: 96, width: 32, height: 32 }
    ],
    weight: 6,
    prerequisites: ['idle_stand_1']
  }, tilesetImage)

  animationManager.loadAnimation('walking_1', {
    frames: [
      { x: 0, y: 128, width: 32, height: 32 },
      { x: 32, y: 128, width: 32, height: 32 },
      { x: 64, y: 128, width: 32, height: 32 },
      { x: 96, y: 128, width: 32, height: 32 },
      { x: 128, y: 128, width: 32, height: 32 },
      { x: 160, y: 128, width: 32, height: 32 },
      { x: 192, y: 128, width: 32, height: 32 },
      { x: 224, y: 128, width: 32, height: 32 }
    ],
    weight: 9,
    prerequisites: []
  }, tilesetImage)

  animationManager.loadAnimation('walking_2', {
    frames: [
      { x: 0, y: 160, width: 32, height: 32 },
      { x: 32, y: 160, width: 32, height: 32 },
      { x: 64, y: 160, width: 32, height: 32 },
      { x: 96, y: 160, width: 32, height: 32 },
      { x: 128, y: 160, width: 32, height: 32 },
      { x: 160, y: 160, width: 32, height: 32 },
      { x: 192, y: 160, width: 32, height: 32 },
      { x: 224, y: 160, width: 32, height: 32 }
    ],
    weight: 7,
    prerequisites: ['walking_1']
  }, tilesetImage)

  animationManager.loadAnimation('running_1', {
    frames: [
      { x: 0, y: 192, width: 32, height: 32 },
      { x: 32, y: 192, width: 32, height: 32 },
      { x: 64, y: 192, width: 32, height: 32 },
      { x: 96, y: 192, width: 32, height: 32 }
    ],
    weight: 5,
    prerequisites: ['walking_1', 'walking_2']
  }, tilesetImage)

  animationManager.loadAnimation('running_2', {
    frames: [
      { x: 0, y: 224, width: 32, height: 32 },
      { x: 32, y: 224, width: 32, height: 32 }
    ],
    weight: 3,
    prerequisites: ['running_1']
  }, tilesetImage)

  animationManager.loadAnimation('running_3', {
    frames: [
      { x: 0, y: 256, width: 32, height: 32 },
      { x: 32, y: 256, width: 32, height: 32 },
      { x: 64, y: 256, width: 32, height: 32 }
    ],
    weight: 4,
    prerequisites: ['running_2']
  }, tilesetImage)

  animationManager.loadAnimation('laying_down', {
    frames: [
      { x: 0, y: 288, width: 32, height: 32 },
      { x: 32, y: 288, width: 32, height: 32 },
      { x: 64, y: 288, width: 32, height: 32 },
      { x: 96, y: 288, width: 32, height: 32 }
    ],
    weight: 6,
    prerequisites: ['idle_sit_1', 'idle_sit_2']
  }, tilesetImage)

  animationManager.loadAnimation('falling_asleep', {
    frames: [
      { x: 0, y: 320, width: 32, height: 32 },
      { x: 32, y: 320, width: 32, height: 32 },
      { x: 64, y: 320, width: 32, height: 32 },
      { x: 96, y: 320, width: 32, height: 32 },
      { x: 128, y: 320, width: 32, height: 32 },
      { x: 160, y: 320, width: 32, height: 32 },
      { x: 192, y: 320, width: 32, height: 32 },
      { x: 224, y: 320, width: 32, height: 32 }
    ],
    weight: 4,
    prerequisites: ['laying_down']
  }, tilesetImage)

  animationManager.loadAnimation('sleeping', {
    frames: [
      { x: 0, y: 352, width: 32, height: 32 },
      { x: 32, y: 352, width: 32, height: 32 },
      { x: 64, y: 352, width: 32, height: 32 },
      { x: 96, y: 352, width: 32, height: 32 },
      { x: 128, y: 352, width: 32, height: 32 },
      { x: 160, y: 352, width: 32, height: 32 },
      { x: 192, y: 352, width: 32, height: 32 },
      { x: 224, y: 352, width: 32, height: 32 }
    ],
    weight: 2,
    prerequisites: ['falling_asleep']
  }, tilesetImage)

  animationManager.loadAnimation('jumping_up', {
    frames: [
      { x: 0, y: 576, width: 32, height: 32 },
      { x: 32, y: 576, width: 32, height: 32 },
      { x: 64, y: 576, width: 32, height: 32 },
      { x: 96, y: 576, width: 32, height: 32 }
    ],
    weight: 8,
    prerequisites: ['idle_stand_1', 'idle_stand_2']
  }, tilesetImage)

  animationManager.loadAnimation('jumping_down', {
    frames: [
      { x: 0, y: 608, width: 32, height: 32 },
      { x: 32, y: 608, width: 32, height: 32 },
      { x: 64, y: 608, width: 32, height: 32 },
      { x: 96, y: 608, width: 32, height: 32 }
    ],
    weight: 7,
    prerequisites: ['jumping_up']
  }, tilesetImage)

  animationManager.loadAnimation('looking_user', {
    frames: [
      { x: 0, y: 768, width: 32, height: 32 },
      { x: 32, y: 768, width: 32, height: 32 },
      { x: 64, y: 768, width: 32, height: 32 },
      { x: 96, y: 768, width: 32, height: 32 }
    ],
    weight: 6,
    prerequisites: ['idle_sit_1', 'idle_stand_1']
  }, tilesetImage)

  animationManager.loadAnimation('winking', {
    frames: [
      { x: 0, y: 800, width: 32, height: 32 },
      { x: 32, y: 800, width: 32, height: 32 },
      { x: 64, y: 800, width: 32, height: 32 },
      { x: 96, y: 800, width: 32, height: 32 }
    ],
    weight: 5,
    prerequisites: ['looking_user']
  }, tilesetImage)

  animationManager.loadAnimation('looking_away', {
    frames: [
      { x: 0, y: 832, width: 32, height: 32 },
      { x: 32, y: 832, width: 32, height: 32 },
      { x: 64, y: 832, width: 32, height: 32 },
      { x: 96, y: 832, width: 32, height: 32 }
    ],
    weight: 4,
    prerequisites: ['looking_user']
  }, tilesetImage)

  animationManager.loadAnimation('looking_computer', {
    frames: [
      { x: 0, y: 864, width: 32, height: 32 },
      { x: 32, y: 864, width: 32, height: 32 },
      { x: 64, y: 864, width: 32, height: 32 },
      { x: 96, y: 864, width: 32, height: 32 }
    ],
    weight: 7,
    prerequisites: ['looking_away']
  }, tilesetImage)

  animationManager.loadAnimation('looking_computer_idle', {
    frames: [
      { x: 0, y: 896, width: 32, height: 32 },
      { x: 32, y: 896, width: 32, height: 32 },
      { x: 64, y: 896, width: 32, height: 32 },
      { x: 96, y: 896, width: 32, height: 32 }
    ],
    weight: 6,
    prerequisites: ['looking_computer']
  }, tilesetImage)

  animationManager.loadAnimation('looking_computer_away', {
    frames: [
      { x: 0, y: 928, width: 32, height: 32 },
      { x: 32, y: 928, width: 32, height: 32 },
      { x: 64, y: 928, width: 32, height: 32 },
      { x: 96, y: 928, width: 32, height: 32 }
    ],
    weight: 5,
    prerequisites: ['looking_computer_idle']
  }, tilesetImage)

  animationManager.playRandomAnimation(body)
}
