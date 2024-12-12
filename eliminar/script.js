document.getElementById('generateCode1').addEventListener('click', function() {
    const serialNumber = document.getElementById('serialNumber').value;
    const code1 = `display ont info by-sn ${serialNumber}`;
    document.getElementById('outputCode1').textContent = code1;
});

document.getElementById('generateCode2').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;

    // Validar el formato de F/S/P
    const regex = /^\d+\/\d+\/\d+$/;
    if (!regex.test(fsp)) {
        alert('Formato inválido. Asegúrese de que el formato sea F/S/P donde F, S y P son números.');
        return;
    }

    // Generar código eliminando ontId
    const code2 = `display service-port port ${fsp}`;
    document.getElementById('outputCode2').textContent = code2;
});

document.getElementById('generateCode3').addEventListener('click', function() {
    const generalId = document.getElementById('generalId').value;
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;
    const [f, s, p] = fsp.split('/');

    // Generar el código final en líneas separadas
    const code3 = `
undo service-port ${generalId}
interface gpon ${f}/${s}
ont delete ${p} ${ontId}
quit
    `.trim();
    
    document.getElementById('outputCode3').textContent = code3;
});

