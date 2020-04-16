import React from 'react';
import moment from 'moment';
import Styled from 'styled-components';

const TH = Styled.th`
    padding: 10px;
    font-weight: bold;
    background-color: yellow;
`;

export function Calendar(props) {

    const [_dateObject, setDateObject] = React.useState(moment());


    const currentDay = () => {
        return _dateObject.format("D");
    };

    const firstDayOfMonth = () => {
        let dateObject = _dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d");
        return firstDay;
    };

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <td className="calendar-day empty">{""}</td>
        );
    }

    let daysInMonth = [];
    for (let d = 1; d <= 30; d++) {

        daysInMonth.push(
            <td key={d} style={{backgroundColor:d==currentDay()?'yellow':""}}>
                {d}
            </td>
        );
    }


    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];


    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows
            cells = []; // empty container
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
            rows.push(cells);
        }
    });


    const weekdayshort = moment.weekdaysShort();

    let weekdayshortname = weekdayshort.map(day => {
        return (
            <TH key={day}>
                {day}
            </TH>
        );
    });

    return<div>

        {weekdayshortname}
        {rows.map((d, i) => {
            return <tr>{d}</tr>;
        })}
    </div>
}
