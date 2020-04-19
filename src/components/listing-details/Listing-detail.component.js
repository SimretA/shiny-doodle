import React from 'react';
import {Wrapper, Data, InlineWrapper, Column, MapContainer, StickyColumn} from "./List-detail.styled";
import {Button} from "../shared/FormComponents";
import Map from "../shared/Location-picker.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMoneyBill} from '@fortawesome/free-solid-svg-icons'
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Calendar} from "../shared/Calendar.component";
import Review from './../review-listing/review-listing';
import AddBooking from './add-booking.component';
import 'react-calendar/dist/Calendar.css';


export default function ListDetail(props) {

    console.log(props);
    const show = props.showModal ? 'flex' : 'none';
    let imageSrc = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
    if (props.data.images) {
        if (props.data.images.length > 0) {
            imageSrc = props.data.images[0].url;
        }
    }
    return (
        <>
            <StickyColumn>
                {props.owner ?
                    props.data.bookings && props.data.bookings.length > 0 ?
                        <>This listing is already booked and can't be deleted</>
                        : <><Button style={{backgroundColor: "red", color: "white"}}>Delete Listing</Button></>
                    : <AddBooking listingId={props.data.id}/>}

            </StickyColumn>

            <div style={{display: show, flexDirection: 'column'}}>


                <Wrapper>

                    <Column>
                        <InlineWrapper>
                            <img
                                src={imageSrc}
                                alt="Card cap"
                                style={{width: 250, height: 250}}/>
                        </InlineWrapper>
                        <InlineWrapper>
                            <Data><FontAwesomeIcon icon={faHome} style={{fontSize: 25, marginRight: 5}}/></Data>
                            <Data>{props.data.name}, {props.data.houseType} - {props.data.city}, {props.data.country}
                            </Data>
                        </InlineWrapper>
                        <InlineWrapper>
                            <Data><FontAwesomeIcon icon={faMoneyBill}
                                                   style={{fontSize: 25, marginRight: 5}}/></Data>
                            <p>${props.data.price} with {props.data.personCapacity} people capacity
                            </p>
                        </InlineWrapper>
                        <InlineWrapper>
                            {/*<Calendar*/}

                                {/*activeStartDate={new Date()}*/}
                                {/*tileContent={({activeStartDate, date, view}) => view === 'month' && date.getDay() === 0 ?*/}
                                    {/*<p>Sunday!</p> : null*/}
                                {/*}*/}
                                 {/*value={[new Date(), new Date(2020, 3, 3)]}*/}
                            {/*/>*/}

                            <Calendar bookings={props.data.bookings}/>
                        </InlineWrapper>

                    </Column>
                    <MapContainer>
                        <Map loc={props.data.geolocations} width={"100%"} height={"100%"} handleMark={() => {
                        }}/>
                    </MapContainer>


                </Wrapper>
                <hr style={{width: "100%", color: "yellow"}}/>
                <Wrapper style={{flexDirection: 'column', width: "70%", marginLeft: "13%"}}>
                    <Review listingId={props.data.id}/>
                </Wrapper>
            </div>
        </>

    )
}
