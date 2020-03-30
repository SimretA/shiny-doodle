import  React from 'react';

export function CardItem(props) {
    const value = props.id;
    console.log(props);
    return(
        <div className={"col-sm-4 my-3"} onClick={()=>{props.handleClick(props)}}>
            <div className="card p-3" style={{width: 300, backgroundColor:"transparent"}}>
                <img className="card-img-top" src={props.images||"https://picsum.photos/seed/picsum/200/300"} alt="Card image cap"
                     style={{width: 250, height:250 }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.city}</p>
                        <button value={value} onClick={evt=>props.book(evt.target.value)} href="#" className="btn btn-outline-info">{props.price}</button>
                    </div>
            </div>
        </div>
    );
}
