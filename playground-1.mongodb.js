
const database = "config";
console.log(database);

//Usar base de datos
use(database);

//Insertar multiples elementos en la colección (equivalente a tabla)
db.Alumnos.insertMany(
    [
        {
            "Codigo": "12345",
            "Nombres": "Jose Carlos",
            "Ape_Pat": "Motan…",
        },

        {
            "Codigo": "12345",
            "Nombres": "Jose Carlos",
            "Ape_Pat": "Motan…"
        }
    ]

);

//Listar documentos de la colección
db.Alumnos.find()

//Insertar documentos con arreglos
db.Alumnos.insertOne(
    {
        "Codigo": "154889",
        "Nombres": "Juan Carlos",
        "Ape_Pat": "Motan",
        "Telefono": ["123456", "456789", "123546"]
    }
)
db.Alumnos.deleteMany({"Codigo":"12345"})