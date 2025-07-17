export const checkValidData = (email, password) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  if (!isEmail) {
    return "Email is not valid";
  }

  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPassword) {
    return "Password must be at least 8 characters and include uppercase, lowercase, and a number";
  }

  return null; // valid data
};
