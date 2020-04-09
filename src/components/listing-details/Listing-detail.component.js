import React from 'react';
import {Wrapper, Data, InlineWrapper, Column, MapContainer, StickyColumn} from "./List-detail.styled";
import {Button, Label, TextInput} from "../shared/FormComponents";
import {Fade} from "react-reveal";
import Map from "../shared/Location-picker.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCalendar, faMoneyBill, faPeopleCarry} from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Review from './../review-listing/review-listing';

export default function ListDetail(props) {
    const show = props.showModal ? 'flex' : 'none';
    let imageSrc = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
    if (props.data.images) {
        if (props.data.images.length > 0) {
            imageSrc = props.data.images[0].url;
        }
    }
    console.log(props.data);
    return (

        <div style={{display: show, flexDirection: 'column'}}>



            <Wrapper style={{display: show}}>

                <Column>
                    <InlineWrapper>
                        <img
                            src={imageSrc}
                            alt="Card image cap"
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
                        <Calendar

                            value={new Date()}
                        />
                    </InlineWrapper>

                </Column>
                <MapContainer>

                    {/*<InlineWrapper style={{flexWrap: 'wrap'}}>*/}
                        {/*/!*<Map loc={props.data.geolocations} handleMark={()=>{}}/>*!/*/}
                    {/*</InlineWrapper>*/}
                    <Map loc={props.data.geolocations} handleMark={()=>{}}/>


                </MapContainer>
                <StickyColumn>
                    <InlineWrapper>
                        <Data><FontAwesomeIcon icon={faCalendar}
                                               style={{fontSize: 25, marginRight: 5}}/></Data>

                        <TextInput type={"date"}/>
                    </InlineWrapper>
                    <InlineWrapper>
                        <TextInput type={"date"}/>

                        <Button>Book</Button>
                    </InlineWrapper>
                    <Button
                            onClick={props.closeModal}> Cancel </Button>
                </StickyColumn>
            </Wrapper>
            <hr style={{width: "100%", color: "yellow"}}/>
            <Wrapper style={{display: show, flexDirection: 'column', width: "70%", marginLeft: "13%"}}>
                {/*{props.data.reviews &&  props.data.reviews.length>0? "YOOO" : 'No Reviews Yet'}*/}
                <Review listingId={props.data.id}/>
            </Wrapper>
        </div>

    )
}
