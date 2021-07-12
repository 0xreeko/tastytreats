module.exports.validateFormInput = (name, email, message) => {
  const errors = {};
  if (name.trim() === "") {
    errors.name = "name must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "email must not be empty";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "email must be valid";
    }
  }
  if (message === "") {
    errors.message = "message must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
