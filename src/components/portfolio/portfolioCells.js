import React, { Component } from 'react';
import { Cell } from 'react-mdl';
import { PortfolioCard } from './portfolioCard';
import SubmitPortfolioCard from './submitPortfolioCard'

export default class PortfolioCells extends Component {
    render(){
        return (
            <div>
                <Cell style={{align:"stretch"}} col={3}><SubmitPortfolioCard/></Cell>
                <Cell style={{align:"stretch"}} col={3}><SubmitPortfolioCard/></Cell>
                <Cell style={{align:"stretch"}} col={3}><SubmitPortfolioCard/></Cell>
            </div>
        )
    }
}
