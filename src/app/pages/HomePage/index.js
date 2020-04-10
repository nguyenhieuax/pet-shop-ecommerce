import React, { Component } from 'react'

import './index.css'

import { icons } from '../../assets/icons'
import { images } from '../../assets/images'

import { connect } from 'react-redux'
import { selectors, actions } from './services'

class HomePage extends Component {


    componentDidMount() {
        this.props.getListProduct()
    }
    render() {
        const { listProduct } = this.props;
        console.log('####', listProduct)
        return (
            <div className='homepage'>
                <div className='navigator'>
                    <div className='topNavigator'>
                        <div className='containerLogo'>
                            <img src={images.logo2} alt='logo' id='logo' />
                            {/* ABC */}
                        </div>
                        <div className='containerInput'>
                            <input placeholder='Bạn muốn tìm gì?' id='searchBar' />
                        </div>
                    </div>
                    <div className='bottomNavigator'>
                        <div className='listMenu'>
                            <div className='itemMenu' >
                                <img src={icons.menuIcon} id='icon' alt='menuIcon' />
                                <div className='menuText'>
                                    Danh mục sản phẩm
                                </div>
                            </div>
                        </div>
                        <div className='containerRightMenu'>
                            <img src={icons.search} alt='search' id='icon' />
                            <img src={icons.heart} alt='heart' id='icon' />
                            <img src={icons.cart} alt='cart' id='icon' />
                            <img src={icons.user} alt='user' id='icon' />
                        </div>


                    </div>
                </div>
                <div className='middle'>
                    <div className='swipe'>
                        <img src={images.slider1} alt='slider1' id='slider1' />
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    listProduct: selectors.getListProduct(state)
})

const mapDispatchToProps = dispatch => ({
    getListProduct: () => dispatch(actions.getListProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
