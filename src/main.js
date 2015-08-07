/**
 * Created by Dan_Shappir on 7/20/15.
 */
'use strict';

const React = require('react');

import RF from './rf';

const root = document.getElementById('root');

const Show = RF.create(({value = ''} = {}, {value: prevValue = ''} = {}) => <div>Now: {value}; Then: {prevValue}</div>);

setInterval(() => {
    React.render(<Show value={(new Date).toTimeString()}/>, root);
}, 1000);
