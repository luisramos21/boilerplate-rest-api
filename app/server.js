import express from 'express'
import webpack from 'webpack'
import config from '../webpack.config'
import webpackHotMiddleware from 'webpack-hot-middleware'

export default class App { 

    constructor() {
        this.Application = express()
        this.compiler = webpack(config)
        this.PORT = process.env.PORT || 5051
    }

    use() {
        this.Application.use(webpackHotMiddleware(this.compiler))
    }

    listen() {
        this.use()
        this.Application.listen(this.PORT, () => {
            console.log(`App listening to ${this.PORT}`)
            console.log(`Press CTRL + C to quit.`)
        })
    }

}