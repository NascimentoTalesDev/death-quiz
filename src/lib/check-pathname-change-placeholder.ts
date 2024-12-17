export function checkPathnameChangePlaceholder(pathname: string) {
    console.log("checkPathnameChangePlaceholder", pathname);
    if (!pathname) {
        return "Digite a sua busca..."
    }

    switch (true) {
        case pathname.includes("quizzes"):
            return "Buscar quizzes";
        case pathname.includes("favorites"):
            return "Buscar favoritos";
        case pathname.includes("friends"):
            return "Buscar amigos";
        default:
            return "Digite a sua busca...";
    }
}  