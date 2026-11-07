import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import AboutMe from './AboutMe.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

test('basic assertion', () => {
  expect(1 + 1).toBe(2)
})

// AboutMe
test('renders AboutMe with name, role, and quick data', () => {
  const { container } = render(<AboutMe />)
  expect(container.querySelector('.about')).toBeTruthy()
  expect(container.querySelector('.role-badge').textContent).toContain('Full Stack Junior')
  expect(container.querySelector('.lead')).toBeTruthy()
  expect(container.querySelector('.quick-data')).toBeTruthy()
  expect(container.querySelector('.quick-data').textContent).toContain('Buscando')
  expect(container.querySelector('.quick-data').textContent).toContain('Disponibilidad')
  expect(container.querySelector('.quick-data').textContent).toContain('Idiomas')
})

// Hero
test('renders Hero with name, tag, and actions', () => {
  const { container } = render(<Hero />)
  expect(container.querySelector('h1').textContent).toBe('Maicol Avila')
  expect(container.querySelector('.tag').textContent).toContain('FULL STACK')
  expect(container.querySelector('.hero-sub')).toBeTruthy()
  expect(container.querySelector('.btn')).toBeTruthy()
  expect(container.querySelector('.btn-ghost')).toBeTruthy()
})

// Skills
test('renders Skills with skill groups', () => {
  const { container } = render(<Skills />)
  const skills = container.querySelector('.skills')
  expect(skills).toBeTruthy()
  expect(container.querySelectorAll('.skill-group')).toHaveLength(4)
  expect(container.querySelectorAll('li')[0].textContent).toContain('Java')
  expect(container.querySelectorAll('li')[1].textContent).toContain('JavaScript')
})

// Projects
test('renders Projects grid with project cards', () => {
  const { container } = render(<Projects />)
  const grid = container.querySelector('.project-grid')
  expect(grid).toBeTruthy()
  expect(container.querySelectorAll('.project-card')).toHaveLength(4)
  expect(container.querySelectorAll('.project-title')[0].textContent).toContain('Sistema de Login')
  expect(container.querySelectorAll('.project-desc')[0]).toBeTruthy()
})