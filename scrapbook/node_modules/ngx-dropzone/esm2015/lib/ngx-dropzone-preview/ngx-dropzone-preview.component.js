import { __awaiter } from "tslib";
import { Component, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { coerceBooleanProperty } from '../helpers';
import { DomSanitizer } from '@angular/platform-browser';
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
    KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));
export class NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /** Emitted when the element should be removed. */
        this.removed = new EventEmitter();
        /** Make the preview item focusable using the tab key. */
        this.tabIndex = 0;
    }
    /** The file to preview. */
    set file(value) { this._file = value; }
    get file() { return this._file; }
    /** Allow the user to remove files. */
    get removable() {
        return this._removable;
    }
    set removable(value) {
        this._removable = coerceBooleanProperty(value);
    }
    keyEvent(event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    }
    /** We use the HostBinding to pass these common styles to child components. */
    get hostStyle() {
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /** Remove method to be used from the template. */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /** Remove the preview item (use from component code). */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    readFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                    resolve(e.target.result);
                };
                reader.onerror = e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                };
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            });
        });
    }
}
NgxDropzonePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-dropzone-preview',
                template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
                styles: [":host{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:focus,:host:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
            },] }
];
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: Input }],
    removable: [{ type: Input }],
    removed: [{ type: Output }],
    keyEvent: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: HostBinding, args: ['style',] }],
    tabIndex: [{ type: HostBinding, args: ['tabindex',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25neC1kcm9wem9uZS9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ25ELE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVwRSxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDWixpREFBYSxDQUFBO0lBQ2IsNENBQVcsQ0FBQTtBQUNaLENBQUMsRUFISSxRQUFRLEtBQVIsUUFBUSxRQUdaO0FBV0QsTUFBTSxPQUFPLDJCQUEyQjtJQUV2QyxZQUNXLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFrQnhCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFN0Isa0RBQWtEO1FBQy9CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBa0N0RCx5REFBeUQ7UUFDaEMsYUFBUSxHQUFHLENBQUMsQ0FBQztJQXZEbEMsQ0FBQztJQUlMLDJCQUEyQjtJQUMzQixJQUNJLElBQUksQ0FBQyxLQUFXLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUksSUFBSSxLQUFXLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFdkMsc0NBQXNDO0lBQ3RDLElBQ0ksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFPRCxRQUFRLENBQUMsS0FBb0I7UUFDNUIsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLEtBQUssUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsTUFBTTtZQUNQO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsSUFDSSxTQUFTO1FBQ1osTUFBTSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7OztHQVlkLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUtELGtEQUFrRDtJQUNsRCxPQUFPLENBQUMsS0FBSztRQUNaLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQseURBQXlEO0lBQ3pELE1BQU07UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztJQUVlLFFBQVE7O1lBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQXVCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUM1RCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUVoQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNuQixPQUFPLENBQUUsQ0FBQyxDQUFDLE1BQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQztnQkFFRixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2YsT0FBTyxNQUFNLENBQUMseUVBQXlFLENBQUMsQ0FBQztpQkFDekY7Z0JBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7OztZQXRHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7O0VBSVQ7O2FBRUQ7OztZQWZtQixZQUFZOzs7bUJBeUI5QixLQUFLO3dCQUtMLEtBQUs7c0JBVUwsTUFBTTt1QkFFTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQWFoQyxXQUFXLFNBQUMsT0FBTzt1QkFvQm5CLFdBQVcsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZW51bSBLRVlfQ09ERSB7XG5cdEJBQ0tTUEFDRSA9IDgsXG5cdERFTEVURSA9IDQ2XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1wcmV2aWV3Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIj48L25nLWNvbnRlbnQ+XG5cdFx0PG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UgKm5nSWY9XCJyZW1vdmFibGVcIiAoY2xpY2spPVwiX3JlbW92ZSgkZXZlbnQpXCI+XG5cdFx0PC9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlPlxuXHRgLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG5cdCkgeyB9XG5cblx0cHJvdGVjdGVkIF9maWxlOiBGaWxlO1xuXG5cdC8qKiBUaGUgZmlsZSB0byBwcmV2aWV3LiAqL1xuXHRASW5wdXQoKVxuXHRzZXQgZmlsZSh2YWx1ZTogRmlsZSkgeyB0aGlzLl9maWxlID0gdmFsdWU7IH1cblx0Z2V0IGZpbGUoKTogRmlsZSB7IHJldHVybiB0aGlzLl9maWxlOyB9XG5cblx0LyoqIEFsbG93IHRoZSB1c2VyIHRvIHJlbW92ZSBmaWxlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlbW92YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVtb3ZhYmxlO1xuXHR9XG5cdHNldCByZW1vdmFibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9yZW1vdmFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXHR9XG5cdHByb3RlY3RlZCBfcmVtb3ZhYmxlID0gZmFsc2U7XG5cblx0LyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVtb3ZlZC4gKi9cblx0QE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGU+KCk7XG5cblx0QEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuXHRrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuXHRcdFx0Y2FzZSBLRVlfQ09ERS5CQUNLU1BBQ0U6XG5cdFx0XHRjYXNlIEtFWV9DT0RFLkRFTEVURTpcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvKiogV2UgdXNlIHRoZSBIb3N0QmluZGluZyB0byBwYXNzIHRoZXNlIGNvbW1vbiBzdHlsZXMgdG8gY2hpbGQgY29tcG9uZW50cy4gKi9cblx0QEhvc3RCaW5kaW5nKCdzdHlsZScpXG5cdGdldCBob3N0U3R5bGUoKTogU2FmZVN0eWxlIHtcblx0XHRjb25zdCBzdHlsZXMgPSBgXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0aGVpZ2h0OiAxNDBweDtcblx0XHRcdG1pbi1oZWlnaHQ6IDE0MHB4O1xuXHRcdFx0bWluLXdpZHRoOiAxODBweDtcblx0XHRcdG1heC13aWR0aDogMTgwcHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0YDtcblxuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGVzKTtcblx0fVxuXG5cdC8qKiBNYWtlIHRoZSBwcmV2aWV3IGl0ZW0gZm9jdXNhYmxlIHVzaW5nIHRoZSB0YWIga2V5LiAqL1xuXHRASG9zdEJpbmRpbmcoJ3RhYmluZGV4JykgdGFiSW5kZXggPSAwO1xuXG5cdC8qKiBSZW1vdmUgbWV0aG9kIHRvIGJlIHVzZWQgZnJvbSB0aGUgdGVtcGxhdGUuICovXG5cdF9yZW1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqIFJlbW92ZSB0aGUgcHJldmlldyBpdGVtICh1c2UgZnJvbSBjb21wb25lbnQgY29kZSkuICovXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAodGhpcy5fcmVtb3ZhYmxlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZWQubmV4dCh0aGlzLmZpbGUpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBhc3luYyByZWFkRmlsZSgpOiBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG5cdFx0XHRyZWFkZXIub25sb2FkID0gZSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKGUudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZWFkZXIub25lcnJvciA9IGUgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBGaWxlUmVhZGVyIGZhaWxlZCBvbiBmaWxlICR7dGhpcy5maWxlLm5hbWV9LmApO1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIXRoaXMuZmlsZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KCdObyBmaWxlIHRvIHJlYWQuIFBsZWFzZSBwcm92aWRlIGEgZmlsZSB1c2luZyB0aGUgW2ZpbGVdIElucHV0IHByb3BlcnR5LicpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=