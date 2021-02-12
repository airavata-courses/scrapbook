import { Injectable } from '@angular/core';
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
export class NgxDropzoneService {
    parseFileList(files, accept, maxFileSize, multiple) {
        const addedFiles = [];
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        const acceptFiletypes = accept.split(',').map(it => it.toLowerCase().trim());
        const filetype = file.type.toLowerCase();
        const filename = file.name.toLowerCase();
        const matchedFileType = acceptFiletypes.find(acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        });
        return !!matchedFileType;
    }
    rejectFile(rejectedFiles, file, reason) {
        const rejectedFile = file;
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
}
NgxDropzoneService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRyb3B6b25lL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZHJvcHpvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUIzQzs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsYUFBYSxDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsV0FBbUIsRUFBRSxRQUFpQjtRQUVwRixNQUFNLFVBQVUsR0FBVyxFQUFFLENBQUM7UUFDOUIsTUFBTSxhQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxTQUFTO2FBQ1Q7WUFFRCxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxTQUFTO2FBQ1Q7WUFFRCxJQUFJLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ3BELFNBQVM7YUFDVDtZQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFFRCxNQUFNLE1BQU0sR0FBcUI7WUFDaEMsVUFBVTtZQUNWLGFBQWE7U0FDYixDQUFDO1FBRUYsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVUsRUFBRSxNQUFjO1FBRTVDLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFekMsTUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUU3RCw2Q0FBNkM7WUFDN0MsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvRDtZQUVELHVDQUF1QztZQUN2QyxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztZQUVELG1EQUFtRDtZQUNuRCxPQUFPLGNBQWMsSUFBSSxRQUFRLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDMUIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxhQUE2QixFQUFFLElBQVUsRUFBRSxNQUFvQjtRQUVqRixNQUFNLFlBQVksR0FBRyxJQUFvQixDQUFDO1FBQzFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRTdCLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBeEVELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVNlbGVjdFJlc3VsdCB7XG5cblx0LyoqIFRoZSBhZGRlZCBmaWxlcywgZW1pdHRlZCBpbiB0aGUgZmlsZXNBZGRlZCBldmVudC4gKi9cblx0YWRkZWRGaWxlczogRmlsZVtdO1xuXG5cdC8qKiBUaGUgcmVqZWN0ZWQgZmlsZXMsIGVtaXR0ZWQgaW4gdGhlIGZpbGVzUmVqZWN0ZWQgZXZlbnQuICovXG5cdHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlamVjdGVkRmlsZSBleHRlbmRzIEZpbGUge1xuXG5cdC8qKiBUaGUgcmVhc29uIHRoZSBmaWxlIHdhcyByZWplY3RlZC4gKi9cblx0cmVhc29uPzogUmVqZWN0UmVhc29uO1xufVxuXG5leHBvcnQgdHlwZSBSZWplY3RSZWFzb24gPSAndHlwZScgfCAnc2l6ZScgfCAnbm9fbXVsdGlwbGUnO1xuXG4vKipcbiAqIFRoaXMgc2VydmljZSBjb250YWlucyB0aGUgZmlsdGVyaW5nIGxvZ2ljIHRvIGJlIGFwcGxpZWQgdG9cbiAqIGFueSBkcm9wcGVkIG9yIHNlbGVjdGVkIGZpbGUuIElmIGEgZmlsZSBtYXRjaGVzIGFsbCBjcml0ZXJpYVxuICogbGlrZSBtYXhpbXVtIHNpemUgb3IgYWNjZXB0IHR5cGUsIGl0IHdpbGwgYmUgZW1pdHRlZCBpbiB0aGVcbiAqIGFkZGVkRmlsZXMgYXJyYXksIG90aGVyd2lzZSBpbiB0aGUgcmVqZWN0ZWRGaWxlcyBhcnJheS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lU2VydmljZSB7XG5cblx0cGFyc2VGaWxlTGlzdChmaWxlczogRmlsZUxpc3QsIGFjY2VwdDogc3RyaW5nLCBtYXhGaWxlU2l6ZTogbnVtYmVyLCBtdWx0aXBsZTogYm9vbGVhbik6IEZpbGVTZWxlY3RSZXN1bHQge1xuXG5cdFx0Y29uc3QgYWRkZWRGaWxlczogRmlsZVtdID0gW107XG5cdFx0Y29uc3QgcmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW10gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKGkpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaXNBY2NlcHRlZChmaWxlLCBhY2NlcHQpKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0RmlsZShyZWplY3RlZEZpbGVzLCBmaWxlLCAndHlwZScpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1heEZpbGVTaXplICYmIGZpbGUuc2l6ZSA+IG1heEZpbGVTaXplKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0RmlsZShyZWplY3RlZEZpbGVzLCBmaWxlLCAnc2l6ZScpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFtdWx0aXBsZSAmJiBhZGRlZEZpbGVzLmxlbmd0aCA+PSAxKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0RmlsZShyZWplY3RlZEZpbGVzLCBmaWxlLCAnbm9fbXVsdGlwbGUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGFkZGVkRmlsZXMucHVzaChmaWxlKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQ6IEZpbGVTZWxlY3RSZXN1bHQgPSB7XG5cdFx0XHRhZGRlZEZpbGVzLFxuXHRcdFx0cmVqZWN0ZWRGaWxlc1xuXHRcdH07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHJpdmF0ZSBpc0FjY2VwdGVkKGZpbGU6IEZpbGUsIGFjY2VwdDogc3RyaW5nKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoYWNjZXB0ID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFjY2VwdEZpbGV0eXBlcyA9IGFjY2VwdC5zcGxpdCgnLCcpLm1hcChpdCA9PiBpdC50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7XG5cdFx0Y29uc3QgZmlsZXR5cGUgPSBmaWxlLnR5cGUudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBmaWxlbmFtZSA9IGZpbGUubmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Y29uc3QgbWF0Y2hlZEZpbGVUeXBlID0gYWNjZXB0RmlsZXR5cGVzLmZpbmQoYWNjZXB0RmlsZXR5cGUgPT4ge1xuXG5cdFx0XHQvLyBjaGVjayBmb3Igd2lsZGNhcmQgbWltZXR5cGUgKGUuZy4gaW1hZ2UvKilcblx0XHRcdGlmIChhY2NlcHRGaWxldHlwZS5lbmRzV2l0aCgnLyonKSkge1xuXHRcdFx0XHRyZXR1cm4gZmlsZXR5cGUuc3BsaXQoJy8nKVswXSA9PT0gYWNjZXB0RmlsZXR5cGUuc3BsaXQoJy8nKVswXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgZm9yIGZpbGUgZXh0ZW5zaW9uIChlLmcuIC5jc3YpXG5cdFx0XHRpZiAoYWNjZXB0RmlsZXR5cGUuc3RhcnRzV2l0aChcIi5cIikpIHtcblx0XHRcdFx0cmV0dXJuIGZpbGVuYW1lLmVuZHNXaXRoKGFjY2VwdEZpbGV0eXBlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgZm9yIGV4YWN0IG1pbWV0eXBlIG1hdGNoIChlLmcuIGltYWdlL2pwZWcpXG5cdFx0XHRyZXR1cm4gYWNjZXB0RmlsZXR5cGUgPT0gZmlsZXR5cGU7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gISFtYXRjaGVkRmlsZVR5cGU7XG5cdH1cblxuXHRwcml2YXRlIHJlamVjdEZpbGUocmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW10sIGZpbGU6IEZpbGUsIHJlYXNvbjogUmVqZWN0UmVhc29uKSB7XG5cblx0XHRjb25zdCByZWplY3RlZEZpbGUgPSBmaWxlIGFzIFJlamVjdGVkRmlsZTtcblx0XHRyZWplY3RlZEZpbGUucmVhc29uID0gcmVhc29uO1xuXG5cdFx0cmVqZWN0ZWRGaWxlcy5wdXNoKHJlamVjdGVkRmlsZSk7XG5cdH1cbn1cbiJdfQ==