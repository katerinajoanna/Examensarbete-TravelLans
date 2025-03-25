import jwt from "jsonwebtoken";
import { sendError } from "../responses/index.js";

export const verifyToken = (event) => {
    try {
        //console.log("Nagłówki w żądaniu:", event.headers); // patrze co faktycznie przychodzi

        const authHeader = event.headers?.Authorization || event.headers?.authorization;
        //console.log("Authorization Header:", authHeader); // czy loguje ten  dokładnie nagłówek

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            console.error("BŁĄD: Nagłówek nie zawiera poprawnego tokena!");
            return sendError(401, "No token. Please log in.");
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log("Token decoded:", decoded); // Sprawdzam, czy token jest poprawnie dekodowany

        return decoded;

    } catch (error) {
        console.error("Błąd weryfikacji tokena:", error.message);
        return sendError(403, "Invalid or expired token.");
    }
};