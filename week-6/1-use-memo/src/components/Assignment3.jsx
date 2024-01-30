import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    //new items state variable
    const [newItems, setNewItems] = useState(
        {name: '', value: 0}
    )

    // handle name change
    const nameChange = (e)=>{
        setNewItems({...newItems, name: e.target.value})
    }
    // handle value change
    const valueChange = (e)=>{
        setNewItems({...newItems, value:parseInt(e.target.value, 10)})
    }
    //addItems to main object:items
    const addItems = ()=>{
        setItems([...items, newItems])
        setNewItems({name:'', value:0});
    }

    // Your code starts here
    const totalValue = useMemo(()=>{
        let totalSum = 0;
        //items = {v: 10, v: 20, v:30}
        for(let i=0; i<items.length; i++){
            totalSum +=  items[i].value;
        }
        return totalSum;
    }, [items]);
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>

            name: <input type="text" value={newItems.name} onChange={nameChange} />
            value: <input type="number" value={newItems.value} onChange={valueChange} />
            <button onClick={addItems}>Add items</button>

            {console.log(items)}
        </div>
    );
};
