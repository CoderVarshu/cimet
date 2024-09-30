/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */

import { useState } from "react"
import './style.scss';


const SwitchTab = ({data, onTabChange}) => {

    const [selectedTab, setSelectedTab] = useState(0)

    const activeTab = (tab, i) => {
        setSelectedTab(i)
         onTabChange(tab)
    }

  return (
    <div className="switchingTabs">
         <div className="tabItems">
            {data.map((tab, i)=>(
                <span key={i}
                onClick={()=> activeTab(tab, i)}
                className={`tabItem ${selectedTab === i ? 'active' : ''}`}
                >
                    {tab}
                </span>
            ))}
         </div>
        </div>
  )
}

export default SwitchTab