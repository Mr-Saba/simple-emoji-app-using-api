import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import  emojies  from "../emojies.json";

function List(props) {
    let copied = false

    const handleCopy = () => {
        copied = true
      }
      
    return ( 
        emojies.map(item => {
            return (   
               <CopyToClipboard text={item.symbol} onCopy={() => handleCopy()}>
                    <div className="ListItem">{item.symbol}{item.title}<div id="Copy">click to copy!</div></div> 
               </CopyToClipboard>
              )}
            )
    )
}

export default List
