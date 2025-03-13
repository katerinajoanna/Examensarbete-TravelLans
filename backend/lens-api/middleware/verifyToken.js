import jwt from "jsonwebtoken";

export const verifyToken = (event) => {
    const token = event.headers?.Authorization?.split(" ")[1];    //I get the token from the header

    if (!token) {
        throw new Error('No token. Please log in.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;  // If the token is valid, it returns its data
    } catch (error) {
        throw new Error('Invalid JWT token');
    }
};
