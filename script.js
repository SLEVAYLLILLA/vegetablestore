document.getElementById('rendel').onclick = function () {
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email1').value;
    const phone = document.getElementById('phone1').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const street = document.getElementById('street').value;
    const haz = document.getElementById('haz').value;
    const message = document.getElementById('message1').value;


    fetch('rendeles.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            city: city,
            zip: zip,
            street: street,
            haz: haz,
            message: message

        })
    }).then(res => res.json()).then(res => {
        alert(res.message);

    })
}




document.getElementById('send').onclick = function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    }).then(res => res.json()).then(res => {
        alert(res.message);

        fetch('bejegyzesek.txt')
            .then(function (res) {

                return res.text()

            })
            .then(res => {
                document.getElementById('items').innerHTML = res;
            })

    })
}