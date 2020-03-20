# staking-calculator-plugin
pure javascript plugin that calculates staking rewards

## Introduction
This plugin helps users to easily compute the Zilliqa staking rewards. Users may embed the javascript plugin on their websites. 

Enter the values for _"Days of Operation"_, _"Staked amount"_, the calculator would instantly auto-compute the rewards and display the result on _"Est. rewards accumulated"_ field.

Hit the _"Reset"_ button to clear the input values.

## Browser
Tested against Chrome and Firefox. Microsoft IE may not work correctly.

## Getting Started
Clone the repository and copy the `zilliqa-staking-calculator.js` to the folder with the webpages, e.g. `index.html`, which you want to embed the staking calculator on.

Open the webpage (.html) with your favourite text editor and add the following code before the end of `</body>`:
```
<div id="staking-calculator"></div>
<script src="./zilliqa-staking-calculator.js"></script>
```
Example:
```
<html>
    <head> ... </head>
    <body>
        ...
        ...
        <div id="staking-calculator"></div>
        <script src="./zilliqa-staking-calculator.js"></script>
    </body>
</html>
```
**Note:** The `id` for `<div id="staking-calculator>"` is pre-defined in the javascript file. If this `id` happens to conflict with existing ones on the webpage, edit the `id` here and **inside** the `zilliqa-staking-calculator.js`:
```
        var defaults = {
            containerID: "staking-calculator"
        };
```

## Demonstration
For a demonstration for the calculator, open the `index.html` to start.