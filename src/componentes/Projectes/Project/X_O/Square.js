import React from 'react'

export default function Square({ i, j, char, click} ) {
    return (
        <div className={"squer"} onClick={()=> {!char && click(i,j)}}>
            <span className={"charp"}>
{char}
            </span>
        </div>
    )
}
