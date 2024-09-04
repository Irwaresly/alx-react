// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    // Create the paragraph and button elements
    const paragraph1 = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const paragraph3 = $('<p>').attr('id', 'count');
    const paragraph4 = $('<p>').text('Copyright - Holberton School');

    // Append the elements to the body
    $('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);

    // Initialize counter
    let count = 0;

    // Define the updateCounter function
    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }

    // Bind the debounced updateCounter function to the button's click event
    button.on('click', _.debounce(updateCounter, 300));
});