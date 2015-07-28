/**
 * Created by Dan_Shappir on 7/28/15.
 */
window.RF = (function () {
    'use strict';
    return Object.create(Object.prototype, {
        NO_CHANGE: {
            value: Symbol('NO_CHANGE')
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
}());
