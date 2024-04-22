const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "fill the inputs properly"
    const extraDetails = `${err.errors[0].message} at ${err.errors[0].path}`;
    const error = {
      status,
      message,
      extraDetails,
    };
    next(error)
  }
};

module.exports = validate;