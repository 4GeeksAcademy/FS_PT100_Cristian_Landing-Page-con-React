import React from "react"

export const MyCard = () => {

    //style={{width: '18rem'}} --> el estilo tiene que ir con dos {{}}, uno es para decir que es JS y el otro es del objeto que le pasamos con el CSS
    return (
            <div className="mycard col-12 col-sm-12 col-md-6 col-lg-3 mt-4" >
                <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mt-3">Titulo random</h5>
                    <p className="card-text mt-3">Texto random</p>
                    <a href="#" className="btn btn-primary mb-4">Go somewhere</a>
                </div>
            </div>
    )
}

