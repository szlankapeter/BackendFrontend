class DataService {

    constructor() {

    }

    getAxiusData(url, callback) {
        axios.get(url)
            .then(function (response) {
                // handle success
                /* console.log(response);
                console.log(response.data); */
                callback(response.data);
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    postAxiusData(url) {
        axios.post(url, {
            nev: 'Fred',
            szul: 20030405
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

} export default DataService