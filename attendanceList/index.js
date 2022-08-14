let cantidad = prompt("¿Cuántos alumnos hay en tu curso?");
let totalAlumnos = [];

for (i = 0; i < cantidad; i++){
    totalAlumnos[i] = [prompt(`Cuál es el nombre del alumno número ${i+1}?`),0];
}

const totalAsistencias = (nombre,p)=>{
    let asistencias = prompt(nombre);
    if (asistencias == "p" || asistencias == "P"){
        totalAlumnos[p][1]++;
    }
}

for ( i = 0; i < 30; i++){
    for (alumno in totalAlumnos){
        totalAsistencias(totalAlumnos[alumno][0],alumno);
    }
}

for (alumno in totalAlumnos){
    let resultado = `${totalAlumnos[alumno][0]}:<br>
    _____Presencias: ${totalAlumnos[alumno][1]}<br>
    ______Ausencias: ${ 30 - totalAlumnos[alumno][1]} `;
    if ( 30 - totalAlumnos[alumno][1] > 15){
        resultado += "Reprobado por inasistencias<br><br>";
    }
    else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}