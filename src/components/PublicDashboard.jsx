import React from 'react'
import { Design } from './Design'
import { Protip } from './Protip'
import { Final } from './Final'
import { Trello } from './Trello'
import { Test } from './Test'
export function PublicDashboard() {
    return (
        <>
            <div className=" flex overflow-auto flex-row">
            <Design/>
            <Protip/>
            <Trello/>
            <Test/>
            <Final/>
            </div>
        </>
    )
}
