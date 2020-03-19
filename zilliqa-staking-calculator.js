/*
 * Zilliqa Staking Calculator Plugin
 * Mar 2020
 */
(function(window) {
    'use strict';

    const DAYS_OPERATION_DIV_ID = "days";
    const STAKED_AMOUNT_DIV_ID = "stakedAmount";
    const REWARDS_DIV_ID = "rewards";
    const DAYS_OPERATION_LABEL = "Days of Operation";
    const STAKED_AMOUNT_LABEL = "Staked amount ($ZIL)";
    const REWARDS_LABEL = "Est. rewards accumulated ($ZIL)";
    const CALCULATE_REWARDS_LABEL = "Calculate Rewards";

    const REWARD_CYCLE = 15;
    const REWARD_FREQUENCY = 24;
    const ANNUAL_INTEREST_RATE = 10.42 / 100; // percent
    const PER_CYCLE_INTEREST_RATE = 0.0285479 / 100; // percent
    const MIN_STAKE_AMOUNT = 1000000;

    function stakingCalculator() {
        var _calculatorObject = {};
        var defaults = {
            containerID: "staking-calculator"
        };

        _calculatorObject.setContainerID = function (containerID) {
            console.log("update: %o", containerID);
            defaults.containerID = containerID;
            return containerID;
        }

        _calculatorObject.update = function () {
            console.log(defaults.containerID);
            document.getElementById(defaults.containerID).innerHTML = "<p>abcdefgh</p>";    
        }

        // initialize the form
        _calculatorObject.init = function () {
            var container = document.getElementById(defaults.containerID);

            var formObject = document.createElement("form");
            formObject.setAttribute("action", "");

            // Create days of operation label
            var daysLabel = document.createElement("label");
            setAttributes(daysLabel, {
                "for": DAYS_OPERATION_DIV_ID
            });
            daysLabel.innerHTML = DAYS_OPERATION_LABEL + ":";
            formObject.appendChild(daysLabel);

            // Create days of operation input
            var daysInput = document.createElement("input");
            setAttributes(daysInput, {
                "type": "text",
                "name": DAYS_OPERATION_DIV_ID,
                "id": DAYS_OPERATION_DIV_ID,
                "value": "0"
            });
            formObject.appendChild(daysInput);

            // Insert linebreak
            insertLineBreak(formObject);

            // Create staked amount label
            var stakedLabel = document.createElement("label");
            setAttributes(stakedLabel, {
                "for":STAKED_AMOUNT_DIV_ID
            });
            stakedLabel.innerHTML = STAKED_AMOUNT_LABEL + ":";
            formObject.appendChild(stakedLabel);

            // Create staked amount input
            var stakedInput = document.createElement("input");
            setAttributes(stakedInput, {
                "type": "text",
                "name": STAKED_AMOUNT_DIV_ID,
                "id": STAKED_AMOUNT_DIV_ID,
                "value": "0"
            });
            formObject.appendChild(stakedInput);

            // Insert linebreak
            insertLineBreak(formObject);

            // Create rewards label
            var rewardsLabel = document.createElement("label");
            setAttributes(rewardsLabel, {
                "for":REWARDS_DIV_ID
            });
            rewardsLabel.innerHTML = REWARDS_LABEL + ":";
            formObject.appendChild(rewardsLabel);

            // Create rewards input
            var rewardsInput = document.createElement("input");
            setAttributes(rewardsInput, {
                "type": "text",
                "name": REWARDS_DIV_ID,
                "id": REWARDS_DIV_ID,
                "value": "0"
            });
            formObject.appendChild(rewardsInput);

            // Insert linebreak
            insertLineBreak(formObject);

            // Create button
            var submitBtn = document.createElement("button");
            setAttributes(submitBtn, {
                "type": "button",
                "id": "submitBtn"
            });
            submitBtn.innerHTML = CALCULATE_REWARDS_LABEL;

            // Calculate rewards
            // TODO: add integer checks
            submitBtn.addEventListener('click', function() {
                var operationalDays = document.getElementById("days").value;
                var stakedAmount = document.getElementById("stakedAmount").value;
                var rewards = operationalDays * stakedAmount * PER_CYCLE_INTEREST_RATE;
                console.log(rewards);
                document.getElementById("rewards").value = Number((rewards).toFixed(2)).toLocaleString('en-US');
            }, false);

            formObject.appendChild(submitBtn);

            container.appendChild(formObject);
        }

        return _calculatorObject;
    }

    // helper function to set attributes easily
    function setAttributes(elem, attrs) {
        for(var key in attrs) {
            elem.setAttribute(key, attrs[key]);
        }
    }

    function insertLineBreak(elem) {
        var linebreak = document.createElement("br");
        elem.appendChild(linebreak);
    }

    function createParagraph(elem, text) {
        var paragraph = document.createElement("p");
        var node = document.createTextNode(text);
        paragraph.appendChild(node);
        elem.appendChild(paragraph);
    }

    if (typeof(window.stakingCalculator) === 'undefined') {
        window.stakingCalculator = stakingCalculator();
    }
}(window));

stakingCalculator.init();