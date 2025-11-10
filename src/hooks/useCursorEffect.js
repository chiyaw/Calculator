import { useEffect } from "react"

export function useCursorEffect() {
  useEffect(() => {
    const cursorGlow = document.createElement('div')
    const cursorDot = document.createElement('div')
    
    cursorGlow.id = 'cursor-glow'
    cursorDot.id = 'cursor-dot'
    
    document.body.appendChild(cursorGlow)
    document.body.appendChild(cursorDot)
    
    const moveCursor = (e) => {
      const x = e.clientX
      const y = e.clientY
      
      cursorDot.style.left = `${x}px`
      cursorDot.style.top = `${y}px`
      
      // Add slight delay for glow effect
      setTimeout(() => {
        cursorGlow.style.left = `${x}px`
        cursorGlow.style.top = `${y}px`
      }, 50)
    }
    
    const handleMouseDown = () => {
      cursorDot.classList.add('clicking')
    }
    
    const handleMouseUp = () => {
      cursorDot.classList.remove('clicking')
    }
    
    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.removeChild(cursorGlow)
      document.body.removeChild(cursorDot)
    }
  }, [])
}

