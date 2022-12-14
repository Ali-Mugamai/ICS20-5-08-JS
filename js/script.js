// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-06-JS/sw.js", {
    scope: "/ICS20-5-06-JS/",
  })
}
/**
 * gets a random number and displays if you are right or wrong
 */
function myButtonClicked() {
  const num_one = parseInt(document.getElementById("first_num").value)
  const num_two = parseInt(document.getElementById("second_num").value)
  let counter = 0
  let answer = 0
  while (counter < num_two) {
    counter = counter + 1
    answer = answer + num_one
  }
  document.getElementById("answer").innerHTML = "<p>Value is " + answer + "</p>"
}
