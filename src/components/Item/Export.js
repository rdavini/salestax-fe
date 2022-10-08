import React from 'react'
import PropTypes from 'prop-types';

const Export = ({header, items, totalCost, totalTax, currency}) => {
    const downloadTxtFile = () => {
        let exp_data = []
        header.forEach((h)=> exp_data.push((h.title+" ")))
        exp_data.push("\n")
        items.forEach((it) => {
            header.forEach((index) =>{
                exp_data.push(it[index.prop]+ " ")
            })
            exp_data.push(" ("+currency+")")
            exp_data.push("\n")
        })

        exp_data.push("Total Tax ")
        exp_data.push(totalTax)
        exp_data.push(" ("+currency+")")
        exp_data.push("\n")
        exp_data.push("Total ")
        exp_data.push(totalCost)
        exp_data.push(" ("+currency+")")


        const element = document.createElement("a");
        const file = new Blob(exp_data, {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "salestax.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    
    return <button onClick={downloadTxtFile} className='btn btn-light' style={{display: 'block'}}>Download</button>
}

Export.propTypes = {
    header: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    totalTax: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default Export