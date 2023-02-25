import React from 'react'
import { Link } from "react-router-dom"
import { Nav } from './styles';
import Colors from "../../variables/Colors";
import Icon from '../Icon';

const Navigation = () => {
  const iconSize = 32
  const iconColor = Colors.white

  return (
    <Nav>
      <Link to="/"><Icon type="home" size={iconSize} color={iconColor} /></Link>
      <Link to="/contacts"><Icon type="contacts" size={iconSize} color={iconColor} /></Link>
      <Link to="/modal/add"><Icon type="add" size={52} color={Colors.green} /></Link>
      <Link to="/events"><Icon type="events" size={iconSize} color={iconColor} /></Link>
      <Link to="/presents"><Icon type="presents" size={iconSize} color={iconColor} /></Link>
    </Nav>
  )
}

export default Navigation