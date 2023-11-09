describe('import vue components', () => {
  it('normal imports as expected', async () => {
    const cmp = await import('@/pages/home/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  it('template string imports as expected', async () => {
    const cmp = await import('@/pages/home/components/VueLogo.vue')
    expect(cmp).toBeDefined()
  })

  it('dynamic imports as expected', async () => {
    const name = 'VueLogo'
    const cmp = await import((`@/pages/home/components/${name}.vue`))
    expect(cmp).toBeDefined()
  })
})
