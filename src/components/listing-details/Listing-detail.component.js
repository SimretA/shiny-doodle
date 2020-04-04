import React from 'react';
import {Wrapper, Data, MiniWrapper} from "./List-detail.styled";
import {Button} from "../shared/FormComponents";
import {Fade} from "react-reveal";
import Map from "../shared/Location-picker.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMapPin, faMoneyBill, faPeopleCarry} from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ListDetail(props) {
    const show = props.showModal ? 'block' : 'none';
    return (

        <Wrapper style={{display: show, zIndex: 10}} onClick={props.closeModal}>
            <Fade right>
                <Button onClick={props.closeModal}> Close</Button>

                <MiniWrapper>
                    <Data><FontAwesomeIcon icon={faHome} style={{fontSize: 25, marginRight: 5}}/>{props.data.name}
                    </Data>
                </MiniWrapper>
                <MiniWrapper>
                    <Data><FontAwesomeIcon icon={faMapPin}
                                           style={{
                                               fontSize: 25,
                                               marginRight: 5
                                           }}/>{props.data.city}, {props.data.country}</Data>
                    <Data><FontAwesomeIcon icon={faMoneyBill}
                                           style={{fontSize: 25, marginRight: 5}}/>{props.data.price} ETB</Data>
                </MiniWrapper>
                <MiniWrapper>
                    <Data><FontAwesomeIcon icon={faHome}
                                           style={{fontSize: 25, marginRight: 5}}/>{props.data.houseType}</Data>
                    <Data><FontAwesomeIcon icon={faPeopleCarry}
                                           style={{fontSize: 25, marginRight: 5}}/>{props.data.personCapacity}</Data>
                </MiniWrapper>

                {/*<div style={{width:"50%", height:"50%"}}>*/}
                    {/*<Map/>*/}
                {/*</div>*/}
                <MiniWrapper>
                    <Calendar

                        value={new Date()}
                    />
                </MiniWrapper>
                <Button>Book</Button>
            </Fade>
        </Wrapper>

    )
}
