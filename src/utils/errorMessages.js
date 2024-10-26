module.exports = {
  AUTH: {
    INVALID_EMAIL_OR_PASSWORD: "Invalid email or password.",
    EMAIL_REQUIRED: "Email is required.",
    PASSWORD_REQUIRED: "Password is required.",
  },
  USER: {
    NOT_FOUND: "User not found.",
    EMAIL_ALREADY_EXISTS: "Email already exists.",
    INVALID_USER_ID: "Invalid user ID.",
  },
  TASK: {
    NOT_FOUND: "Task not found.",
    INVALID_TASK_ID: "Invalid task ID.",
  },
  GENERAL: {
    SERVER_ERROR: "Something went wrong. Please try again later.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    NOT_FOUND: "Resource not found.",
    UNAUTHENTICATED:"Please login to perform actions"
  },
  VALIDATION: {
    REQUIRED_FIELD: (field) => `${field} is required.`,
    INVALID_FIELD: (field) => `${field} is invalid.`,
  },
  DATABASE: {
    CONNECTION_FAILED: "Failed to connect to the database.",
  },
};
