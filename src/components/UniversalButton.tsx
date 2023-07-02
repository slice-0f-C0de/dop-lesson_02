import React from "react";

type PropsType = {
    name: string
    callback: () => void
}

export const UniversalButton = (props: PropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}