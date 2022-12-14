// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ali-Mugamai
// Created on: DEC 14
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-08-JS/sw.js", {
    scope: "/ICS20-5-08-JS/",
  })
}
/**
 * gets a random number and displays if you are right or wrong
 */
function myButtonClicked() {
  const num_one = parseInt(document.getElementById("first_num").value)
  const num_two = parseInt(document.getElementById("second_num").value)
  var counter = 0
  var answer = num_one
  var remainder = 0

  if (num_one > 0 && num_two > 0) {
    while (answer >= num_two) {
      counter = addedNumber + 1
      answer = answer - num_two
    }
  }
  if (answer == 0) {
    remainder = 0
  } else if (answer != 0) {
    remainder = answer + num_two
  }

  document.getElementById("answer").innerHTML =
    "<p>Value is " + counter + "R" + remainder + "</p>"
}
