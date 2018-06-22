import React, { Component } from 'react';
import Page from '../Common/Page'
import ProductCard from "../ProductCard/FrontPageProductCard";
import Items from '../../Data/mockItem';
import Images from '../../Data/images';
import MyCarousel from '../CustomCarousel/MyCarousel';
import './MainPage.css';
import ItemService from '../../services/ItemService';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            images: []
        };
    }
    

    async componentWillMount() {
        const items = await ItemService.getPromotedItems();

        this.setState({
            data: items,
            images: Images,
        })
    }

    render() {
        return (
            <div>
                <Page>
                    <div style={{
                        marginBottom: '24px'
                    }}>
                        <MyCarousel images={this.state.images} />
                    </div>
                    <h3 className='header' >Featured Art</h3>
                    <div className='display-grid'>
                        {this.state.data.map((data, index) => <ProductCard {...data} key={index} />)}
                    </div>
                    <h3 className='header'>Best Seller</h3>
                    <div className='display-grid'>
                        {this.state.data.map((data, index) => <ProductCard {...data} key={index} />)}
                    </div>
                </Page>
            </div>
        );
    }
}

export default MainPage;