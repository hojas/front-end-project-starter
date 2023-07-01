import { describe, expect, test } from 'vitest'

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const cmp = await import('../src/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  test('template string imports as expected', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const cmp = await import('../src/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  test('dynamic imports as expected', async () => {
    const name = 'VueLogo'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const cmp = await import(`../src/components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})
