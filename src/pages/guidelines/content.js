import React from "react"

import { AntPage } from "./../../../src/components/";

import { useContent } from './../../../src/hooks/use-content';

import VoiceTone from "../../components/VoiceTone/voiceTone";
import Time from '../../components/Time/time'
/*
     TODO: Migrating the icon meta data into context
 */
export default function Home() {
    const contents = useContent()
    return (

        <AntPage>
            <VoiceTone />
            <Time />
        </AntPage >

    )
}