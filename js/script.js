console.log('hola');


var clientes = [];
var rooms = [];

function save() {

    if (clientes.length == 0) {
        let ubic = document.getElementById('ubicacion').value;
        let cli = document.getElementById('nom_cliente').value;
        let dn = document.getElementById('num_dni').value;
        let f = new Date();

        var obj_client = {
            name:cli,
            ubication:ubic,
            dni:dn,
            date:f
        }
        clientes.push(obj_client);
        listar_clientes();
        document.getElementById('ubicacion').disabled = "disabled";
        document.getElementById('nom_cliente').disabled = "disabled"
        document.getElementById('num_dni').disabled = "disabled"
        document.getElementById('num').disabled = "disabled"
    }
    
    let tip = document.getElementById('tipo').value;
    let cant = document.getElementById('cant_per').value;
    let c = parseInt(cant);

    let pri = (tip == 'matrimonial') ? 250 : 150;

    var obj_room = {
        type: tip,
        price:pri,
        amount:c
    }

    rooms.push(obj_room);
    
    listar_rooms();
    document.getElementById('cant_per').value = 0;

}

function listar_clientes() {
    for (let i = 0; i < clientes.length; i++) {
        const element = clientes[i];
        let fecha = element.date.getDate() + "/" + (element.date.getMonth() +1) + "/" + element.date.getFullYear();
        document.getElementsByTagName('tbody')[0].innerHTML = '<tr><td>'+ (i+1) +'</td><td>'+ element.name +'</td>'+
        '<td>'+ element.dni +'</td><td>'+ fecha +'</td><td>'+ element.ubication +'</td></tr>';
    }
}

function listar_rooms() {

    let contenedor = '';
    let tot = 0.0;
    for (let i = 0; i < rooms.length; i++) {
        const element = rooms[i];
        tot += (element.price*element.amount);
        contenedor += '<tr><td>' + (i+1) + '</td><td>' + element.type + '</td>'+
        '<td>' + element.price + '</td><td>' + element.amount + '</td><td><img src="images/delete.png" width="30px" onclick="delete_room(' + i +')"></td></tr>';
    }
    document.getElementsByTagName('tbody')[1].innerHTML = contenedor;
    document.getElementById('total').value = tot;
}

function reset() {
    document.getElementsByTagName('tbody')[1].innerHTML = "";
    document.getElementsByTagName('tbody')[0].innerHTML = "";
    clientes.splice(0, clientes.length);
    rooms.splice(0, rooms.length);
    document.getElementById('ubicacion').disabled = false;
    document.getElementById('nom_cliente').disabled = false;
    document.getElementById('num_dni').disabled = false;
    document.getElementById('num').disabled = false;
    document.getElementById('total').value = "";
    document.getElementById('ubicacion').value = "";
    document.getElementById('nom_cliente').value = "";
    document.getElementById('num_dni').value = "";
    document.getElementById('num').value = "";
}

function delete_room(index) {
    console.log(index);
    if (confirm("Confirmar eliminación de habitación")) {

        rooms.splice(index , 1);
        listar_rooms();
    }
}