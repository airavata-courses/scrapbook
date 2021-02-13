/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Returns the type from an action instance/class.
 * @ignore
 * @param {?} action
 * @return {?}
 */
export function getActionTypeFromInstance(action) {
    if (action.constructor && action.constructor.type) {
        return action.constructor.type;
    }
    else {
        return action.type;
    }
}
/**
 * Matches a action
 * @ignore
 * @param {?} action1
 * @return {?}
 */
export function actionMatcher(action1) {
    /** @type {?} */
    var type1 = getActionTypeFromInstance(action1);
    return (/**
     * @param {?} action2
     * @return {?}
     */
    function (action2) {
        return type1 === getActionTypeFromInstance(action2);
    });
}
/**
 * Set a deeply nested value. Example:
 *
 *   setValue({ foo: { bar: { eat: false } } },
 *      'foo.bar.eat', true) //=> { foo: { bar: { eat: true } } }
 *
 * While it traverses it also creates new objects from top down.
 *
 * @ignore
 * @type {?}
 */
export var setValue = (/**
 * @param {?} obj
 * @param {?} prop
 * @param {?} val
 * @return {?}
 */
function (obj, prop, val) {
    obj = tslib_1.__assign({}, obj);
    /** @type {?} */
    var split = prop.split('.');
    /** @type {?} */
    var lastIndex = split.length - 1;
    split.reduce((/**
     * @param {?} acc
     * @param {?} part
     * @param {?} index
     * @return {?}
     */
    function (acc, part, index) {
        if (index === lastIndex) {
            acc[part] = val;
        }
        else {
            acc[part] = Array.isArray(acc[part]) ? acc[part].slice() : tslib_1.__assign({}, acc[part]);
        }
        return acc && acc[part];
    }), obj);
    return obj;
});
/**
 * Get a deeply nested value. Example:
 *
 *    getValue({ foo: bar: [] }, 'foo.bar') //=> []
 *
 * @ignore
 * @type {?}
 */
export var getValue = (/**
 * @param {?} obj
 * @param {?} prop
 * @return {?}
 */
function (obj, prop) {
    return prop.split('.').reduce((/**
     * @param {?} acc
     * @param {?} part
     * @return {?}
     */
    function (acc, part) { return acc && acc[part]; }), obj);
});
/**
 * Simple object check.
 *
 *    isObject({a:1}) //=> true
 *    isObject(1) //=> false
 *
 * @ignore
 * @type {?}
 */
export var isObject = (/**
 * @param {?} item
 * @return {?}
 */
function (item) {
    return item && typeof item === 'object' && !Array.isArray(item);
});
/**
 * Deep merge two objects.
 *
 *    mergeDeep({a:1, b:{x: 1, y:2}}, {b:{x: 3}, c:4}) //=> {a:1, b:{x:3, y:2}, c:4}
 *
 * \@param base base object onto which `sources` will be applied
 * @type {?}
 */
