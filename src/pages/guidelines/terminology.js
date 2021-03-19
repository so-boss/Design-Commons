import React from "react"

import { AntPage } from "./../../../src/components/";

import { useContent } from './../../../src/hooks/use-content';


/*
     TODO: Migrating the icon meta data into context
 */
export default function Home() {
    const Terminology = useContent()
    return (
        <AntPage>
            <h1>
                Terminology Screen
            
            </h1>
        </AntPage>
    )
}