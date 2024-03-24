import { json } from "@sveltejs/kit";

export const GET = () => {
    const number = Math.floor(Math.random() * 6) +1;

    return json(number)
}