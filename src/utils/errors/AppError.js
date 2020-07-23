class AppError {
  constructor(name, message, statusCode) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
