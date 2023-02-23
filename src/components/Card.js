import React, { Component } from 'react';
import 'tachyons'


class Card extends Component {
    
    render() {
        const {name, email, identity} = this.props;
        return (
        <div className='bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-4'>
            <img alt='yea' src={`https://robohash.org/${identity}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    )
    }
}


export default Card;