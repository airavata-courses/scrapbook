import { environment } from 'src/environments/environment';

export const GATEWAY_URL = environment.production ? 'http://sb-gateway-service:30001' : 'http://localhost:8081'
export const GOOGLE_DRIVE_SERVICE_URL = 'http://localhost:9090';
export const IMAGE_SERVICE_URL = 'http://localhost:8080';
