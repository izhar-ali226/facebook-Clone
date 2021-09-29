import React from 'react'
import SidebarRow from './SidebarRow'
import "./sidebar.css"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './Stateprovider'

function Sidebar() {
    const [{user}, dispatch]=useStateValue();
    return (
        <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />

        <SidebarRow
        Icon= {LocalHospitalIcon} 
        title="COVID-19 information center"/>
        <SidebarRow
        Icon= {EmojiFlagsIcon} 
        title="pages"/>
        <SidebarRow
        Icon= {PeopleIcon} 
        title="Friends"/>
        <SidebarRow
        Icon= {ChatIcon} 
        title="Messenger"/>
        <SidebarRow
        Icon= {StorefrontIcon} 
        title="Market place"/>
        <SidebarRow
        Icon= {VideoLibraryIcon} 
        title="Videos"/>
        <SidebarRow
        Icon= {ExpandMoreIcon} 
        title="More"/>
            
            
        </div>
    )
}

export default Sidebar;
