export interface Estudiante{
    nombre: string;
    apellido: string;
    id_estudiante: number;
    areaCursos: string;
    cursos: Array<string>;
    ultimoIngreso: Date;
}