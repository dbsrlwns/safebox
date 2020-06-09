import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p style={{ marginTop: "3rem" }}> Safe Box  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
