export class AuthorizationError extends Error {
  constructor(message) {
    super();
    this.status = 401;
    this.name = "AuthorizationError";
    this.message = message;
  }
}
export class NotFoundError extends Error {
  constructor(message) {
    super();
    this.status = 404;
    this.name = "NotFoundError";
    this.message = message;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super();
    this.status = 400;
    this.name = "BadRequestError";
    this.message = message;
  }
}

export class ForbiddenError extends Error {
  constructor(message) {
    super();
    this.status = 403;
    this.name = "ForbiddenError";
    this.message = message;
  }
}

export class InternalServerError extends Error {
  constructor(message = "InternalServerError") {
    super();
    this.status = 500;
    this.name = "InternalServerError";
    this.message = message;
  }
}