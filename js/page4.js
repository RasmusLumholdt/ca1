

document.getElementById('searchBtn').addEventListener('click', function createSearchUrl(event){
    event.preventDefault();
    let personNum = document.getElementById('searchField').value;
    console.log(personNum);

    let searchString = 'https://jsonplaceholder.typicode.com/users/' + personNum;
    console.log(searchString);

    fetch(searchString).then(function(response){
        if (response.status != 200) {
            console.log('FEJL')
            return;
        }

        response.json().then(function(data){
            console.log(data);

            let returnStr = '';
            returnStr += '<p>Name: ' + data.name + '</p>';
            returnStr += '<p>Phone: ' + data.phone + '</p><br>';
            returnStr += '<p><b>Adress: </b><br> Street: ' + data.address.street + '</p>';
            returnStr += '<p>City: ' + data.address.city + '</p>';
            returnStr += '<p>Zip: ' + data.address.zipcode + '</p>';
            returnStr += '<p>Geo(lat,lng): ' + data.address.geo.lat + ', ' + data.address.geo.lng +'</p>';
            


            document.getElementById('results').innerHTML = returnStr;

        });
    })
    .catch(function(error){
        console.log('Error occured' + error);
    });
}, false);


document.getElementById('allBtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('asdasd')
    fetch('https://jsonplaceholder.typicode.com/users/').then(function(response){
        if(response.status != 200) {
            console.log('Error')
            return;
        }

        response.json().then(function(data){
            let returnStr = "<table><tr><th>Name</th><th>Phone</th></tr>";
            for(let i = 0; i < data.length; i++) {
                
                returnStr += '<tr><td>'+ data[i].name +'</td><td>'+ data[i].phone + '</td></tr>';
            }

            returnStr += '</table>';

            document.getElementById('results').innerHTML = returnStr;
        });


    })
    .catch(function(error){
        console.log('Error occured' + error);
    });

});