import React from "react"

import { AntPage } from "./../../../src/components/";

import { useContent } from './../../../src/hooks/use-content';


/*
     TODO: Migrating the icon meta data into context
 */
function Time() {
    const contents = useContent()
    return <div>
        {
            contents.slice(24, 25).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        {content.name}
                    </h2>
                    <p>
                        {content.description}
                    </p>
                </div>
            ))
        }
    </div>;
}

function RangeofTime() {
    const contents = useContent()
    return <div>
        {
            contents.slice(22, 23).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        {content.name}
                    </h2>
                    <p>
                        {content.description}
                    </p>
                </div>
            ))
        }
    </div>;
}
/* Start of Date component*/
function Date() {
    const contents = useContent()
    return <div>
        {
            contents.slice(11, 12).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        {content.name}
                    </h2>
                    <p>
                        {content.description}
                    </p>
                </div>
            ))
        }
    </div>;
}
/* Days of week */
function DaysofWeek() {
    const contents = useContent()
    return <div>
        {
            contents.slice(12, 13).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        {content.name}
                    </h2>
                    <p>
                        {content.description}
                    </p>
                </div>
            ))
        }
    </div>;
}
/* end of days of week */
/* Start of Date component */

/* Punctuation */
function Punctuation() {
    const contents = useContent()
    return <div>
        {
            contents.map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        {content.name}
                    </h2>
                    <p>
                        {content.description}
                    </p>
                </div>
            ))
        }
    </div>;
}
/* end of days of week */

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
            <Time />
            <RangeofTime />
            <Date />
            <DaysofWeek />
            <Punctuation />
        </AntPage>

    )
}




