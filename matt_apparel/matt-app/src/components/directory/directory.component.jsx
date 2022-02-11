import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
         sections: [
        {
            title: 'hats',
            imageUrl: 'https://i5.walmartimages.com/asr/964cfed0-555f-4650-b9b7-b709788514ba.d97d716cf263b34c1408ebbc0cdb4206.jpeg',
            id: 1

        },
        {
            
            title: 'jackets',
            imageUrl: 'https://www.kjus.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-kjus-master-akeneo/default/dwc41b1901/images/MS15-K01_4131208_PF.png?sw=1200&sh=1200&sm=fit&sfrm=jpg',
            id: 2

        },
        {
            title: 'sneakers',
            imageUrl: 'https://www.highsnobiety.com/static-assets/thumbor/aftToQGpBMSn8gO0EseNrNQT4eQ=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2018/06/14122332/nike-react-element-87-sneakers-instagram-01.jpg',
            id: 3
        },
        {
            title: 'womens',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDEJhsb17BiUWV5peiXfPp1imewGdqM_3qUCb3S7RVnLWhTUECgx8oIPzqGWI_HNTVtE&usqp=CAU',
            size: 'large',
            id: 4
        },
        {
            title: 'mens',
            imageUrl: 'https://static-uc.olist.ng/upload/20200227/nggxwju9fcx.jpg',
            size: 'large',
            id: 5
        }
        ]

    };
}

    render () {
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map (({title, imageUrl, id, size}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size ={size} />
                ))}
           </div>
        );
    }
}

export default Directory;