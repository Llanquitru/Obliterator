import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import session from 'express-session'

const RedisStore = connectRedis(session)
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  username: process.env.REDIS_USER || undefined,
  password: process.env.REDIS_PASS || undefined,
  port: process.env.REDIS_PORT || '6379'
})

console.log('Redis connection established.')

/**
 * @param {import('express').Express} app
 */
const useRedis = app => {
  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redis,
        disableTouch: true
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        sameSite: 'lax',
        secure: 'auto'
      },
      saveUninitialized: false,
      secret:
        'lccQ7lNB5sionhSV0V1uwT8uhnOlShwRVidfXgCVCee96hwo+GOh6AeoDbaGY1fj',
      resave: false
    })
  )
}

export { useRedis }
