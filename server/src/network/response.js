/**
 * @param {Object} args
 * @param {import('express').Response} args.res
 * @param {Boolean} args.error
 * @param {Object} args.message
 * @param {Number|undefined} args.status
 */
const response = ({
  res,
  error = true,
  message = 'Internal server error',
  status = 500
}) => {
  res.status(status).send({ error, message })
}

export { response }
