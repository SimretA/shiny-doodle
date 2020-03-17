import  React from 'react';

export function CardItem(props) {
    return(
        <div className={"col-sm-4 my-3"}>
            <div className="card p-3" style={{width: 300, backgroundColor:"transparent"}}>
                <img className="card-img-top" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap"
                     style={{width: 300, height:300 }} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some
                            of the card's content.</p>
                        <button value={"apple"} onClick={evt=>props.addToCart(evt)} href="#" className="btn btn-outline-info">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
}
