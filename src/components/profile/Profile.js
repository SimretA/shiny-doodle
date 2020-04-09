import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import Avatar from 'react-avatar';
import {InlineWrapper, ProfileWrapper, Caption, Text, Wrapper, ListingsWrapper, CenterWrapper} from "./profile.styled";
import {useQuery} from "@apollo/react-hooks";
import {GET_USER_BY_ID} from "../../query/auth";
import Loading from "../shared/Loading.component";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EditProfile from "./Edit-profile.component";
import {Fade} from "react-reveal";
import {CardItem} from "../card-item/Card-item";

export default function Profile(props) {

    const [auth, setAuth] = useContext(AuthContext);
    const {data, loading, error} = useQuery(GET_USER_BY_ID, {variables: {id: auth.account.id}});
    const [editable, setEditable] = React.useState(false);


    if (loading) {
        return <Loading/>
    }
    if (error) {
        console.log(error);
    }
    if (data) {
        console.log(data);
        const {
            firstName,
            lastName,
            email,
            country,
            street,
            phone,
            language,
            joinedDate,
            listings
        } = data.user;

        return (
            <Wrapper>
                <ProfileWrapper>
                    {!editable?
                    <>
                        <FontAwesomeIcon icon={faEdit}
                                         style={{
                                             fontSize: 25,
                                             color: "gray",
                                             position: 'relative',
                                             top: '20px',
                                             right: '0px'
                                         }}
                                         onClick={() => setEditable(true)}
                        />

                        <CenterWrapper>
                            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} round={true}
                                    name={`${firstName} ${lastName}`}/>
                            <Text>{`${firstName} ${lastName}`}</Text>

                        </CenterWrapper>
                        <InlineWrapper>
                            <Caption> email </Caption>
                            <Text style={{textTransform: "none"}}>{email}</Text>
                        </InlineWrapper>
                        <InlineWrapper>
                            <Caption>Phone</Caption>
                            <Text>{phone}</Text>
                        </InlineWrapper>
                        <InlineWrapper>
                            <Caption>language</Caption>
                            <Text>{language}</Text>
                        </InlineWrapper>
                        <InlineWrapper>
                            <Caption>Joined in</Caption>
                            <Text>{new Date(joinedDate).getFullYear()}</Text>
                        </InlineWrapper>
                        <InlineWrapper>
                            <Text>{street}</Text>
                            <Text>{country}</Text>

                        </InlineWrapper>
                    </>:
                        <EditProfile user={data.user} closeEditable={()=>setEditable(false)}/>}

                </ProfileWrapper>
                <ListingsWrapper>
                    {listings.length===0?<h1>Add a Listing To Become a Host</h1>:<></>}
                    {listings.map(datum => <Fade left><CardItem  handleClick={()=>{}} key={datum.id} {...datum} /></Fade>)}

                </ListingsWrapper>
            </Wrapper>
        )
    }
};
