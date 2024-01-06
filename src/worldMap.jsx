import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import './map.css'
import React from "react";
import { colorScale, countries, missingCountries } from "./countries";
function Map(){
    return(
        <div className="main" style={{background:"black"}}> 
        <VectorMap map={worldMill} className="mapi"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "blue",
            
          },
        }}
        series={{
            regions:[{
                scale:colorScale,
                values: countries,
                min:0,
                max:400
            }]
        }}
        onRegionTipShow={function regionalTip(event, label, code) {
            return label.html(`
                            <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                              <p>
                              <b>
                              ${label.html()}
                              </b>
                              </p>
                              <p>
                              ${countries[code]}
                              </p>
                              </div>`);
          }}
          onMarkerTipShow={function markerTip(event, label, code) {
            return label.html(`
                    <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                      <p style="color: black !important;">
                      <b>
                      ${label.html()}
                      </b>
                      </p>
                      </div>`);
          }} />
          <div className="range-met">
            <input type="range" className="range-val"  />
          </div>
       
       </div>
    )
}
export default Map