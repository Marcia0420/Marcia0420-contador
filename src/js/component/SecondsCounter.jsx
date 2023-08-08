import React from "react"

// import "bootstrap"

const SecondsConter = ({ segundos, siguiente, siguiente1, siguiente2, siguiente3, siguiente4 }) => {
    const syles = { color: "#000" }
    return (
        <div>
            <div class="container text-center">
                <div class="row bg-dark px-5 py-2">
                    <div class="col text-white px-2 py-4 border border-white border-1 rounded-2">

                        {siguiente4}
                    </div>
                    <div class="col text-white px-2 py-4 border border-white border-1 rounded-2">
                    {siguiente3}
                </div>
                <div class="col text-white px-2 py-4 border border-white border-1 rounded-2">
                    {siguiente2}
                </div>
                <div class="col text-white px-2 py-4 border border-white border-1 rounded-2">
                    {siguiente1}
                </div>
                <div class="col text-white px-2 py-4 border border-white border-1 rounded-2">
                    {siguiente}
                </div>
                <div class="col text-white px-2 py-4 border border-white border-1 rounded-2">
                    {segundos}

                    {/* <i class="fa-thin fa-bell"></i> */}
                </div>
            </div>
        </div>

            {/* </div><div class="card bg-custom-1" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Título de la tarjeta</h5>
                    </div> */}
    {/* <h1 className="text-center mt-5"> </h1>
            <h1 className="text-center mt-5"> </h1>
            <h1 className="text-center mt-5"> {siguiente1}</h1>
            <h1 className="text-center mt-5"> {siguiente2}</h1>
            <h1 className="text-center mt-5"> {siguiente3}</h1>
            <h1 className="text-center mt-5"> {siguiente4}</h1> */}

        </div >

        // function Card(props){
        //     return (
        //         <div className="card">
        //             <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
        //                 <a href="#" className="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
    );
}



//font-face{
//     font-family:'digital-font';
//     src: url('../fonts/digital-7-mono.ttf');
//    }
//    .segundos + siguiente1 {
//        width: 100px;
//        height: 120px;
//        background-color: rgb(219, 219, 219);
//        color: blue;
//        font-family: 'digital-font';
//        box-shadow: 0 0 10px blue;
//    }
//    .fondo {
//        background-color: rgb(219, 219, 219);

export default SecondsConter