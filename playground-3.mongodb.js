use("UPC")

db.createCollection("Cursos2");

db.Cursos2.insertMany([
    {
        "cod_curso": "SI400",
        "id_carrera": "IS01",
        "nom_curso": "Diseño de base de datos",
        "creditos": 4
    },
    {
        "cod_curso": "SI401",
        "id_carrera": "IS02",
        "nom_curso": "Matematica Computacional",
        "creditos": 1
    },
    {
        "cod_curso": "SI402",
        "id_carrera": "IS015",
        "nom_curso": "IHC y Tecnologias moviles",
        "creditos": 7
    },
    {
        "cod_curso": "SI403",
        "id_carrera": "IS021",
        "nom_curso": "Arquitectura de computadoras",
        "creditos": 4
    },
    {
        "cod_curso": "SI404",
        "id_carrera": "IS018",
        "nom_curso": "Complejidad Algoritmica",
        "creditos": 3
    },
    {
        "cod_curso": "SI405",
        "id_carrera": "IS016",
        "nom_curso": "Open Source",
        "creditos": 5
    },
    {
        "cod_curso": "SI406",
        "id_carrera": "IS017",
        "nom_curso": "Fisica II",
        "creditos": 6
    },
    {
        "cod_curso": "SI405",
        "id_carrera": "IS016",
        "nom_curso": "Open Source",
        "creditos": 5
    },
    {
        "cod_curso": "SI4010",
        "id_carrera": "IS016",
        "nom_curso": "Open Source",
        "creditos": 7
    },
    {
        "cod_curso": "SI420",
        "id_carrera": "IS016",
        "nom_curso": "Open Source",
        "creditos": 6
    },
    {
        "cod_curso": "SI405",
        "id_carrera": "IS016",
        "nom_curso": "Open Source",
        "creditos": 10
    },

]);
//Listar documentos
db.Cursos2.find();

//Listar documentos
db.Cursos2.findDocuments({ "creditos": 7 });

//Eliminar documento
db.Cursos2.deleteOne({ 'cod_curso': 'SI400' });

//Modificar documento
//Primer objeto: se usar para buscar el documento en la base de datos
//Segundi objeto con $set: Se usa para modificar algún valor de ese documento
db.Cursos2.updateOne({ "cod_curso": "SI406" }, { $set: { "creditos": 5 } });


//Encontrar un documento especifico
db.Cursos2.find({ "cod_curso": "SI402" })

//Listar el primer documento
db.Cursos2.findOne();

//Encontrar documentos con creditos diferentes
db.Cursos2.distinct("creditos");

//Encontrar documentos con creditos diferentes
db.Cursos2.distinct("creditos", { "nom_curso": "Open Source" });


//Contar documentos, análogo a find()
db.Cursos2.countDocuments({ "creditos": 5 })

//Contar documentos, análogo a find()
db.Cursos2.estimatedDocumentCount();


//OPERADORES CONDICIONALES_________________________________--
//Igual a 7
db.Cursos2.find({
    "creditos": { $eq: 7 }
});

//No igual o diferente a 7
db.Cursos2.find({
    "creditos": { $ne: 7 }
});

//Mayor a 3
db.Cursos2.find({
    "creditos": { $gt: 3 }
});

//Mayor o igual a 3
db.Cursos2.find({
    "creditos": { $gte: 3 }
});

//Menor a 3
db.Cursos2.find({
    "creditos": { $lt: 3 }
});

//Menor o igual a 3
db.Cursos2.find({
    "creditos": { $lte: 3 }
});

// in -> va ayudar a listar los documentos que tengan como creditos a 3,4 o 5
db.Cursos2.find({
    "creditos": { $in: [3, 4, 5] }
});

//va ayudar a listar los documentos que no tengan como creditos a 3,4 o 5
db.Cursos2.find({
    "creditos": { $nin: [3, 4, 5] }
});

//OPERADORES LÓGICOS______________________________________
//and
db.Cursos2.find({
    $and: [
            { "creditos": { $gt: 5 } },
            {"cod_curso": "SI406"}
        ]
});

//or
db.Cursos2.find({
    $or: [
        { "creditos": { $gt: 5 } },
        { "cod_curso": "SI406" }
    ]
});


//not
db.Cursos2.find({
    $or: [
        { "creditos": { $not: { $gt: 5 } } },
        { "cod_curso": "SI406" }
    ]
});


//nand
db.Cursos2.find({
    $and: [
        { "creditos": { $gt: 5 } },
        { "cod_curso": "SI406" }
    ]
});


//nor
db.Cursos2.find({
    $and: [
        { "creditos": { $gt: 5 } },
        { "cod_curso": "SI406" }
    ]
});
