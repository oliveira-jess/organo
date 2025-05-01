export interface Livro {
    titulo: string;
    autor: string;
    imagem:string;
    favorito: boolean;
    genero: GeneroLiterario;
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[];
}