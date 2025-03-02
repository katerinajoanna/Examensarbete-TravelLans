export function sendResponse(status, data) {
    return {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ success: true, data }),
    };
}

export function sendError(status, data) {
    return {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ success: false, error: message })
    };
}
