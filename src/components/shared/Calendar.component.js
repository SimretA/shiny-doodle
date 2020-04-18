import React from 'react';
import moment from 'moment';
import Styled from 'styled-components';
import {Button} from "./FormComponents";
import {useHistory} from "react-router-dom";

const TH = Styled.th`
    padding: 10px;
    font-weight: bold;
    background-color: yellow;
`;

export function Calendar(props) {

    let history = useHistory();
    const [_dateObject, setDateObject] = React.useState(moment());
    const [bookingThisMonth, setBookingThisMonth] = React.useState([24, 25]);
    const [bookings, setBookings] = React.useState([]);

    React.useEffect(() => {

        props.bookings && props.bookings.map((booking) => {
            let start = moment(new Date(booking.startBookDate), "YYYY-MM-DD");
            let end = moment(new Date(booking.endBookDate), "YYYY-MM-DD");
            let d = moment.duration(end.diff(start)).asDays();
            setBookings([...bookings,
                {
                    date: start,
                    duration: d
                }
            ])
        });
    }, [props.bookings]);

    const setDateBookings = () => {
        setBookingThisMonth([]);
        bookings.map(booking => {
            if (booking.date.format('M') === _dateObject.format('M') && booking.date.format('YYYY') === _dateObject.format('YYYY')) {
                let arr = [];
                let day = booking.date.date();
                for (let i = 0; i < booking.duration; i++) {
                    console.log("day", day + i);
                    arr.push(day + i);
                }
                setBookingThisMonth([...bookingThisMonth, ...arr]);

            }

        });
    };

    React.useEffect(() => {
            console.log(_dateObject);
            setDateBookings();

        }, [_dateObject]
    );

    React.useEffect(() =>
        setDateBookings(), [bookings]);
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
            <td>{""}</td>
        );
    }

    let daysInMonth = [];
    for (let d = 1; d <= moment(_dateObject).daysInMonth(); d++) {

        daysInMonth.push(
            <td key={d} style={{backgroundColor: bookingThisMonth.includes(d) ? 'yellow' : ""}}>
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

    const monthPicker = () => {
        return <>
            <Button onClick={() => {
                const newDate = _dateObject.add(-1, 'M');
                // console.log("new Date", newDate);
                setDateObject(moment(newDate));

            }}>Back</Button>
            {_dateObject.format("MMMM")}
            <Button onClick={() => {
                const newDate = _dateObject.add(1, 'M');
                // console.log("new Date", newDate);
                setDateObject(moment(newDate));

            }}>Next</Button>
        </>
    };



    return <div>

        {monthPicker()}

        {weekdayshortname}
        {rows.map((d, i) => {
            return <tr>{d}</tr>;
        })}
    </div>
}
