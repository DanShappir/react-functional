/**
 * Created by Dan_Shappir on 7/28/15.
 */
const React = require('react');

const RF = Object.create(Object.prototype, {
    NO_CHANGE: {
        value: <div>NO CHANGE</div>
    },
    create: {
        writable: true,
        value(render, spec = {}) {
            if (spec.defaultProps) {
                spec.getDefaultProps = () => defaultProps;
            }
            let result = RF.NO_CHANGE;
            spec.render = function () {
                this.render = function () {
                    return result;
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
