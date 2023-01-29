import { useState } from "react";

export const Counter = (initialValue = 1) => {
    const [counterItem, setCounterItem] = useState(initialValue);

    const Increment = () => {
        setCounterItem(counterItem + 1);
    }

    const Decrease = () => {
        if(counterItem < 2)
            setCounterItem(1)

        else
            setCounterItem(counterItem - 1);
    }


    return { counterItem, Increment, Decrease };

}