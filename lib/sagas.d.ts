import { Action, AsyncActions } from "./core";
export declare function apiWorkerFactory<TPayload, TResult>(actions: AsyncActions<TPayload, TResult>, asyncHandler: (payload: TPayload) => Promise<TResult>): (action: Action<TPayload>) => IterableIterator<import("redux-saga/effects").TakeEffect | import("redux-saga/effects").RootEffect | import("redux-saga/effects").ChannelTakeEffect<any> | import("redux-saga/effects").PutEffect<any> | import("redux-saga/effects").ChannelPutEffect<any> | import("redux-saga/effects").AllEffect | import("redux-saga/effects").RaceEffect | import("redux-saga/effects").CallEffect | import("redux-saga/effects").CpsEffect | import("redux-saga/effects").ForkEffect | import("redux-saga/effects").JoinEffect | import("redux-saga/effects").CancelEffect | import("redux-saga/effects").SelectEffect | import("redux-saga/effects").ActionChannelEffect | import("redux-saga/effects").CancelledEffect | import("redux-saga/effects").FlushEffect<any> | import("redux-saga/effects").GetContextEffect | import("redux-saga/effects").SetContextEffect<any> | import("redux-saga/effects").Effect[]>;
