import React from "react"

import {AntPage, IconCategories} from "./../../../src/components/";

import { useAllIcons } from './../../../src/hooks/use-all-icons';
import './../../../src/css/custom.scss'

/*
     TODO: Migrating the icon meta data into context
 */
export default function Home() {
  const {meta} = useAllIcons();

  return (
    <AntPage>
      <IconCategories
        categories={meta.categories}
        maps={meta.maps}
      />
    </AntPage>
  )
}