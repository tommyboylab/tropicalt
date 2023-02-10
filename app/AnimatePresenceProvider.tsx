'use client';
import { AnimatePresence } from "framer-motion";

const AnimatePresenceProvider = ({children}) => {

    return(
            <AnimatePresence>
                {children}
            </AnimatePresence>
    )
}

export default AnimatePresenceProvider