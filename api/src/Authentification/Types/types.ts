export enum LoginRegisterManagerStates {
  AwaitingHandleLoginRequest,
  AwaitingInputValidation,
  AwaitingPasswordHash,
  AwaitingGetPasswordFromDb,
  AwaitingPasswordCompare,
  Completed,
}
