document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let F = document.getElementById('F').value;
    let S = document.getElementById('S').value;
    let P = document.getElementById('P').value;

    document.getElementById('gponInterface').innerText = `interface gpon ${F}/${S}`;
    document.getElementById('ontInfo').innerText = `display ont info ${P} all`;

    // Mostrar el formulario de ID y DNI después de mostrar el resultado
    document.getElementById('idForm').style.display = 'block';
});

document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let P = document.getElementById('P').value;
    let id = document.getElementById('id').value;
    let dni = document.getElementById('dni').value;
    let serial = document.getElementById('serial').value;

    // Obtener los últimos 4 dígitos del número de serie y convertirlos a minúsculas
    let serialLast4 = serial.slice(-4).toLowerCase();

    let ontAddCommand = `ONT ADD ${P} ${id} SN-AUTH "${serial}" OMCI ONT-LINEPROFILE-ID 10 ONT-SRVPROFILE-ID 10 DESC "Best_${dni}_${serialLast4}"`;

    document.getElementById('ontAddCommand').innerText = ontAddCommand;

    // Mostrar las líneas "quit" y "display service-port all" después del resultado final
    document.getElementById('quitCommand').innerText = "quit";
    document.getElementById('displayServicePort').innerText = "display service-port all";

    // Mostrar el formulario para ID General y VLAN
    document.getElementById('servicePortForm').style.display = 'block';

    // Mostrar el resultado final
    document.getElementById('finalResult').style.display = 'block';
});



document.getElementById('servicePortForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let F = document.getElementById('F').value;
    let S = document.getElementById('S').value;
    let P = document.getElementById('P').value;
    let id = document.getElementById('id').value;
    let idGeneral = document.getElementById('idGeneral').value;
    let vlan = document.getElementById('vlan').value;

    let servicePortCommand = `SERVICE-PORT ${idGeneral} VLAN ${vlan} GPON ${F}/${S}/${P} ONT ${id} GEMPORT 1 MULTI-SERVICE USER-VLAN ${vlan} TAG-TRANSFORM TRANSLATE`;

    document.getElementById('servicePortCommand').innerText = servicePortCommand;

    // Mostrar la línea "save" después del resultado del servicio
    document.getElementById('saveCommand').innerText = "save";

    // Mostrar el resultado del servicio
    document.getElementById('servicePortResult').style.display = 'block';
});
