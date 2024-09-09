function crearUsuario(name: string, ci: string, email: string) {
    return { name, ci, email };
}
const usuario = crearUsuario("Victoria", "8505467", "noemi.victoria.ck.vargas@gmail.com");
console.log(usuario);
