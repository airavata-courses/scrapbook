import { environment } from 'src/environments/environment';

export const GATEWAY_URL = environment.production ? 'sb-gateway:8081' : 'http://localhost:8081'
export const GOOGLE_DRIVE_SERVICE_URL = 'http://localhost:9090';
export const IMAGE_SERVICE_URL = 'http://localhost:8080';
 