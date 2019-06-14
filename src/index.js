import $ from 'jquery';
import './style.scss';

let count = 0;

setInterval(() => {
  $('#main').html(`You've been on this page for ${count} seconds.`);
  count += 1;
}, 1000);
