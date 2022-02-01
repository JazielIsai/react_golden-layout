import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
    { // Create a input node  
        id: '1', 
        type: 'input', //Input node
        data: {
            label: "Input node"
        },
        position: { 
            x: 250, 
            y: 25
        }
    },
    //Create a default node
    { 
        id: '2', 
        type: "input",
        data: { 
            label: "Node Default"
        },
        position: { 
            x: 250, 
            y: 150
        }
    },
    {  
        id: '3',
        type: 'input',
        data: {    
            label: "output node"
        },
        position: { 
            x: 250, 
            y: 250
        }
        
    },
    //Elements edge 
    { 
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true
    },
    {
        id: 'e2-3',
        source: '2', //fuente
        target: '3', //objetivo
        animated: true
    },
    {
        id: 'e3-4',
        source: '1', //fuente
        target: '3', //Objetivo
    }
    /**/
];



const UseBasicFlow = ( ) => {



    return(
        <div style={{ height: 1000}}>
            <ReactFlow  elements = {elements}/>
        </div>
    );

}


export default UseBasicFlow;