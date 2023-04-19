import test from 'node:test'
import assert from 'assert'

test('should not show promise resolution error', async () => {
  await import('./anyfile.js')

  console.log('THIS CONSOLE LOG IS PREINTED')
  assert.ok(true)
})
