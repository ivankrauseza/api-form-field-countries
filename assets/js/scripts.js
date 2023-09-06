
// Filter the list of countries:
var data = [];

$.getJSON( "http://localhost:8000/assets/data/countries.json", function( result ) {

    $.each(result.countries, function(index, val) {
        data.push(val);
    });
    console.log(data);
});

$( "#countries" ).autocomplete({
    source: data
});