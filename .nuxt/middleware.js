const middleware = {}

middleware['test'] = require('..\\middleware\\test.js')
middleware['test'] = middleware['test'].default || middleware['test']

export default middleware
