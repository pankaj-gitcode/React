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
    const [newItem, setNewItem ] = useState({
        name: '',
        value: 0
    })

    // Your code starts here
    const totalValue = useMemo(()=>{
        return items.reduce((total, item)=> 
        total + item.value, 0 )
    }, [items])

    //handle name
    const newName = (e)=>{
        setNewItem({...newItem, name:e.target.value})
    }
    //handle value
    const newValue = (e)=>{
        setNewItem({...newItem, value: parseInt(e.target.value, 10)})
    }
    //add items button
    const addItem = ()=>{
        setItems([...items,newItem]);
        //now empty newItem obj
        setNewItem({name:'', value:0});
    }
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
            {/* adding input boxes for name & value */}
            Name:<input type="text" placeholder="Enter item name" value={items.name} onChange={newName}/>
            Value:<input type="number" placeholder="Enter item price" value={items.value} onChange={newValue}/>

            <button onClick={addItem}>Add Item</button>

        </div>
    );
};