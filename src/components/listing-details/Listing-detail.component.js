import React from 'react';
import {Wrapper, Data, InlineWrapper, Column, MapContainer, StickyColumn} from "./List-detail.styled";
import {Button} from "../shared/FormComponents";
import Map from "../shared/Location-picker.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome,
    faMoneyBill,
    faPersonBooth,
    faArrowCircleLeft,
    faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
import 'react-calendar/dist/Calendar.css';
import {Calendar} from "../shared/Calendar.component";
import Review from './../review-listing/review-listing';
import AddBooking from './add-booking.component';
import 'react-calendar/dist/Calendar.css';
import {Fade} from "react-reveal";
import {Tag} from "../shared/Tag";
import {InputContainer} from "../login/login.styled";


export default function ListDetail(props) {

    const {images} = props.data;
    const [next, setNext] = React.useState(false);
    const [back, setBack] = React.useState(false);
    const [index, setindex] = React.useState(0); //to get image url from a list
    const [imageSrc, setImageSrc] = React.useState("https://picsum.photos/id/870/200/300?grayscale&blur=2"); //default image incase theres a listing with no image
    const show = props.showModal ? 'flex' : 'none';


    React.useEffect(() => {
        setImageSrc("https://picsum.photos/id/870/200/300?grayscale&blur=2");
        setindex(0);
        if (images) {
            if (images.length > 0) {

                setImageSrc(props.data.images[index].url);
            }
            if (images.length > 1) {
                //more than one image means scrollable
                setNext(true);
                setBack(false);
            }
            else {
                //only one image is not scrollable
                setNext(false);
                setBack(false);
            }
        }

    }, [props]);

    React.useEffect(() => {
        if (images && images.length > index) {
            setImageSrc(images[index].url)
        }
    }, [index]);
    const goToNext = () => {
        if (index === images.length - 2) {
            setNext(false);
        }
        if (index < images.length) {
            setindex(index + 1);
            setBack(true);

        }

    };
    const goBack = () => {
        if (index === 1) {
            setBack(false);
        }
        if (index > 0) {
            setindex(index - 1);
            setNext(true);
        }


    };

    return (
        <>
            <StickyColumn>
                <AddBooking listingId={props.data.id} price={props.data.price}/>
            </StickyColumn>

            <div style={{display: show, flexDirection: 'column'}}>


                <Wrapper>

                    <Column>
                        <Fade right>
                            <InlineWrapper>
                                {back ? <FontAwesomeIcon icon={faArrowCircleLeft}
                                                         onClick={goBack}
                                                         style={{fontSize: 25, marginRight: 5}}/> : <></>}
                                <img
                                    src={imageSrc}
                                    alt="Card cap"
                                    style={{width: 250, height: 250}}/>
                                {next ?
                                    <FontAwesomeIcon icon={faArrowCircleRight}
                                                     onClick={goToNext}
                                                     style={{fontSize: 25, marginRight: 5}}/> : <></>}
                            </InlineWrapper>
                        </Fade>
                        <Fade right>
                            <InlineWrapper>
                                <Data><FontAwesomeIcon icon={faHome} style={{fontSize: 25, marginRight: 5}}/></Data>
                                <Data>{props.data.name}, {props.data.houseType} - {props.data.city}, {props.data.country}
                                </Data>
                                <small>{`Bedrooms: ${props.data.bedrooms}  Bathrooms: ${props.data.bathrooms}`}

                                </small>

                            </InlineWrapper>
                        </Fade>
                        <Fade right>

                            <InputContainer style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>
                                {props.data.anemitys && props.data.anemitys.map((anemity, i) => <Tag text={anemity.name}
                                                                                                     key={i} index={i}
                                />)}


                            </InputContainer>
                            <InlineWrapper>

                                <Data><FontAwesomeIcon icon={faPersonBooth}
                                                       style={{fontSize: 25, marginRight: 5}}/></Data>
                                <p>By: {props.data.user && props.data.user.firstName} {props.data.user && props.data.user.lastName}
                                </p>
                            </InlineWrapper>
                        </Fade>
                        <Fade right>
                            <InlineWrapper style={{marginBottom:"0px", paddingBottom:"0px"}}>
                                <Data><FontAwesomeIcon icon={faMoneyBill}
                                                       style={{fontSize: 25, marginRight: 5}}/></Data>
                                <p >${props.data.price} with {props.data.personCapacity} people capacity
                                </p>
                            </InlineWrapper>

                        </Fade>

                        <Fade right>
                            <InlineWrapper>


                                <Calendar bookings={props.data.bookings}/>
                            </InlineWrapper>
                        </Fade>

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
