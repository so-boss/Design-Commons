import React from "react"

import { AntPage } from "./../../../src/components/";

import { useContent } from './../../../src/hooks/use-content';


/*
     TODO: Migrating the icon meta data into context
 */
function Time() {
    const contents = useContent()
    return <div>
        {//31 time, 28 range of time

            contents.slice(31, 32).map((content, index) => (
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
            contents.slice(28, 29).map((content, index) => (
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
            contents.slice(13, 15).map((content, index) => (
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
    </div>
}

/* Start of Date component */

/* Punctuation */
function Ampersand() {
    const contents = useContent()
    return <div>
        {
            contents.slice(3, 4).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <h2>
                        Punctuation
                        </h2>
                    <ul>
                        <li type="circle">
                            <b>{content.name}</b>: {content.description}
                        </li>
                    </ul>

                </div>
            ))
        }
    </div>
}

function Colon() {
    const contents = useContent()
    return <div>
        {/* 9, 11)17 20*/
            contents.slice(9, 11).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <ul>
                        <li type="circle">
                            <b>{content.name}</b>: {content.description}
                        </li>
                    </ul>

                </div>
            ))
        }
    </div>
}
function Dashes() {
    const contents = useContent()
    return <div>
        {/* 9, 11)16 20  --24 hypen 29-30 slash */
            contents.slice(16, 20).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <ul>
                        <li type="circle">
                            <b>{content.name}</b>: {content.description}
                        </li>
                    </ul>

                </div>
            ))
        }
    </div>
}
function Hyphen() {
    const contents = useContent()
    return <div>
        {/* 9, 11)16 20  --24 hypen 29-30 slash */
            contents.slice(23, 24).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <ul>
                        <li type="circle">
                            <b>{content.name}</b>: {content.description}
                        </li>
                    </ul>

                </div>
            ))
        }
    </div>
}

function Slash() {
    const contents = useContent()
    return <div>
        {/* 9, 11)16 20  --24 hypen 29-30 slash */
            contents.slice(29, 30).map((content, index) => (
                <div
                    key={index}
                    figma_id={content.figma_id}
                >
                    <ul>
                        <li type="circle">
                            <b>{content.name}</b>: {content.description}
                        </li>
                    </ul>

                </div>
            ))
        }
    </div>
}
/* end of punctuation */

export default function VoiceTone() {
    const contents = useContent()
    return (

        <AntPage>
            {/* slice(26, 27) 11 12 for time*/}
            {contents.slice(33, 34).map((content, index) => (
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
            ))}
            <Time />
            <RangeofTime />
            <Date />
            <Ampersand />
            <Colon />
            <Dashes />
            <Hyphen />
            <Slash />
        </AntPage>

    )
}




