import React from "react";
import './_main-component.scss';
import SideNav from "../SideNav";
import Product from "../Products";
const MainComponent = () =>{
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <SideNav/>
                </div>
                <div className="col-mg-10 col-md-10 col-sm-8">
                    <Product/>
                </div>
            </div>
            </div>
        </div>
    )
}
export default MainComponent