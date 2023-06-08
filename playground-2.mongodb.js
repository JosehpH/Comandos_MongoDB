use("UPC");
/*Crea una colección con validación de esquema
    Descripción:
    Se agrega un json como segundo parámetro como el siguiente ejempo, solo se cambiaría title, required y properties dependiendo de los tipos de datos de la colección
*/
db.createCollection("Cursos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Esquema de validación para el objeto curso",
            required: [
                "cod_curso", "nom_curso", "creditos"
            ],
            properties: {
                cod_curso: {
                    bsonType: "string",
                    description: "el campo 'cod_curso' debe ser un string",
                },
                nom_curso: {
                    bsonType: "string",
                    description: "el campo 'nom_curso' debe ser un string",
                },
                creditos: {
                    bsonType: "number",
                    description: "el campo 'creditos' debe ser un entero",
                }
            }

        }
    }
});
//Borrar coleccion
db.Cursos.drop();

//Ingresar un curso
db.Cursos.insertOne({
    "cod_curso": "SI400", "nom_curso": "Diseño de base de datos", "creditos": 4
})

//Listar
db.Cursos.find();

//Ingresar uno incorrecto y será rechazado por las validaciones, 'creditos' debe ser de tipo number
db.Cursos.insertOne({
    "cod_curso": "SI400", "nom_curso": "Diseño de base de datos", "creditos": "CUATRO"
})

//Eliminar todos los documentos de una colección
db.Cursos.deleteMany({});

for (let i = 0; i < 50; i++){
    db.Cursos.insertOne({
        "cod_curso": "SI400", "nom_curso": "Diseño de base de datos "+i.toString(), "creditos": i
    })
}

//Modificar colecciones con variación de esquema
//Aquí se modifica el validador para definir un minimo y máximo de carácteres o números para aceptar los datos
db.runCommand({
    collMod: "Cursos", validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Esquema de validación para el objeto curso",
            required: [
                "cod_curso", "nom_curso", "creditos"
            ],
            properties: {
                cod_curso: {
                    bsonType: "string",
                    maxLength: 6,
                    description: "el campo 'cod_curso' debe ser un string"
                },
                nom_curso: {
                    bsonType: "string",
                    maxLength:50,
                    description: "el campo 'nom_curso' debe ser un string",
                },
                creditos: {
                    bsonType: "number",
                    minLength: 1,
                    maxLength:8,
                    description: "el campo 'creditos' debe ser un entero",
                }
            }
        }
    }
})