// Generera access- och refresh-token för autentisering

import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    //console.log("Generating Access Token for:", user);
    //console.log("JWT_SECRET:", process.env.JWT_SECRET); // DEBUG
    return jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );
};

export const generateRefreshToken = (user) => {
    //console.log("Generating Refresh Token for:", user);
    //console.log("JWT_SECRET:", process.env.JWT_SECRET); // DEBUG
    return jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};
