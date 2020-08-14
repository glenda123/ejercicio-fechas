  const moment= require("moment")
  moment.locale("es")
//   let fecha= moment( [1998,0,1] ).format("DD MM YYYY")

// Primer ejercicio de moment.Js
const diasFebrero= (año = 1998) =>{
let fecha=moment([año,01])
fecha= fecha.daysInMonth()
console.log(fecha)
}
// diasFebrero()


// Segundo ejercicio de moment.Js
const queDia=(año=[2018,0,13])=>{
    let fecha=moment (año)
    fecha=fecha.format("dddd")
    console.log(fecha)
}
//   console.log(fecha)

// queDia()

// Tercer ejercicio
const diasDeHoy=()=>{
    const fechas =
     ["2020-08-14",
      "2019-08-11",
      "2020-08-11",
      "2020-06-19",
      "2018-10-08",
      "2020-05-11",
      "2020-08-11",
      "2020-08-14"]

      let fecha= moment()
    
      return console.log(fechas.filter(day => 
        fecha.isSame(day,"day")))
} 
// diasDeHoy()

//Cuarto ejercicio

const fechasMenores=()=>{
    const fechas =
     ["2020-08-14",
      "2019-08-11",
      "2020-08-11",
      "2020-06-19",
      "2018-10-08",
      "2020-05-11",
      "2020-08-11",
      "2020-08-12"]

      let fecha= moment()
    
      return console.log(fechas.filter(day => 
        fecha.isAfter(day,"day")))
}
// fechasMenores()

//Quinto ejercicio

const fechasMayores=()=>{

    const fechas =
     ["2020-08-14",
      "2019-08-11",
      "2020-08-11",
      "2020-06-19",
      "2018-10-08",
      "2020-05-11",
      "2020-08-11",
      "2020-08-12"]


      let fecha= moment()
    
      return console.log(fechas.filter(day => 
        fecha.isBefore(day,"day")))

}

// fechasMayores()

//Sexto ejercicio

const añoBisiesto=()=>{

    const fechas =
    ["2020-08-14",
     "2019-08-11",
     "2012-08-11",
     "2020-06-19",
     "2018-10-08",
     "2020-05-11",
     "2016-08-11",
     "2020-08-12"]

      return console.log(
          fechas.filter( day => moment(day).isLeapYear())) 
}

// añoBisiesto()


//Ejercicio reto

  const entreSemana=()=>{
    const fechas =
    ["2020-08-14",
  "2020-08-20",
  "2020-08-11",
  "2020-08-19",
  "2020-08-15",
  "2020-08-11",
  "2020-08-17",
  "2020-08-23",]

 return console.log(
    fechas.filter( day => moment(day).isBetween("2020-08-17","2020-08-23")) )
  }
  entreSemana()