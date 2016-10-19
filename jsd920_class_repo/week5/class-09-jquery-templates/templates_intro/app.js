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


var titleObject = {
    title: 'Presidents',
    description: 'A JSD Project'
};

// STEP 1: GRAB THE HANDLEBARS HTML TEMPLATE

var source = $('#title-template').html();

// STEP 2: COMPILE THE TEMPLATE

var template = Handlebars.compile(source);


//STEP 3: PASS COMPILE THE OBJECT

var titleTemplate = template(titleObject);

// STEP 4: APPEND 
$('.post-full').append(titleTemplate);


