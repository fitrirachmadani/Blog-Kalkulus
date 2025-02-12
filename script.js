document.addEventListener("DOMContentLoaded", function () {
    const formKomentar = document.getElementById("formKomentar");
    const daftarKomentar = document.getElementById("daftarKomentar");

    formKomentar.addEventListener("submit", function (event) {
        event.preventDefault();

        let nama = document.getElementById("nama").value;
        let pesan = document.getElementById("pesan").value;

        if (nama && pesan) {
            let komentarBaru = document.createElement("div");
            komentarBaru.innerHTML = `<p><strong>${nama}</strong>: ${pesan}</p>`;
            daftarKomentar.appendChild(komentarBaru);

            document.getElementById("nama").value = "";
            document.getElementById("pesan").value = "";
        }
    });
});
function hitungTurunan() {
    let ekspresi = document.getElementById("expression").value;
    try {
        let math = window.math;
        let turunan = math.derivative(ekspresi, 'x').toString();
        document.getElementById("hasil").innerHTML = "Turunan: " + turunan;
    } catch (error) {
        document.getElementById("hasil").innerHTML = "Error: Pastikan format input benar!";
    }
}

function hitungIntegral() {
    let ekspresi = document.getElementById("expression").value;
    try {
        let integral = `∫(${ekspresi}) dx`; 
        document.getElementById("hasil").innerHTML = "Integral: " + integral + " + C";
    } catch (error) {
        document.getElementById("hasil").innerHTML = "Error: Pastikan format input benar!";
    }
}
console.log("Script berjalan!");
