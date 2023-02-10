'use client';
import {ReactNode} from "react";
import { AnimatePresence } from "framer-motion";

const Template = ({ children }: {
    children: ReactNode
}) =>  <AnimatePresence>{children}</AnimatePresence>

export default Template