import React from "react"

export const MyCard = (props) => {

    //style={{width: '18rem'}} --> el estilo tiene que ir con dos {{}}, uno es para decir que es JS y el otro es del objeto que le pasamos con el CSS

    return (

        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card" >
                <img src={props.imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card Pepe</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}