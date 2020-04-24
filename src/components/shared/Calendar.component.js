import React from 'react';
import moment from 'moment';
import Styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

const TH = Styled.th`
    padding: 10px;
    font-weight: bold;
    background-color: yellow;
`;

export function Calendar(props) {

    const [_dateObject, setDateObject] = React.useState(moment());
    const [bookingThisMonth, setBookingThisMonth] = React.useState([24, 25]);
    const [bookings, setBookings] = React.useState([]);

    //get bookings' dates and duration every time selected booking is changed
    //component reused in listing detail
    React.useEffect(() => {
        setBookings([]);
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


    //get each date to be marked when a month is changed on calendar.
    //save days to be marked in the month on bookingsThisMonth
    //called in a useEffect hook everytime the _dateObject(month) is changed
    const setDateBookings = () => {
        setBookingThisMonth([]);
        bookings.map(booking => {
            if (booking.date.format('M') === _dateObject.format('M') && booking.date.format('YYYY') === _dateObject.format('YYYY')) {
                let arr = [];
                let day = booking.date.date();
                for (let i = 0; i <= booking.duration; i++) {
                    // console.log("Booking at", day +i);
                    arr.push(day + i);
                }
                setBookingThisMonth([...bookingThisMonth, ...arr]);

            }

        });
    };

    React.useEffect(() => {

            setDateBookings();

        }, [_dateObject]
    );

    React.useEffect(() =>
        setDateBookings(), [bookings]);


    //get on which day of the week the selected month begins
    const firstDayOfMonth = () => {
        let dateObject = _dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d");
        return firstDay;
    };

    //blanks before the day of the week on which the month begins
    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <td>{""}</td>
        );
    }


    //days to be printed on current month
    let daysInMonth = [];
    for (let d = 1; d <= moment(_dateObject).daysInMonth(); d++) {

        daysInMonth.push(
            <td key={d} style={{
                backgroundColor: bookingThisMonth.includes(d) ? '#6d6d6d' : "",
                color: bookingThisMonth.includes(d) ? '#ffffff' : ""
            }}>
                {d}
            </td>
        );
    }


    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];


    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });


    //get abbreviated days
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
            <FontAwesomeIcon icon={faArrowAltCircleLeft}
                             style={{fontSize: 25, marginRight: 5, color: "yellow"}}
                             onClick={() => {
                                 const newDate = _dateObject.add(-1, 'M');
                                 // console.log("new Date", newDate);
                                 setDateObject(moment(newDate));

                             }}
            />

            {_dateObject.format("MMMM")}
            <FontAwesomeIcon icon={faArrowAltCircleRight}
                             style={{fontSize: 25, marginRight: 5, color: "yellow"}}
                             onClick={() => {
                                 const newDate = _dateObject.add(1, 'M');
                                 // console.log("new Date", newDate);
                                 setDateObject(moment(newDate));

                             }}
            />
        </>
    };


    return <div>


        {monthPicker()}
        <br/>
        <small style={{margin: 0, padding: 0}}>(Availability)</small>

        {weekdayshortname}
        {rows.map((d, i) => {
            return <tr>{d}</tr>;
        })}
    </div>
}
