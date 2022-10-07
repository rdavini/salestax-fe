import React from 'react'

const Export = ({header,items, totalCost, totalTax}) => {
    const downloadTxtFile = () => {
        let exp_data = []
        
        header.forEach((h)=> exp_data.push((h.title+" ")))
        exp_data.push("\n")
        items.forEach((it) => {
            header.forEach((index) =>{
                exp_data.push(it[index.prop]+ " ")
            })
            exp_data.push("\n")
        })

        exp_data.push("Total Tax ")
        exp_data.push(totalTax)
        exp_data.push("\n")
        exp_data.push("Total ")
        exp_data.push(totalCost)


        const element = document.createElement("a");
        const file = new Blob(exp_data, {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "salestax.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    
    return <div>
            <button onClick={downloadTxtFile} className='btn btn-light'>Download</button>
          </div>
}
export default Export