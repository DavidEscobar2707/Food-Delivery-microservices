const ERROR_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
};

class AppError extends Error {
    constructor(name, statusCode, description, isOperational, errorStack, loggingErrorResponse){
        super(description),
        Object.setPrototypeOf(this, new.target.prototype),
        this.name = name,
        this.statusCode = statusCode,
        this.isOperational = isOperational,
        this.errorStack = errorStack,
        this.loggingErrorResponse = loggingErrorResponse,
        Error.captureStackTrace(this)
    }
}

class BadRequestError extends AppError {
    constructor(description = 'Bad request', loggingErrorResponse){
        super('Not found', ERROR_CODES.BAD_REQUEST, description, true, false, loggingErrorResponse);
    }
}

class ApiError extends AppError {
    constructor(name, statusCode = ERROR_CODES.INTERNAL_ERROR, description = 'Internal server error', isOperational = true){
        super(name,statusCode,description,isOperational);
    }
}

class ValidationError extends AppError {
    constructor(description = 'Validation error', errorStack){
        super('Bad Request', ERROR_CODES.BAD_REQUEST, description, true, errorStack);
    }
}


module.exports= {
    ERROR_CODES,
    AppError,
    BadRequestError,
    ApiError,
    ValidationError
}