import React from "react"

import { AntPage } from "..";

import { useContent } from '../../hooks/use-content';


/*
     TODO: Migrating the icon meta data into context
 */
export default function VoiceTone() {
    const contents = useContent()
    return (

        <AntPage>
            {/* slice(26, 27) 11 12 for time*/}
            {contents.slice(26, 27).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        {content.name}
                    </h2>
                    <p>
                        {/* <h2> {index + 1} </h2> */}
                        {content.description}
                    </p>
                </div>
            ))}

        </AntPage>

    )
}