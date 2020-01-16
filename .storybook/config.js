import { configure } from '@storybook/react'

const req = require.context('../components', true, /.stories.[tj]sx$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)