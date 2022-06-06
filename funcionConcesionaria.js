let autos = require('./autos')
let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };

let auto = {marca: "Toyota", modelo: "Corolla", color: "Blanco", anio: 2019,kilometros: 0, 
precio: 1200000, cuotas:14, patente: "JJK116", vendido: false}

let concesionaria = {
   autos: autos,
   autosQuePuedeComprar: function(persona){
    let autosQuePuedeComprar = this.autosParaLaVenta().filter(function(auto){
        //return this.puedeComprar(autoi, persona) == true
        let cuota = auto.precio/ auto.cuotas
        let total = auto.precio
        let puedeComprar =  (cuota <= persona.capacidadDePagoEnCuotas && total <= persona.capacidadDePagoTotal) ? true : false
        return  puedeComprar == true    
    })
    return autosQuePuedeComprar
   },
   puedeComprar: function(auto, persona){
    let cuota = auto.precio/ auto.cuotas
    let total = auto.precio
    return (cuota <= persona.capacidadDePagoEnCuotas && total <= persona.capacidadDePagoTotal) ? true : false
   },
   totalDeVentas: function(){
    let listaPrecios = this.listaDeVentas()
        if(listaPrecios == null|| listaPrecios == [] || listaPrecios == undefined || listaPrecios == ""){return 0}
        else{let suma = listaPrecios.reduce(function(total, precio){
            return total + precio})
        return suma
        }
   },
   listaDeVentas: function(){
    let listaVendidos = this.autos.filter(function(auto){
        return auto.vendido == true
            })
        if(listaVendidos == undefined){return null}
        else{ let listaPrecios = [];
            listaVendidos.forEach(function(auto){
            listaPrecios.push(auto.precio)
        })
        return listaPrecios
            ;}
   },
   autosNuevos: function(){
    let autosNuevos = this.autosParaLaVenta().filter(function(auto){
        return auto.kilometros < 100
            })
        if(autosNuevos == undefined){return null}
        else{return autosNuevos;}
   },
   autosParaLaVenta: function(){
    let listaAutos = this.autos.filter(function(auto){
        return auto.vendido == false
            })
        if(listaAutos == undefined){return null}
        else{return listaAutos;}
   },
   venderAuto: function(inputPatente){
    let autoBuscado = this.buscarAuto(inputPatente)
    if(autoBuscado == null){return null}
    else{autoBuscado.vendido = true; return autoBuscado;}
   },
   buscarAuto: function (inputPatente){
    let valorBuscado = this.autos.filter(function(auto){
    return auto.patente == inputPatente
        })
    let [autoBuscado] = valorBuscado
    
    if (autoBuscado == undefined){ return null}
    else{return autoBuscado}
    }
}

//https://github.com/Mlogascio1986/ejercicioConcesionaria.git
//console.log(concesionaria.buscarAuto('APL123'))
//console.log(concesionaria.venderAuto('APL1'))
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.puedeComprar(auto, persona))
console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosQuePuedeComprar(persona))

// probando cambios
module.exports = concesionaria