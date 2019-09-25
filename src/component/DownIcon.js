import React, { Component } from "react";

const DownIcon = (props) =>{
    return(
        <div onClick={props.onClick} className="down" style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginBottom:"-34px",
            transform:"translateY(-45px)",
            position:"absolute",
            bottom:"0",
            left:'49%'
            
            }}>
            <img src={props.icon} />
          </div>
    )
}
export default DownIcon;
