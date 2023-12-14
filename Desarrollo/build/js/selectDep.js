const departaments = ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco",
 "Huancavelica", "Huanuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios",
  "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"];


const menu = document.querySelector("#departament");
departaments.forEach((dep)=>{
    let option = document.createElement("option")
    option.innerText=dep;
    option.value=dep
    menu.append(option);
    console.log(dep);
})
console.log(menu);
console.log(departaments);
console.log("wasdsad");