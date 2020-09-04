import { App, AppOptions } from './app';
import { Auth } from './auth';
import { Database } from './database';
import { Analytics } from './analytics';
import { Messaging } from './messaging';
import { RemoteConfig } from './remote-config';
export declare function app(name?: string): App;
export declare function initializeApp(options?: AppOptions, name?: string): App;
export declare function auth(): Auth;
export declare function database(): Database;
export declare function analytics(): Analytics;
export declare function messaging(): Messaging;
export declare function remoteConfig(): RemoteConfig;
export { Auth, User, UserInfo, ActionCodeInfo, AuthStateListener, AuthCredential, EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from './auth';
export { Database, DataSnapshot, EventListenerCallback, Query, Reference, ThenableReference, OnDisconnect } from './database';
export { Analytics, LogEventParams } from './analytics';
export { Messaging } from './messaging';
export { RemoteConfig, ConfigInfo, ConfigSettings, ConfigDefaults } from './remote-config';
export { ErrorCallback, SuccessCallback } from './utils';