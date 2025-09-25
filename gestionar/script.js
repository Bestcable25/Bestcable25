// === BOTÓN 1: Obtener F/S/P e ID por Serial ===
document.getElementById('generateCode1').addEventListener('click', function() {
    const serialNumber = document.getElementById('serialNumber').value;
    if (!serialNumber) {
        alert("Ingrese un número de serie.");
        return;
    }
    const code1 = `display ont info by-sn ${serialNumber}`;
    document.getElementById('outputCode1').textContent = code1;
});

// === BOTÓN 2: Obtener ID General (Service-port) ===
document.getElementById('generateCode2').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;

    const regex = /^\d+\/\d+\/\d+$/;
    if (!regex.test(fsp)) {
        alert('Formato inválido. Use F/S/P (ejemplo: 0/1/2).');
        return;
    }

    const code2 = `display service-port port ${fsp}`;
    document.getElementById('outputCode2').textContent = code2;
});

// === BOTÓN 3: Desactivar ONT ===
document.getElementById('generateCode3').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;

    if (!fsp || !ontId) {
        alert("Ingrese F/S/P e ID antes de desactivar.");
        return;
    }

    const [f, s, p] = fsp.split('/');
    const code3 = `
interface gpon ${f}/${s}
ont deactivate ${p} ${ontId}
quit
`.trim();

    document.getElementById('outputCode3').textContent = code3;
});

// === BOTÓN 4: Activar ONT ===
document.getElementById('generateCode4').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;

    if (!fsp || !ontId) {
        alert("Ingrese F/S/P e ID antes de activar.");
        return;
    }

    const [f, s, p] = fsp.split('/');
    const code = `
interface gpon ${f}/${s}
ont activate ${p} ${ontId}
quit
`.trim();

    document.getElementById('outputCode3').textContent = code;
});

// === BOTÓN 5: Reiniciar ONT ===
document.getElementById('generateCode5').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;

    if (!fsp || !ontId) {
        alert("Ingrese F/S/P e ID antes de reiniciar.");
        return;
    }

    const [f, s, p] = fsp.split('/');
    const code = `
interface gpon ${f}/${s}
ont reset ${p} ${ontId}
quit
`.trim();

    document.getElementById('outputCode3').textContent = code;
});

// === BOTÓN 6: Niveles ópticos ===
document.getElementById('generateCode6').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;

    if (!fsp || !ontId) {
        alert("Ingrese F/S/P e ID antes de reiniciar.");
        return;
    }

    const [f, s, p] = fsp.split('/');
    const code = `
interface gpon ${f}/${s}
display ont optical-info ${p} all
`.trim();

    document.getElementById('outputCode3').textContent = code;
});


// === BOTÓN 7: Niveles ópticos y datos ===
document.getElementById('generateCode7').addEventListener('click', function() {
    const fsp = document.getElementById('fsp').value;
    const ontId = document.getElementById('ontId').value;

    if (!fsp || !ontId) {
        alert("Ingrese F/S/P e ID antes de reiniciar.");
        return;
    }

    const [f, s, p] = fsp.split('/');
    const code = `
interface gpon ${f}/${s}
display ont info summary ${p}
`.trim();

    document.getElementById('outputCode3').textContent = code;

});
