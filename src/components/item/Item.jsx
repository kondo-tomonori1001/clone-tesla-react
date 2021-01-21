import React from 'react'
import './item.css'
import { Button } from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ModelS from '../../assets/images/Desktop-ModelS.jpeg'
import Model3 from '../../assets/images/Desktop-Model3.jpeg'
import ModelX from '../../assets/images/Desktop-ModelX.jpeg'
import ModelY from '../../assets/images/Desktop-ModelY.jpeg'
import SolarRoof from '../../assets/images/Desktop-ModelX.jpeg'
import SolarPanels from '../../assets/images/Desktop-SolarPanels.jpeg'

const ITEMS = [
  {
    title:"Solar and Powerwall",
    desc:"Power Everything",
    bgImage:ModelS,
    btnRight:true,
    btnLeftText:"sampleBtn",
    btnLeftLink:"/",
    btnRightText:"sampleBtn",
    btnRightLink:"/",
    firstSection:true
  },
  {
    title:"Solar and Powerwall",
    desc:"Power Everything",
    bgImage:Model3,
    btnRight:true,
    btnLeftText:"sampleBtn",
    btnLeftLink:"/",
    btnRightText:"sampleBtn",
    btnRightLink:"/",
    firstSection:true
  },
  {
    title:"Solar and Powerwall",
    desc:"Power Everything",
    bgImage:ModelX,
    btnRight:true,
    btnLeftText:"sampleBtn",
    btnLeftLink:"/",
    btnRightText:"sampleBtn",
    btnRightLink:"/",
    firstSection:true
  },
  {
    title:"Solar and Powerwall",
    desc:"Power Everything",
    bgImage:ModelY,
    btnRight:true,
    btnLeftText:"sampleBtn",
    btnLeftLink:"/",
    btnRightText:"sampleBtn",
    btnRightLink:"/",
    firstSection:true
  },
  {
    title:"Solar and Powerwall",
    desc:"Power Everything",
    bgImage:SolarRoof,
    btnRight:true,
    btnLeftText:"sampleBtn",
    btnLeftLink:"/",
    btnRightText:"sampleBtn",
    btnRightLink:"/",
    firstSection:true
  },
  {
    title:"Solar and Powerwall",
    desc:"Power Everything",
    bgImage:SolarPanels,
    btnRight:true,
    btnLeftText:"sampleBtn",
    btnRightText:"sampleBtn",
    firstSection:false
  },
]


export function Items(){
  return (
    <div className="items">
      {ITEMS.map(item => (
        <div className ="item" style={{
          backgroundImage:`url(${item.bgImage})`
        }}>
          <div className="item__container">
            <div className="item__text">
              <p>{ item.title }</p>
              <div className="item__textDesc">
                <p>{ item.desc }</p>
              </div>
            </div>
            <div className="item__lower">
              <div className="item__buttons">
                <Button type={"left"} text={item.btnLeftText} link={item.btnLeftLink} />
                {item.btnRight && (
                  <Button type={"right"} text={item.btnRightText} link={item.btnRightLink} />
                )}
              </div>
              {(item.firstSection === true) && (
                <div className="item__expand">
                  <ExpandMoreIcon />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
