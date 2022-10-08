import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'
import Header from '../components/commons/Header'
import Item from '../components/Item/Item'
import { render, screen } from '@testing-library/react'

describe('Elements present test',()=>{
    test('testing snapshot', () => {
        let tree = create(<App />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
    
    test('renders header', () => {
        render(<Header />);
        const linkElement = screen.getByText(/Sales Tax Calculator/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Item', () => {
        render(<Item />);
        
        // title
        const linkElement = screen.getByText(/Item Details/i);
        expect(linkElement).toBeInTheDocument();

        // qty label
        const qtyLabel = screen.getByText(/Qty/i)
        expect(qtyLabel).toBeInTheDocument()
        
        
        // itemDesc label
        const itemDescLabel = screen.getByText(/Item Description/i)
        expect(itemDescLabel).toBeInTheDocument()
        
        //itemDesc input text
        const itemDescInput = screen.getByPlaceholderText('Description');
        expect(itemDescInput).toBeInTheDocument()
        
        // price label
        const priceLabel = screen.getByText(/Shelf Price/i)
        expect(priceLabel).toBeInTheDocument()

        //price input text
        const priceInput = screen.getByPlaceholderText('R$');
        expect(priceInput).toBeInTheDocument()

        //add btn
        const btnPlus = screen.getByRole('button', { name: '+' });
        expect(btnPlus).toBeInTheDocument()
        
        //genReceipt btn
        const btnGenReceipt = screen.getByRole('button', { name: 'Generate Receipt' });
        expect(btnGenReceipt).toBeInTheDocument()

    });
      
})