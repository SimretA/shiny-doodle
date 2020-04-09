import React from 'react';
import {Wrapper, Data, InlineWrapper, Column} from "./List-detail.styled";
import {Button} from "../shared/FormComponents";
import {Fade} from "react-reveal";
import Map from "../shared/Location-picker.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMapPin, faMoneyBill, faPeopleCarry} from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Review from './../review-listing/review-listing';

export default function ListDetail(props) {
    const show = props.showModal ? 'flex' : 'none';
    let imageSrc = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
    if(props.data.images){
        if(props.data.images.length>0){
            imageSrc = props.data.images[0].url;
        }
    }
    console.log(props.data);
    return (

        <div style={{display: show, flexDirection:'column'}}>

            <Wrapper style={{display: show}} onClick={props.closeModal}>
                <Button style={{position:'absolute', top:"120px", right:"80px"}} onClick={props.closeModal}> Close</Button>

                <Column>
                    <InlineWrapper>
                        <img className="card-img-top"
                             src={imageSrc}
                             alt="Card image cap"
                             style={{width: 250, height: 250}}/>
                    </InlineWrapper>
                    <InlineWrapper>
                        <Data><FontAwesomeIcon icon={faHome} style={{fontSize: 25, marginRight: 5}}/></Data>
                        <Data>{props.data.name}, {props.data.houseType}
                        </Data>
                    </InlineWrapper>
                    <InlineWrapper>
                        <Data><FontAwesomeIcon icon={faMapPin}
                                               style={{
                                                   fontSize: 25,
                                                   marginRight: 5
                                               }}/></Data>
                        <Data>{props.data.city}, {props.data.country}
                        </Data>
                    </InlineWrapper>
                </Column>
                <Column>
                    <InlineWrapper>
                        <Data><FontAwesomeIcon icon={faMoneyBill}
                                               style={{fontSize: 25, marginRight: 5}}/></Data>
                        <Data>${props.data.price}
                        </Data>
                    </InlineWrapper>
                    <InlineWrapper>
                        <Data><FontAwesomeIcon icon={faPeopleCarry}
                                               style={{fontSize: 25, marginRight: 5}}/></Data>
                        <Data>{props.data.personCapacity}
                        </Data>
                    </InlineWrapper>
                    <InlineWrapper>
                        <Calendar

                            value={new Date()}
                        />
                    </InlineWrapper>
                    <Button>Book</Button>
                </Column>
            </Wrapper>
            <hr style={{width:"100%", color:"yellow"}}/>
            <Wrapper style={{display:show, flexDirection:'column', width:"70%", marginLeft:"13%"}}>
                {/*{props.data.reviews &&  props.data.reviews.length>0? "YOOO" : 'No Reviews Yet'}*/}
                <Review listingId={props.data.id}/>
            </Wrapper>
        </div>

    )
}
