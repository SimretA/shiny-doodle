import React, {useContext} from 'react';
import Styled from 'styled-components';
import Avatar from "react-avatar";
import {faArrowRight, faArrowLeft, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AuthContext} from "../../context/AuthContext";
import {useMutation} from "@apollo/react-hooks";
import {DELETE_REVIEW, UPDATE_REVIEW} from "../../query/review";
import {Button, TextInput} from "../shared/FormComponents";
import {logout} from "../../control/auth";
import {useHistory} from "react-router-dom";
import {Fade} from "react-reveal";


const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding:10px;
    justify-content: center;
    text-align:justify;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    
`;

const InlineWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap:wrap;
    
`;

const Menu = Styled.div`
    display; flex;
    flex-direction: row;

`;

export default function ReviewStrip(props) {

    const [auth, setAuth] = useContext(AuthContext);

    const {firstName, lastName, id} = props.data.user;
    const [expand, setExpand] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [content, setContent] = React.useState(props.data.content);

    const history = useHistory();
    const [deleteReview, deletedReview] = useMutation(DELETE_REVIEW);
    const [updateReview, updatedReview] = useMutation(UPDATE_REVIEW);

    const handleDelete = () => {
        deleteReview(
            {
                variables: {
                    id: props.data.id
                }
            }
        ).catch(e => {
                if (e.message == "GraphQL error: Unauthenticated!!") {
                    logout(history);
                }
            }
        );


    };


    const handleUpdate = () => {
        if (content.trim() != "") {
            updateReview(
                {
                    variables: {
                        updateReviewInput: {
                            id: props.data.id,
                            content: content
                        }
                    }
                }
            ).then(data =>
                setEdit(false)
            ).catch(e => {
                    if (e.message == "GraphQL error: Unauthenticated!!") {
                        logout(history);
                    }
                }
            )
        }

    };

    if (updatedReview) {
        // console.log("updated Review", updatedReview);
        props.refetch();
    }
    if (deletedReview) {
        props.refetch();
    }

    return <Wrapper>

        <InlineWrapper>

            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} round={true}
                    name={`${firstName} ${lastName}`} size="30"/>
            <p style={{paddingLeft: "15"}}>{firstName} {lastName}</p>
            {auth.account.id == id ?
                <Menu>{expand ? <>
                        <Fade left>
                            <FontAwesomeIcon icon={faEdit} style={{
                                fontSize: 16,
                                paddingRight: "5",
                                paddingLeft: "5",
                                color: "yellow",
                                marginRight: 5
                            }} onClick={() => setEdit(true)}/></Fade>
                        <Fade left>
                            <FontAwesomeIcon icon={faTrash}
                                             style={{fontSize: 16, paddingRight: "5", color: "red", marginRight: 5}}
                                             onClick={() => handleDelete()}/></Fade>
                        <Fade left>
                            <FontAwesomeIcon icon={faArrowLeft}
                                             style={{fontSize: 16, color: "gray", paddingRight: "5", marginRight: 5}}
                                             onClick={() => setExpand(false)}/></Fade>
                    </>
                    : <Fade right><FontAwesomeIcon icon={faArrowRight}
                                                   style={{
                                                       fontSize: 16,
                                                       color: "gray",
                                                       paddingRight: "5",
                                                       marginRight: 5
                                                   }}
                                                   onClick={() => setExpand(true)}/></Fade>}</Menu>

                : <></>}
        </InlineWrapper>
        {edit ? <>
                <TextInput value={content} onChange={event => setContent(event.target.value)}/>
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                    <Button onClick={() => setEdit(false)}
                            style={{backgroundColor: "gray", width: "100px", color: "white"}}>Cancel</Button>
                    <Button onClick={handleUpdate} style={{backgroundColor: "yellow", width: "100px"}}>Edit</Button>
                </div>
            </>
            : <p style={{margin: 0}}>{content} </p>}

        <p>
            <small>{new Date(props.data.lastUpdatedAt).toDateString()}
                <small>{props.data.lastUpdatedAt != props.data.createdAt ? "(edited)" : ""}</small>
            </small>
        </p>


    </Wrapper>;
}
