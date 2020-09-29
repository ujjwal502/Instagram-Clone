import React from 'react'
import {Container,Logo,ActionButton} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
 import logo from '../../../assets/logo2.png'

const Header =()=>{
    return(
        <Container>
            <ActionButton>
            <Icon name="camera" size={26}/>
            </ActionButton>
            <Logo source={logo}/>
            <ActionButton>
              <Icon name="paper-plane" size={26}/>
            </ActionButton>
          
         
        </Container>
    )
}
export default Header