import {Layout, Model, TabNode, IJsonModel} from 'flexlayout-react';
import UseBasicFlow from './useBasicaReactFlow';
import './App.css';
import 'flexlayout-react/style/light.css';
 
let json = {
  global: {tabEnableClose:false},
  borders:[
      {
        "type": "border",
        "location":"bottom",
        "size": 100,
        "children": [
            {
            "type": "tab",
            "name": "Terminal",
            "component": "text"
            }
          ]
      },
      {
        "type": "border",
        "location":"left",
        "size": 300,
        "children": [
          {
            "type":"tab",
            "name": "Sidebar Left",
            "component": "text"
          }
        ]
      },
      {
        "type":"border",
        "location": "right",
        "size": 300,
        "children": [
          {
            "type":"tab",
            "name": "Sidebar Right",
            "component": "text"
          }
        ]
      }
    
  ],
  layout: {
      "type": "row",
      "weight": 100,
      "children": [
          {
              "type": "tabset",
              "weight": 50,
              "selected": 0,
              "children": [
                  {
                      "type": "tab",
                      "name": "WorkFlow",
                      "component": "UseBasicFlow"
                  }
              ]
          },
          // {
          //     "type": "tabset",
          //     "weight": 50,
          //     "selected": 0,
          //     "children": [
          //         {
          //             "type": "tab",
          //             "name": "Two",
          //             "component": "text"
          //         },
          //         {
          //             "type": "tab",
          //             "name": "Three",
          //             "component": "text"
          //         }
          //     ]
          // }
      ]
  }
};

//var json = IJsonModel;

const model = Model.fromJson(json);

function App() {

  const factory = (node, TabNode) => {
    console.log(node)
    var component = node.getComponent();
    if (component === "button") {
      return <button> { node.getName() } </button>;
    }
    else if (component === "UseBasicFlow") {
        return <UseBasicFlow />
    }
    else if( component === ""){

    }
  }

  return (
    <>
        {/* <UseBasicFlow/> */}
      <Layout
        model={model}
        factory={factory} 
      />
    
    </>
  );
}

export default App;