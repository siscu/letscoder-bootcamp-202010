const { createId } = require('geogin-utils/ids')
// const { ids: { createId } } = require('geogin-utils')
const Session = require('./session.js')

const createSessionCookie = sessionId => {
    return `session-id=${sessionId}; expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`
}

module.exports = (req, res, next) => {
    const { cookies: { 'session-id': id = createId() } } = req

    res.setHeader('set-cookie', createSessionCookie(id))

    const session = new Session(id)

    session.exists(exists => {
        if (exists) {
            session.load(error => {
                if (error) res.status(500).send('server error :(')

                req.session = session

                next()
            })
        } else {
            session.save(error => {
                if (error) res.status(500).send('server error :(')

                req.session = session

                next()
            })
        }
    })
}