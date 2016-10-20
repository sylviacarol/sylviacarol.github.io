var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}


// STEP 1: GRAB THE HANDLEBARS HTML TEMPLATE
// (from the script tag in the html file)
var source = $('#presidentTemplate').html(); 

// STEP 2: COMPILE THE TEMPLATE
//(read the template created in the html file)
var template = Handlebars.compile(source); 

//STEP 3: PASS COMPILE THE OBJECT
//(Handlebars expects an object)
//connects the template with the object
var presidentTemplate = template(presidentObject); 

// STEP 4: APPEND 
//insert the data in the page
$('#jquery-list').append(presidentTemplate); 


