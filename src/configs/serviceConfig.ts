export const API_PREFIX = import.meta.env.VITE_API_PREFIX;

export const DEFAULT_TIMEOUT = import.meta.env.VITE_DEFAULT_TIMEOUT;

export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

export const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NO_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

export const HTTP_PARAMETER = {
    grant_type: 'client_credentials'
};

export const AUTH_HEADER = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export const SERVICE_URL_CONFIG = {
    exam: 'exam',
    userList: 'user-list'
};
