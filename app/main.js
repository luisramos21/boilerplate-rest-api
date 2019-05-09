import server from './server'

const app = new server()
app.listen()

if (typeof (module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
}