import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function registerIcons(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
  matIconRegistry.addSvgIcon(
    'iu',
    domSanitizer.bypassSecurityTrustResourceUrl(
      `../assets/landing/iu.svg`
    )
  );

  matIconRegistry.addSvgIcon(
    'google',
    domSanitizer.bypassSecurityTrustResourceUrl(
      `../assets/landing/google.svg`
    )
  );
}
