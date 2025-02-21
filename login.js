var cubaan = 3;

function validate(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "SYAKIR" && password === "SYAKIR123") {
        alert("BOLEH MASUK KE DALAM SISTEM ENCIK " + username);
        window.location = "syurgawi.html"
        return false;
    } 
    
    
    else {
        cubaan--;
        if (cubaan > 0 ){
            alert("Maaf, sila masukkan username dan password yang betul");
            location.reload();
        }
        
        alert("cubaan anda tinggal " + cubaan + " lagi...... ");
        if (cubaan === 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;

        }
        return false;
    }
}