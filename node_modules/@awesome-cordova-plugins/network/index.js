var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
export var Connection;
(function (Connection) {
    Connection["UNKNOWN"] = "unknown";
    Connection["ETHERNET"] = "ethernet";
    Connection["WIFI"] = "wifi";
    Connection["CELL_2G"] = "2g";
    Connection["CELL_3G"] = "3g";
    Connection["CELL_4G"] = "4g";
    Connection["CELL"] = "cellular";
    Connection["NONE"] = "none";
})(Connection || (Connection = {}));
var NetworkOriginal = /** @class */ (function (_super) {
    __extends(NetworkOriginal, _super);
    function NetworkOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    NetworkOriginal.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect().pipe(mapTo('connected')), _this.onDisconnect().pipe(mapTo('disconnected')));
            }
        })();
    };
    NetworkOriginal.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    NetworkOriginal.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(NetworkOriginal.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkOriginal.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    NetworkOriginal.pluginName = "Network";
    NetworkOriginal.plugin = "cordova-plugin-network-information";
    NetworkOriginal.pluginRef = "navigator.connection";
    NetworkOriginal.repo = "https://github.com/apache/cordova-plugin-network-information";
    NetworkOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return NetworkOriginal;
}(AwesomeCordovaNativePlugin));
var Network = new NetworkOriginal();
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxrR0FNTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl2QyxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLDJCQUFhLENBQUE7SUFDYiw0QkFBYyxDQUFBO0lBQ2QsNEJBQWMsQ0FBQTtJQUNkLDRCQUFjLENBQUE7SUFDZCwrQkFBaUIsQ0FBQTtJQUNqQiwyQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCOztJQW9ENEIsMkJBQTBCOzs7UUFDckQ7O1dBRUc7UUFDSCxnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7OztJQXNCRiwwQkFBUTs7O21EQUE2QztnQkFDbkQsT0FBTyxLQUFLLENBQ1YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDekMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQStCLENBQzlFLENBQUM7YUFDSDs7O0lBWUQsOEJBQVk7SUFjWiwyQkFBUzswQkE5Q1UseUJBQUk7Ozs7OzswQkFPSixnQ0FBVzs7Ozs7Ozs7Ozs7a0JBckdoQztFQTBFNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgZW51bSBDb25uZWN0aW9uIHtcbiAgVU5LTk9XTiA9ICd1bmtub3duJyxcbiAgRVRIRVJORVQgPSAnZXRoZXJuZXQnLFxuICBXSUZJID0gJ3dpZmknLFxuICBDRUxMXzJHID0gJzJnJyxcbiAgQ0VMTF8zRyA9ICczZycsXG4gIENFTExfNEcgPSAnNGcnLFxuICBDRUxMID0gJ2NlbGx1bGFyJyxcbiAgTk9ORSA9ICdub25lJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBOZXR3b3JrXG4gKiBAcHJlbWllciBuZXR3b3JrLWluZm9ybWF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbTmV0d29yayBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uZXR3b3JrL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3Rpb25cbiAqIGxldCBkaXNjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHdhcyBkaXNjb25uZWN0ZWQgOi0oJyk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzdG9wIGRpc2Nvbm5lY3Qgd2F0Y2hcbiAqIGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqXG4gKlxuICogLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gKiBsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogICBjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0ZWQhJyk7XG4gKiAgIC8vIFdlIGp1c3QgZ290IGEgY29ubmVjdGlvbiBidXQgd2UgbmVlZCB0byB3YWl0IGJyaWVmbHlcbiAqICAgIC8vIGJlZm9yZSB3ZSBkZXRlcm1pbmUgdGhlIGNvbm5lY3Rpb24gdHlwZS4gTWlnaHQgbmVlZCB0byB3YWl0LlxuICogICAvLyBwcmlvciB0byBkb2luZyBhbnkgYXBpIHJlcXVlc3RzIGFzIHdlbGwuXG4gKiAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICogICAgIGlmICh0aGlzLm5ldHdvcmsudHlwZSA9PT0gJ3dpZmknKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGEgd2lmaSBjb25uZWN0aW9uLCB3b29ob28hJyk7XG4gKiAgICAgfVxuICogICB9LCAzMDAwKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3AgY29ubmVjdCB3YXRjaFxuICogY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGFkdmFuY2VkXG4gKiBUaGUgYHR5cGVgIHByb3BlcnR5IHdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGNvbm5lY3Rpb24gdHlwZXM6IGB1bmtub3duYCwgYGV0aGVybmV0YCwgYHdpZmlgLCBgMmdgLCBgM2dgLCBgNGdgLCBgY2VsbHVsYXJgLCBgbm9uZWBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb25uZWN0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29yayBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50cyBmb3IgcG9zc2libGUgY29ubmVjdGlvbiB0eXBlc1xuICAgKi9cbiAgQ29ubmVjdGlvbiA9IHtcbiAgICBVTktOT1dOOiAndW5rbm93bicsXG4gICAgRVRIRVJORVQ6ICdldGhlcm5ldCcsXG4gICAgV0lGSTogJ3dpZmknLFxuICAgIENFTExfMkc6ICcyZycsXG4gICAgQ0VMTF8zRzogJzNnJyxcbiAgICBDRUxMXzRHOiAnNGcnLFxuICAgIENFTEw6ICdjZWxsdWxhcicsXG4gICAgTk9ORTogJ25vbmUnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25uZWN0aW9uIHR5cGVcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERvd25saW5rIE1heCBTcGVlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRvd25saW5rTWF4OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byB3YXRjaCBjb25uZWN0aW9uIGNoYW5nZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8J2Nvbm5lY3RlZCcgfCAnZGlzY29ubmVjdGVkJz59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTwnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnPiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5vbkNvbm5lY3QoKS5waXBlKG1hcFRvKCdjb25uZWN0ZWQnKSksXG4gICAgICB0aGlzLm9uRGlzY29ubmVjdCgpLnBpcGUobWFwVG8oJ2Rpc2Nvbm5lY3RlZCcpKSBhcyBPYnNlcnZhYmxlPCdkaXNjb25uZWN0ZWQnPlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9mZmxpbmVcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29mZmxpbmUnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvbkRpc2Nvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9ubGluZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb25saW5lJyxcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcbiAgfSlcbiAgb25Db25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=