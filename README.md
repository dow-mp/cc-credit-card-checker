# Codecademy's Credit Card Checker Project

## Introduction
This project is part of the javascript coursework within Codecademy's full stack career path. The project page is located at <https://www.codecademy.com/projects/practice/credit-card-checker>. The ultimate goal of this program is to determine if a credit card nuber is valid. If a card is not valid, we can determine with which company the card number is associated.

## Technologies
Javascript

## Table of Contents
* Line 2: list of valid credit card number arrays
* Line 9: list of invalid credit card number arrays
* Line 16: list of credit card numbers arrays that may be valid or invalid
* Line 23: batch of valid, invalid, and mystery arrays
* Line 28: function used to validate credit card number array using the Luhn Algorithm, returns true if valid and false if invalid
* Line 67: function used to return an array of invalid credit card arrays by looping through an array using the function on line 28
* Line 86: function used to ID which company each credit card number array within the invalid credit card array belongs to and returns an object containing credit card companies as properties with an array of invalid cards associated with each
* Line 113: a batch of random credit card numbers - containing invalid and valid numbers
*  Line 188: function used to convert each element within the batch of random card numbers to a nested array with each digit indexed separately
