/**
 * Created by Dan_Shappir on 7/28/15.
 */
'use strict';

const React = require('react');

const RF = Object.create(Object.prototype, {
    NO_CHANGE: {
        value: <div>NO CHANGE</div>
    },
    create: {
        writable: true,
        value(render) {
            let result = RF.NO_CHANGE;
            let spec = {
                displayName: render.displayName,
                proprTypes: render.propTypes
            };
            if (render.defaultProps) {
                spec.getDefaultProps = function () {
                    return render.defaultProps;
                };
            }
            spec.render = function () {
                this.render = function () {
                    return result !== RF.NO_CHANGE ? result : null;
                };
                return render(this.props);
            };
            spec.shouldComponentUpdate = function (nextProps) {
                result = render(nextProps, this.props);
                return result !== RF.NO_CHANGE;
            };
            return React.createClass(spec);
        }
    }
});
export default RF;