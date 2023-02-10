'use client';
import {AnimateSharedLayout} from "framer-motion";

const AnimateSharedLayoutProvider = ({children}) => {


    return (<AnimateSharedLayout type="crossfade">{children}</AnimateSharedLayout>)
}

export default AnimateSharedLayoutProvider