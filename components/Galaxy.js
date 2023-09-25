import React, { useEffect, useRef } from 'react'

const Galaxy = () => {
  const galaxyRef = useRef(null)

  useEffect(() => {
    const galaxy = galaxyRef.current

    // Add 200 stars (or as many as you like)
    for (let i = 0; i < 400; i++) {
      const star = document.createElement('div')
      star.classList.add('star', 'absolute', 'bg-white', 'rounded-full')

      // Random position
      const topPosition = Math.random() * 100
      const leftPosition = Math.random() * 100
      star.style.top = `${topPosition}vh`
      star.style.left = `${leftPosition}vw`

      // Optionally, randomize star sizes for a more realistic look
      const size = Math.random() * 3 // you can adjust the multiplier for size variance
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      const animationDuration = 1 + Math.random() * 2 // between 1s and 3s
      const animationDelay = Math.random() * 2 // up to 2s delay

      star.style.animationDuration = `${animationDuration}s`
      star.style.animationDelay = `${animationDelay}s`

      galaxy.appendChild(star)
    }
  }, [])

  return (
    <div ref={galaxyRef} className="galaxy min-h-screen absolute">
      {/* Initial stars can be added here if required */}
    </div>
  )
}

export default Galaxy
