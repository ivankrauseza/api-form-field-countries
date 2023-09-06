# Country selector
Get your country by autocomplete when typing the first characters.  

## How it works
In this case, the user is requested to enter a country name into the form field. To save time the user can simply start to write the name of their country and the jQuery method will 'filter' the results into a shorter dropdown list so the user can choose the country by clicking on the required name in the dropdown list.

## Languages & Libraries used
HTML, jQuery, jQueryUI, JSON, SASS

## Credits
Method followed: [YouTube](https://www.youtube.com/watch?v=d4MNd5pGDLQ) video.  
JSON list of all countries: [Link](https://gist.github.com/keeguon/2310008)

## Future additions
### Validation 
If the country name entered into the field does not match a suggested country then the input is invalid.
Example, if the user Types 'Irelan' instead of 'Ireland' then the input is invalid.

### Autocomplete by geolocation.
Using MDN [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to get the users country if they allow the request.
