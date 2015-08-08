/**
 * Created by Dan_Shappir on 7/28/15.
 */
require('core-js');
const React = require('react');

const RF = Object.create(Object.prototype, {
    NO_CHANGE: {
        value: <div>NO CHANGE</div>
    },
    create: {
        writable: true,
        value(render, spec = {}) {
            let result = RF.NO_CHANGE;
            spec = Object.assign({
                render() {
                    this.render = function () {
                        return result;
                    };
                    return render(this.props);
                },
                shouldComponentUpdate(nextProps) {
                    result = render(nextProps, this.props);
                    return result !== RF.NO_CHANGE;
                }
            }, spec);
            if (spec.defaultProps) {
                spec.getDefaultProps = () => defaultProps;
            }
            return React.createClass(spec);
        }
    }
});
export default RF;
