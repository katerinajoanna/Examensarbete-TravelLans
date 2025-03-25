import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { sendResponse, sendError } from "../../../responses/index.js";

export const refreshToken = async (event) => {
    try {

        if (!event.body) {
            //console.error("Brak event.body!");
            return sendError(400, "Missing request body");
        }

        const { refreshToken } = JSON.parse(event.body);
        if (!refreshToken) {
            //console.error(" Brak refreshToken w body!");
            return sendError(400, "Missing refresh token");
        }

        if (!process.env.JWT_SECRET) {
            return sendError(500, "Server error: missing JWT_SECRET");
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        //console.log("Token decoded:", decoded);

        const newAccessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: "4h" }
        );

        //console.log(" Nowy accessToken wygenerowany!");
        return sendResponse(200, { accessToken: newAccessToken });

    } catch (error) {
        //Ogiltig eller utgången refresh token
        return sendError(500, "Invalid refresh token");
    }
};




/**
 * Den här funktionen verifierar en refresh token och genererar en ny access token.  
 * - Kontrollerar om en refresh token finns i förfrågan.  
 * - Verifierar refresh token med JWT.  
 * - Om den är giltig, skapar en ny access token med en giltighetstid på 4 timmar.  
 * - Returnerar den nya access token eller ett felmeddelande om något går fel.  
 * Funktionen används för att förlänga en användares session utan att behöva logga in igen.  
 */