/**
 * @typedef {Object} Coordinate
 * @property {number} x - The x-coordinate of the tile in the tileset.
 * @property {number} y - The y-coordinate of the tile in the tileset.
 * @property {number} width - The width of the tile.
 * @property {number} height - The height of the tile.
 */

/**
 * @typedef {Object} AnimationConfig
 * @property {Coordinate[]} frames - The array of coordinates for each frame in the animation.
 * @property {number} weight - The chance weight of this animation being selected.
 * @property {string[]} prerequisites - Array of animation names that must be played before this one can play.
 */

/**
 * AnimationManager class to handle loading, playing, and deleting animations using a tileset.
 */
export default class AnimationManager {
  /**
     * Creates an instance of AnimationManager.
     */
  constructor() {
    this.animations = {}
    this.animationConfigs = {}
    this.isPlaying = false
  }

  /**
   * Loads an animation from a tileset image.
   * @param {string} name - The name of the animation.
   * @param {AnimationConfig} config - The configuration for the animation.
   * @param {HTMLImageElement} image - The image (tileset) containing the frames.
   */
  loadAnimation(name, config, image) {
    const frameBuffers = config.frames.map((frame) => {
      const canvas = document.createElement('canvas')
      canvas.width = frame.width
      canvas.height = frame.height
      const ctx = canvas.getContext('2d')
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(image, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height)
      return canvas
    })
    this.animations[name] = frameBuffers
    this.animationConfigs[name] = config
  }

  /**
 * Plays the animation on a given HTML element.
 * @param {string} name - The name of the animation to play.
 * @param {HTMLElement} element - The HTML element where the animation will be displayed.
 * @param {number} [speed=5] - The speed of the animation in frames per second.
 * @param {Function} [callback] - A callback function to call when the animation is complete.
 * @param {number} [duration=0] - The duration for how long the animation should play (in milliseconds). 0 means loop indefinitely.
 */
  playAnimation(name, element, speed = 5, callback, duration = 0) {
    if (!this.animations[name]) return console.error(`Animation ${name} not found.`)
    if (this.isPlaying) return
    this.isPlaying = true
    const frames = this.animations[name]
    let currentFrame = 0
    const fpsInterval = 1000 / speed
    let then = Date.now()
    const startTime = then
    const render = () => {
      const now = Date.now()
      const elapsed = now - then
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval)
        element.innerHTML = ''
        const canvas = document.createElement('canvas')
        canvas.width = element.clientWidth
        canvas.height = element.clientHeight
        const ctx = canvas.getContext('2d')
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(frames[currentFrame], 0, 0, frames[currentFrame].width, frames[currentFrame].height, 0, 0, canvas.width, canvas.height)
        element.appendChild(canvas)
        currentFrame = (currentFrame + 1) % frames.length
      }
      if (duration > 0 && (now - startTime) >= duration) {
        this.isPlaying = false
        if (callback) setTimeout(callback, Math.random() * 500 + 500)
      } else requestAnimationFrame(render)
    }
    render()
  }

  /**
   * Deletes an animation by name.
   * @param {string} name - The name of the animation to delete.
   */
  deleteAnimation(name) {
    if (this.animations[name]) {
      delete this.animations[name]
      delete this.animationConfigs[name]
    } else console.error(`Animation ${name} not found.`);
  }

  /**
   * Selects and plays a random animation based on weights and prerequisites.
   * @param {HTMLElement} element - The HTML element where the animation will be displayed.
   * @param {string[]} [playedAnimations=[]] - A list of animations that have already been played.
   */
  playRandomAnimation(element, playedAnimations = []) {
    if (this.isPlaying) return
    const availableAnimations = Object.entries(this.animationConfigs).filter(([_, config]) => {
      return config.prerequisites.every(prerequisite => playedAnimations.includes(prerequisite))
    })
    const totalWeight = availableAnimations.reduce((sum, [_, config]) => sum + config.weight, 0)
    let randomWeight = Math.random() * totalWeight
    for (const [name, config] of availableAnimations) {
      if (randomWeight < config.weight) {
        const delayBeforeNextAnimation = this.calculateDelay(config.weight)
        return this.playAnimation(name, element, 5, () => setTimeout(() => this.playRandomAnimation(element, [...playedAnimations, name]), delayBeforeNextAnimation))
      }
      randomWeight -= config.weight
    }
  }

  /**
   * Calculate delay based on the weight of the animation.
   * Higher weight means shorter delay, lower weight means longer delay.
   * @param {number} weight - The weight of the animation.
   * @returns {number} - The delay in milliseconds.
   */
  calculateDelay(weight) {
    const maxDelay = 5 * 60 * 1000 // 5 minutes
    const minDelay = 2 * 1000 // 2 seconds
    return maxDelay - ((weight / 10) * (maxDelay - minDelay))
  }
}
