export class OpenProfile {
  static readonly type = '[OPEN] Profile';
  constructor() {}
}

export class CloseProfile {
  static readonly type = '[CLOSE] Profile';
  constructor() {}
}

export class OpenNotifications {
  static readonly type = '[OPEN] Notifications';
  constructor() {}
}

export class CloseNotifications {
  static readonly type = '[CLOSE] Notifications';
  constructor() {}
}

export class OpenAccessRequest {
  static readonly type = '[OPEN] Access Request';
  constructor() {}
}

export class CloseAccessrequest {
  static readonly type = '[CLOSE] Access Request';
  constructor() {}
}

export class OpenUpload {
  static readonly type = '[OPEN] Upload Modal';
  constructor() {}
}

export class CloseUpload {
  static readonly type = '[CLOSE] Upload Modal';
  constructor() {}
}

export class OpenFilters {
  static readonly type = '[OPEN] Filters';
  constructor() {}
}

export class CloseFilters {
  static readonly type = '[CLOSE] Filters';
  constructor() {}
}

export class OpenLoading {
  static readonly type = '[OPEN] Loading';
  constructor() {}
}

export class CloseLoading {
  static readonly type = '[CLOSE] Loading';
  constructor() {}
}

export class SetPageError {
  static readonly type = '[SET] Page Error';
  constructor(public err: string) {}
}

export class ClearPageError {
  static readonly type = '[CLEAR] Page Error';
  constructor() {}
}

export class OpenImageModal {
  static readonly type = '[OPEN] Image Modal';
  constructor() {}
}

export class CloseImageModal {
  static readonly type = '[CLOSE] Image Modal';
  constructor() {}
}

export class OpenUploadingPanel {
  static readonly type = '[OPEN] Uploading Panel';
  constructor() {}
}

export class CloseUploadingPanel {
  static readonly type = '[CLOSE] Uploading Panel';
  constructor() {}
}

export class SetPendingUploadRequests {
  static readonly type = '[SET] Pending Upload Requests';
  constructor(public idx: number) {}
}

export class OpenSettings {
  static readonly type = '[OPEN] Album Settings';
  constructor() {}
}

export class CloseSettings {
  static readonly type = '[CLOSE] Album Settings';
  constructor() {}
}

export class OpenCollaborators {
  static readonly type = '[OPEN] Collaborators';
  constructor() {}
}

export class CloseCollaborators {
  static readonly type = '[CLOSE] Collaborators';
  constructor() {}
}

export class ChangeTab {
  static readonly type = '[CHANGE] Tab';
  constructor(public tab: string) {}
}

export class OpenLogin {
  static readonly type = '[OPEN] Login';
  constructor() {}
}

export class CloseLogin {
  static readonly type = '[CLOSE] Login';
  constructor() {}
}