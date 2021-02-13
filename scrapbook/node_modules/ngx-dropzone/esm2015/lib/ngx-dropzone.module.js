import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneLabelDirective } from './ngx-dropzone-label.directive';
import { NgxDropzonePreviewComponent } from './ngx-dropzone-preview/ngx-dropzone-preview.component';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
import { NgxDropzoneImagePreviewComponent } from './ngx-dropzone-preview/ngx-dropzone-image-preview/ngx-dropzone-image-preview.component';
import { NgxDropzoneRemoveBadgeComponent } from './ngx-dropzone-preview/ngx-dropzone-remove-badge/ngx-dropzone-remove-badge.component';
import { NgxDropzoneVideoPreviewComponent } from './ngx-dropzone-preview/ngx-dropzone-video-preview/ngx-dropzone-video-preview.component';
export class NgxDropzoneModule {
}
NgxDropzoneModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ],
                exports: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZHJvcHpvbmUvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1kcm9wem9uZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDMUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDdkksT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUF1QjFJLE1BQU0sT0FBTyxpQkFBaUI7OztZQXJCN0IsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQixnQ0FBZ0M7b0JBQ2hDLCtCQUErQjtvQkFDL0IsZ0NBQWdDO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1Isb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IsZ0NBQWdDO29CQUNoQywrQkFBK0I7b0JBQy9CLGdDQUFnQztpQkFDaEM7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWRyb3B6b25lLWxhYmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lL25neC1kcm9wem9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlL25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldy9uZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5neERyb3B6b25lQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lTGFiZWxEaXJlY3RpdmUsXG5cdFx0Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lSW1hZ2VQcmV2aWV3Q29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lUmVtb3ZlQmFkZ2VDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHROZ3hEcm9wem9uZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlLFxuXHRcdE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lTW9kdWxlIHsgfVxuIl19