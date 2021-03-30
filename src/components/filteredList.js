import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

function FilteredList(props) {
    let copied = false

    const handleCopy = () => {
        copied = true
      }
    return ( 
        props.filteredEmojies.map(item => {
            return (   
               <CopyToClipboard text={item.symbol} onCopy={() => handleCopy()}>
                    <div className="ListItem">{item.symbol}{item.title}<div id="Copy">click to copy!</div></div> 
               </CopyToClipboard>
              )}
            )
    )
}

export default FilteredList