export var mergeDeep = (/**
 * @param {?} base
 * @param {...?} sources
 * @return {?}
 */
function (base) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var _a, _b;
    if (!sources.length)
        return base;
    /** @type {?} */
    var source = sources.shift();
    if (isObject(base) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!base[key])
                    Object.assign(base, (_a = {}, _a[key] = {}, _a));
                mergeDeep(base[key], source[key]);
            }
            else {
                Object.assign(base, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, tslib_1.__spread([base], sources));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4cy9zdG9yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxNQUFXO0lBQ25ELElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtRQUNqRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ2hDO1NBQU07UUFDTCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDcEI7QUFDSCxDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUFZOztRQUNsQyxLQUFLLEdBQUcseUJBQXlCLENBQUMsT0FBTyxDQUFDO0lBRWhEOzs7O0lBQU8sVUFBUyxPQUFZO1FBQzFCLE9BQU8sS0FBSyxLQUFLLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7OztBQVlELE1BQU0sS0FBTyxRQUFROzs7Ozs7QUFBRyxVQUFDLEdBQVEsRUFBRSxJQUFZLEVBQUUsR0FBUTtJQUN2RCxHQUFHLHdCQUFRLEdBQUcsQ0FBRSxDQUFDOztRQUVYLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7UUFDdkIsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUVsQyxLQUFLLENBQUMsTUFBTTs7Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDNUIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxzQkFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztTQUM3RTtRQUVELE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFFUixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQTs7Ozs7Ozs7O0FBU0QsTUFBTSxLQUFPLFFBQVE7Ozs7O0FBQUcsVUFBQyxHQUFRLEVBQUUsSUFBWTtJQUM3QyxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQVEsRUFBRSxJQUFZLElBQUssT0FBQSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFoQixDQUFnQixHQUFFLEdBQUcsQ0FBQztBQUF6RSxDQUF5RSxDQUFBOzs7Ozs7Ozs7O0FBVTNFLE1BQU0sS0FBTyxRQUFROzs7O0FBQUcsVUFBQyxJQUFTO0lBQ2hDLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFBOzs7Ozs7Ozs7QUFTRCxNQUFNLEtBQU8sU0FBUzs7Ozs7QUFBRyxVQUFDLElBQVM7SUFBRSxpQkFBaUI7U0FBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1FBQWpCLGdDQUFpQjs7O0lBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUFFLE9BQU8sSUFBSSxDQUFDOztRQUMzQixNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRTtJQUU5QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFJLEdBQUMsR0FBRyxJQUFHLEVBQUUsTUFBRyxDQUFDO2dCQUNuRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFJLEdBQUMsR0FBRyxJQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDO2FBQzdDO1NBQ0Y7S0FDRjtJQUVELE9BQU8sU0FBUyxpQ0FBQyxJQUFJLEdBQUssT0FBTyxHQUFFO0FBQ3JDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0eXBlIGZyb20gYW4gYWN0aW9uIGluc3RhbmNlL2NsYXNzLlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9uVHlwZUZyb21JbnN0YW5jZShhY3Rpb246IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgaWYgKGFjdGlvbi5jb25zdHJ1Y3RvciAmJiBhY3Rpb24uY29uc3RydWN0b3IudHlwZSkge1xyXG4gICAgcmV0dXJuIGFjdGlvbi5jb25zdHJ1Y3Rvci50eXBlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYWN0aW9uLnR5cGU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWF0Y2hlcyBhIGFjdGlvblxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uTWF0Y2hlcihhY3Rpb24xOiBhbnkpIHtcclxuICBjb25zdCB0eXBlMSA9IGdldEFjdGlvblR5cGVGcm9tSW5zdGFuY2UoYWN0aW9uMSk7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihhY3Rpb24yOiBhbnkpIHtcclxuICAgIHJldHVybiB0eXBlMSA9PT0gZ2V0QWN0aW9uVHlwZUZyb21JbnN0YW5jZShhY3Rpb24yKTtcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IGEgZGVlcGx5IG5lc3RlZCB2YWx1ZS4gRXhhbXBsZTpcclxuICpcclxuICogICBzZXRWYWx1ZSh7IGZvbzogeyBiYXI6IHsgZWF0OiBmYWxzZSB9IH0gfSxcclxuICogICAgICAnZm9vLmJhci5lYXQnLCB0cnVlKSAvLz0+IHsgZm9vOiB7IGJhcjogeyBlYXQ6IHRydWUgfSB9IH1cclxuICpcclxuICogV2hpbGUgaXQgdHJhdmVyc2VzIGl0IGFsc28gY3JlYXRlcyBuZXcgb2JqZWN0cyBmcm9tIHRvcCBkb3duLlxyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0VmFsdWUgPSAob2JqOiBhbnksIHByb3A6IHN0cmluZywgdmFsOiBhbnkpID0+IHtcclxuICBvYmogPSB7IC4uLm9iaiB9O1xyXG5cclxuICBjb25zdCBzcGxpdCA9IHByb3Auc3BsaXQoJy4nKTtcclxuICBjb25zdCBsYXN0SW5kZXggPSBzcGxpdC5sZW5ndGggLSAxO1xyXG5cclxuICBzcGxpdC5yZWR1Y2UoKGFjYywgcGFydCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gbGFzdEluZGV4KSB7XHJcbiAgICAgIGFjY1twYXJ0XSA9IHZhbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjY1twYXJ0XSA9IEFycmF5LmlzQXJyYXkoYWNjW3BhcnRdKSA/IGFjY1twYXJ0XS5zbGljZSgpIDogeyAuLi5hY2NbcGFydF0gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWNjICYmIGFjY1twYXJ0XTtcclxuICB9LCBvYmopO1xyXG5cclxuICByZXR1cm4gb2JqO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCBhIGRlZXBseSBuZXN0ZWQgdmFsdWUuIEV4YW1wbGU6XHJcbiAqXHJcbiAqICAgIGdldFZhbHVlKHsgZm9vOiBiYXI6IFtdIH0sICdmb28uYmFyJykgLy89PiBbXVxyXG4gKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VmFsdWUgPSAob2JqOiBhbnksIHByb3A6IHN0cmluZyk6IGFueSA9PlxyXG4gIHByb3Auc3BsaXQoJy4nKS5yZWR1Y2UoKGFjYzogYW55LCBwYXJ0OiBzdHJpbmcpID0+IGFjYyAmJiBhY2NbcGFydF0sIG9iaik7XHJcblxyXG4vKipcclxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cclxuICpcclxuICogICAgaXNPYmplY3Qoe2E6MX0pIC8vPT4gdHJ1ZVxyXG4gKiAgICBpc09iamVjdCgxKSAvLz0+IGZhbHNlXHJcbiAqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IChpdGVtOiBhbnkpID0+IHtcclxuICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cclxuICpcclxuICogICAgbWVyZ2VEZWVwKHthOjEsIGI6e3g6IDEsIHk6Mn19LCB7Yjp7eDogM30sIGM6NH0pIC8vPT4ge2E6MSwgYjp7eDozLCB5OjJ9LCBjOjR9XHJcbiAqXHJcbiAqIEBwYXJhbSBiYXNlIGJhc2Ugb2JqZWN0IG9udG8gd2hpY2ggYHNvdXJjZXNgIHdpbGwgYmUgYXBwbGllZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9IChiYXNlOiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55ID0+IHtcclxuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gYmFzZTtcclxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XHJcblxyXG4gIGlmIChpc09iamVjdChiYXNlKSAmJiBpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIGlmICghYmFzZVtrZXldKSBPYmplY3QuYXNzaWduKGJhc2UsIHsgW2tleV06IHt9IH0pO1xyXG4gICAgICAgIG1lcmdlRGVlcChiYXNlW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGJhc2UsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVyZ2VEZWVwKGJhc2UsIC4uLnNvdXJjZXMpO1xyXG59O1xyXG4iXX0=