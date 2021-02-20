import { SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
} from 'angularx-social-login';

export const LoginProviders = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '6383607950-8vfdgb52qqgfrkin3sonc424qamc5mkc.apps.googleusercontent.com'
        )
      },
    ]
  } as SocialAuthServiceConfig,
};
