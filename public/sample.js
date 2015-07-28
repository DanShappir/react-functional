/**
 * Created by Dan_Shappir on 7/20/15.
 */
(function () {
    'use strict';

    const root = document.getElementById('root');

    const Show = RF.create(({value = ''}, {value: prevValue = ''} = {}) => <div>Now: {value}; Then: {prevValue}</div>);

    setInterval(() => {
        React.render(<Show value={(new Date()).toTimeString()}/>, root);
    }, 1000);
}());
