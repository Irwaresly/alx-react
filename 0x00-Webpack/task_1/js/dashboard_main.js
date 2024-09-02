import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    // Create the paragraph elements
    const paragraph1 = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const paragraph3 = $('<p>').attr('id', 'count');
    const paragraph4 = $('<p>').text('Copyright - Holberton School');

    // Append the elements in the desired order
    $('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);
});

let conunt = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));