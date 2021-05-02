import React from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

export const MyFitnessPalExtractor = () => {

    const macros = {
        dailyGoal: new Map(),
        dailyRemaining: new Map(),
        dailyTotals: new Map()
    }

    const url = 'https://www.myfitnesspal.com/food/diary/aaronjbergman?date=2021-05-02'

    axios.get(url)
    .then(res => {
        const $ = cheerio.load(res.data);
        console.log($);

        const total = []
        const dailygoal = []
        const totalremaining = []
//---------------------------------------------------------------------------------------------------------
// Sort through the total values consumed
        $("table.table0").find('tbody').find('tr.total').first().find('td').each(function(){
            total.push($(this).text().trim(). // remove the spaces
            replace(/(\r\n|\n|\r)/gm,"")) // remove any line breaks
        });

        macros.dailyTotals.set('calories', total[1])
        .set('carbs', total[2].split(" ")[0]) //split the value stored into a new array and retrive the first value 0
        .set('fat', total[3].split(" ")[0])
        .set('protein', total[4].split(" ")[0])
        .set('sodium', total[5])
        .set('sugar', total[6])

//---------------------------------------------------------------------------------------------------------
//Sort through the daily goal for consumption
        $("table.table0").find('tbody').find('tr.alt').find('td').each(function(){
            dailygoal.push($(this).text().trim(). 
            replace(/(\r\n|\n|\r)/gm,"")) 
        });

        macros.dailyGoal.set('calories', dailygoal[1])
        .set('carbs', dailygoal[2].split(" ")[0])
        .set('fat', dailygoal[3].split(" ")[0])
        .set('protein', dailygoal[4].split(" ")[0])
        .set('sodium', dailygoal[5])
        .set('sugar', dailygoal[6])
       
//---------------------------------------------------------------------------------------------------------
//Sort through the total total remaining macros
       $("table.table0").find('tbody').find('tr.remaining').find('td').each(function(){
        totalremaining.push($(this).trim().trim().
        replace(/(\r\n|\n|\r)/gm,""))
    });

        macros.dailyRemaining.set('calories', totalremaining[1])
            .set('carbs', totalremaining[2].split(" ")[0])
            .set('fat', totalremaining[3].split(" ")[0])
            .set('protein', totalremaining[4].split(" ")[0])
            .set('sodium', totalremaining[5])
            .set('sugar', totalremaining[6])
       
     
//---------------------------------------------------------------------------------------------------------
        console.log(macros.dailyTotals)
        console.log(macros.dailyGoal)
        console.log(macros.dailyRemaining)

    }).catch((error) => {
        console.log(error);
    })
}