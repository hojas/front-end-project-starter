describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('@/pages/home/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  test('template string imports as expected', async () => {
    const cmp = await import('@/pages/home/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  test('dynamic imports as expected', async () => {
    const name = 'VueLogo'
    const cmp = await import((`@/pages/home/components/${name}.vue`))
    expect(cmp).toBeDefined()
  })
})
