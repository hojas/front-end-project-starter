import { describe, test, expect } from 'vitest'

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../src/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  test('template string imports as expected', async () => {
    const cmp = await import(`../src/components/VueLogo.vue`)
    expect(cmp).toBeDefined()
  })

  test('dynamic imports as expected', async () => {
    const name = 'VueLogo'
    const cmp = await import(`../src/components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})
