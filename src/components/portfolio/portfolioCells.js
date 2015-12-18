import React, { Component } from 'react';
import { Cell } from 'react-mdl';
import { PortfolioCard } from './portfolioCard';

export default class PortfolioCells extends Component {
    render(){
        return (
            <div>
                <Cell style={{align:"stretch"}} col={3}><PortfolioCard/></Cell>
                <Cell style={{align:"stretch"}} col={3}><PortfolioCard/></Cell>
                <Cell style={{align:"stretch"}} col={3}><PortfolioCard/></Cell>
            </div>
        )
    }
}
