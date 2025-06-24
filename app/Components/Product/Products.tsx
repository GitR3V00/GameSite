import { gameArray, Game } from "@/app/games/GameArrays";
import { consoles, Console } from "@/app/consoles/consoleArrays";

export type Product = Console | Game;

export const productArray: Product[] = [...gameArray, ...consoles];
