const data = [];

$.getJSON( "http://localhost:8000/assets/data/countries.json", function( result ) {

    $.each(result.entries, function(index, val) {
        data.push(val);
    });
    console.log(data);
});

$( "#countries" ).autocomplete({
    source: data
});