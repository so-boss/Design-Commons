import React from "react"

import { AntPage } from "./../../../src/components/";

import { useContent } from './../../../src/hooks/use-content';


/*
     TODO: Migrating the icon meta data into context
 */
export default function Home() {
    const contents = useContent()
    return (
        <AntPage>
            <h1>Content page
            {contents.map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    {content.name}
                </div>
            ))}

            </h1>
        </AntPage>
    )
}